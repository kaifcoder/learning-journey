// /api/chapter/getInto

import { prisma } from "@/lib/db";
import {

  searchYoutube,
} from "@/lib/youtube";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodyParser = z.object({
  chapterId: z.string(),
});

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function POST(req: Request, res: Response) {
  try {
    // await sleep(1000);
    const body = await req.json();
    const { chapterId } = bodyParser.parse(body);
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });
    if (!chapter) {
      return NextResponse.json(
        {
          success: false,
          error: "Chapter not found",
        },
        { status: 404 }
      );
    }
    const videoId = await searchYoutube(chapter.youtubeSearchQuery);
  

    // let transcript = await getTranscript(videoId);
    await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        videoId: videoId,
        summary: "Feature coming soon",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid body",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "unknown",
        },
        { status: 500 }
      );
    }
  }
}