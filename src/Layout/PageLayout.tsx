import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenu />
      <div>{children}</div>
      <Footer />
    </>
  );
}
