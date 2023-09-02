import { cn } from "@/lib/utils";
import { Chapter, Course, Unit } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
  currentChapterId: string;
};

const CourseSidebar = async ({ course, currentChapterId }: Props) => {
  return (
    <div className="w-[320px] fixed z-20 mt-8  top-1/2   -translate-y-1/2 p-6 rounded-r-2xl bg-secondary">
      <h1 className="text-3xl font-bold ">{course.name}</h1>
      <div className="h-[420px] overflow-y-auto ">
        {course.units.map((unit, unitindex) => {
          return (
            <div key={unit.id} className="mt-4">
              <h2 className="text-sm uppercase text-secondary-foreground/60">
                Unit {unitindex + 1}
              </h2>
              <h3 className="text-lg font-bold">{unit.name}</h3>
              {unit.chapters.map((chapter, chapindex) => {
                return (
                  <div key={chapter.id} className="flex mt-2">
                    <Link
                      href={`/course/${course.id}/${unitindex}/${chapindex}`}
                      className={cn(
                        "text-secondary-foreground/60 hover:text-secondary-foreground transition-colors",
                        {
                          "text-green-500 font-bold":
                            chapter.id === currentChapterId,
                        }
                      )}
                    >
                      {chapter.name}
                    </Link>
                  </div>
                );
              })}
              <Separator className="mt-2 text-gray-500 bg-gray-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSidebar;
