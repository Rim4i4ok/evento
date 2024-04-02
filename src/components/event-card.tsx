import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

function EventCard({
  event: { imageUrl, name, organizerName, location, date, slug },
}: EventCardProps) {
  return (
    <Link
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${slug}`}
    >
      <section className="w-full h-full  bg-white/[3%] rounded-xl overflow-hidden flex flex-col  relative transition hover:scale-105 active:scale-[1.02]">
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

        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}

export default EventCard;
