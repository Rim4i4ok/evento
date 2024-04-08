import { getEvents } from "@/lib/db";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page: number;
};

async function EventsList({ city, page }: EventsListProps) {
  const events = await getEvents(city, page);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls />
    </section>
  );
}

export default EventsList;
