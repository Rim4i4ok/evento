import { EventoEvent } from "@prisma/client";

const BASE_API_URL =
  "https://bytegrad.com/course-assets/projects/evento/api/events";

export async function getEvents(city: string) {
  const response = await fetch(`${BASE_API_URL}?city=${city}`, {
    next: {
      revalidate: 5 * 60,
    },
  });

  const events: EventoEvent[] = await response.json();

  return events;
}

export async function getEvent(slug: string) {
  const response = await fetch(`${BASE_API_URL}/${slug}`);
  const event: EventoEvent = await response.json();

  return event;
}
