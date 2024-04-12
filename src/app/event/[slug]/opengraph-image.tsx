import { ImageResponse } from "next/og";

export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json()
  );

  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>Evento - Browse events around you</p>
      </section>
    ),
    {
      ...size,
    }
  );
}
