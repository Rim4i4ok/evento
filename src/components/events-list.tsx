import { getEvents } from "@/lib/db";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";
import { DB_STEP_ITEMS } from "@/lib/constants";

type EventsListProps = {
  city: string;
  page: number;
};

async function EventsList({ city, page }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > DB_STEP_ITEMS * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}

export default EventsList;
