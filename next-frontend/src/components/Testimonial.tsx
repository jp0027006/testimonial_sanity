import { TestimonialProps } from "@/types/testimonial";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

export default function Testimonial({
  testimonials,
  showDescription,
}: TestimonialProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-semibold mb-2">{showDescription ? "Section 1" : "Section 2"}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className={`${showDescription ? "bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer" : ""}`}
          >
            <div className="w-32 h-32 mx-auto rounded-md shadow-md mb-2">
              {testimonial.profile_picture && (
                <img
                  className="w-full h-full object-cover"
                  src={urlFor(testimonial.profile_picture).url()}
                  alt={`Profile picture of ${testimonial.name}`}
                />
              )}
            </div>
            <div className="text-center">
              {showDescription && (
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
