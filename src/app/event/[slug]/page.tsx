import H1 from "@/components/h1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

async function EventPage({ params: { slug } }: EventPageProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          priority
        />

        <div className="relative z-1 flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div className="flex flex-col ">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>

            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="text-lg bg-white/20 capitalize mt-5 lg:mt-auto w-[95vm] sm:w-full py-2 rounded-md border-2 border-white/10 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div></div>
    </main>
  );
}

export default EventPage;
