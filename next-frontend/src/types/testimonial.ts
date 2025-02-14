export interface TestimonialType {
  _id: string;
  name: string;
  description: string;
  profile_picture?: {
    asset: {
      _ref: string;
    };
  };
}

export interface TestimonialProps {
  testimonials: TestimonialType[];
  showDescription: boolean;
}
