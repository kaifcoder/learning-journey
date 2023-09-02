"use client";
import { cn } from "@/lib/utils";
import { Chapter } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

type Props = {
  chapter: Chapter;
  chapterIndex: number;
  completedChapters: Set<String>;
  setCompletedChapters: React.Dispatch<React.SetStateAction<Set<String>>>;
};

export type ChapterCardHandler = {
  triggerLoad: () => void;
};

const ChapterCard = React.forwardRef<ChapterCardHandler, Props>(
  ({ chapter, chapterIndex, completedChapters, setCompletedChapters }, ref) => {
    const { toast } = useToast();
    const [success, setSuccess] = useState<Boolean | null>(null);
    const { mutate: getChapterInfo, isLoading } = useMutation({
      mutationFn: async () => {
        const response = await axios.post("/api/chapter/getinfo", {
          chapterId: chapter.id,
        });
        return response.data;
      },
    });
    const addChapterIdtoSet = useCallback(() => {
      setCompletedChapters((prev) => {
        const newSet = new Set(prev);
        newSet.add(chapter.id);
        return newSet;
      });
    }, [setCompletedChapters, chapter.id]);

    useEffect(() => {
      if (chapter.videoId) {
        setSuccess(true);
        addChapterIdtoSet();
      }
    }, [chapter, addChapterIdtoSet]);

    useImperativeHandle(ref, () => ({
      async triggerLoad() {
        if (chapter.videoId) {
          addChapterIdtoSet();
          return;
        }
        getChapterInfo(undefined, {
          onSuccess: () => {
            setSuccess(true);
            addChapterIdtoSet();
            console.log("success");
          },
          onError: (error) => {
            setSuccess(false);
            toast({
              title: "Error",
              description: "There was an error loading your chapter",
              variant: "destructive",
            });
            addChapterIdtoSet();
            console.log("error", error);
          },
        });
      },
    }));
    return (
      <div
        key={chapter.id}
        className={cn("px-4 py-2 mt-2 rounded-md flex justify-between", {
          "bg-secondary": success === null,
          "bg-green-500": success === true,
          "bg-red-500": success === false,
        })}
      >
        <h5 className="">
          Chapter {chapterIndex + 1}: {chapter.name}
        </h5>
        {isLoading && (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
      </div>
    );
  }
);

ChapterCard.displayName = "ChapterCard";

export default ChapterCard;
