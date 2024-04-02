import { EventoEvent } from "@/lib/types";

type EventCardProps = {
  event: EventoEvent;
};

function EventCard({ event }: EventCardProps) {
  return <section>{event.name}</section>;
}

export default EventCard;
