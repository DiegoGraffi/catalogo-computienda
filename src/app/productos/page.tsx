import { Suspense } from "react";
import RecommendedProducts from "../sections/HomeSections/RecommendedProducts";

export const fetchCache = "force-no-store";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <RecommendedProducts />
      </Suspense>
    </div>
  );
}
