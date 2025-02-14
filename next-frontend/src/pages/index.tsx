import Testimonial from "@/components/Testimonial";
import { client } from "@/sanity/client";
import { TestimonialProps, TestimonialType } from "@/types/testimonial";

const query = `*[_type == "testimonial"]`;

export default function Home({ testimonials }: TestimonialProps) {
  return (
    <>
      <Testimonial testimonials={testimonials} showDescription={true} />
      <Testimonial testimonials={testimonials} showDescription={false} />
    </>
  );
}

export async function getServerSideProps() {
  const testimonials = await client.fetch<TestimonialType[]>(query);
  console.log(testimonials);
  return { props: { testimonials } };
}
