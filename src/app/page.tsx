import FeaturePosts from "@/components/home/FeaturedPosts";
import Hero from "@/components/common/Hero";
import CarouselPosts from "@/components/home/CarouselPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturePosts />
      <CarouselPosts />
    </>
  );
}
