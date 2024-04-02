import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
  event: EventoEvent;
};

function EventCard({
  event: { imageUrl, name, organizerName, location },
}: EventCardProps) {
  return (
    <section className="h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden flex flex-col flex-1 basis-80">
      <Image
        className="h-[60%] object-fill"
        src={imageUrl}
        alt={name}
        width={500}
        height={280}
      />

      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="italic text-white/75">{organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{location}</p>
      </div>
    </section>
  );
}

export default EventCard;
