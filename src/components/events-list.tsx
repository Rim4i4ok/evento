import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: EventoEvent[];
};

function EventsList({ events }: EventsListProps) {
  return (
    <section>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
