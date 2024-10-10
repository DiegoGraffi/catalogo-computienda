import ProductGrid from "@/components/productosComponents/ProductGrid";

export default function products() {
  return (
    <div className="min-h-screen w-screen flex ">
      <div className="basis-2/6 border">
        <ul>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
        </ul>
      </div>

      <div className="basis-4/6 border">
        <ProductGrid />
      </div>
    </div>
  );
}
