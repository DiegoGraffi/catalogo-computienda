import Hero from "./sections/HeroSections/Hero";

export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Hero />
    </div>
  );
}
