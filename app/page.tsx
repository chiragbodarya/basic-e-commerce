import Hero from "@/src/components/sections/Hero";
import Categories from "@/src/components/sections/Categories";
import TopProducts from "@/src/components/sections/TopProducts";
import AppConnect from "@/src/components/sections/AppConnect";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <div className="space-y-0">
        <Categories />
        <TopProducts />
        <AppConnect />
      </div>
    </div>
  );
}
