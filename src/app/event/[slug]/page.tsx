import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: `Events in ${capitalize(event.name)}`,
  };
}

export async function generateStaticParams() {
  // popular events
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

async function EventPage({ params: { slug } }: Props) {
  const event = await getEvent(slug);

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

      <div className="text-center px-5 py-16 min-h-[75vh]">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 mx-auto text-white/75 max-w-4xl">
      {children}
    </p>
  );
}

export default EventPage;
