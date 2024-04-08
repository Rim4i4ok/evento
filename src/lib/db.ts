import { notFound } from "next/navigation";
import prisma from "./prisma";
import { capitalize } from "./utils";

const STEP = 6;

export async function getEvents(city: string, page: number = 1) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: STEP,
    skip: (page - 1) * STEP,
  });

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}
