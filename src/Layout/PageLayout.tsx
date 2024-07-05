import Footer from "./Footer";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavigationMenu />
      {children}
      <Footer />
    </>
  );
}
