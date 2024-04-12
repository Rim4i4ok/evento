import "server-only";

import { notFound } from "next/navigation";
import prisma from "./prisma";
import { capitalize } from "./utils";
import { DB_STEP_ITEMS } from "./constants";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(
  async (city: string, page: number = 1) => {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc",
      },
      take: DB_STEP_ITEMS,
      skip: (page - 1) * DB_STEP_ITEMS,
    });

    let totalCount = 0;
    if (city === "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: city === "all" ? undefined : capitalize(city),
        },
      });
    }

    return { events, totalCount };
  }
);

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
