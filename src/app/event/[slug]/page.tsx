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
      <section className="relative h-[361px] overflow-hidden">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          priority
        />

        <div className="relative z-1">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
        </div>
      </section>

      <div></div>
    </main>
  );
}

export default EventPage;
