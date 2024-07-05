export default function Home() {
  return (
    <div>
      <h1 className="hidden 2xl:block">Ich bin 2XL</h1>
      <h1 className="hidden xl:block 2xl:hidden">Ich bin XL</h1>
      <h1 className="hidden lg:block xl:hidden">Ich bin LG</h1>
      <h1 className="hidden md:block lg:hidden">Ich bin MD</h1>
      <h1 className="block md:hidden">Ich bin SM</h1>
    </div>
  );
}
