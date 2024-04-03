import { getEvents } from "@/lib/apit";
import EventCard from "./event-card";

type EventsListProps = {
  city: string;
};

async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
