import LogoImage from "../Assets/Images/logo.jpg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function Nav({
  isSelected,
  setIsSelected,
}: {
  isSelected: string;
  setIsSelected: Dispatch<SetStateAction<"b" | "p">>;
}) {
  return (
    <>
      <NavigationItemContainer className="font-light">
        <li
          className={
            isSelected === "p"
              ? "text-red-600 font-bold"
              : "text-black font-light"
          }
          style={{ cursor: "pointer" }}
          onClick={() => setIsSelected("p")}
        >
          Privatkunden
        </li>
        <li
          className={
            isSelected === "b"
              ? "text-red-600 font-bold"
              : "text-black font-light"
          }
          style={{ cursor: "pointer" }}
          onClick={() => setIsSelected("b")}
        >
          Geschäftskunden
        </li>
      </NavigationItemContainer>
      <NavigationItemContainer className="font-bold">
        <li>Mobilfunk</li>
        <li>Internet</li>
        {isSelected === "p" ? (
          <>
            <li>TV</li>
            <li>Smarthome</li>
          </>
        ) : (
          <>
            <li>Telefonanlagen</li>
          </>
        )}
        <li>Garantieerweiterungen</li>
      </NavigationItemContainer>
    </>
  );
}

function ExtraNav() {
  return (
    <>
      <ExtraNavigation>
        <li>Angebote</li>
        <li>Onlineshop</li>
        <li>Kontakt</li>
      </ExtraNavigation>
      <ExtraNavigation>
        <li>Alsfeld</li>
        <li>Grünberg</li>
        <li>Schotten</li>
        <li>Schwalmstadt</li>
        <li>Nidda</li>
        <li>Kassel</li>
      </ExtraNavigation>
    </>
  );
}

export default function NavigationMenu() {
  const [isSelected, setIsSelected] = useState<"p" | "b">("p");
  return (
    <>
      {/* Navigation for Desktop */}
      <nav className="grid-cols-7 w-[80%] mx-auto gap-8 py-5 shadow-xl rounded-2xl px-5 mt-4 hidden xl:grid">
        <img src={LogoImage} alt="Logo" />
        <div className="flex flex-col gap-4 col-span-5">
          <Nav isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
        <div className="flex flex-col gap-4">
          <ExtraNav />
        </div>
      </nav>

      {/* Tablet Navigation */}
      <nav className="hidden md:grid grid-cols-6 gap-2 xl:hidden w-full shadow-2xl">
        <img src={LogoImage} alt="Logo"></img>
        <div className="flex flex-col gap-4 col-span-4">
          <Nav isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
        <Hamburger />
      </nav>
    </>
  );
}

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body == null) return;

    if (isOpen) {
      body.classList.add("open");
    } else {
      body.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <>
      <div className="wrapper">
        <header id="header" className="header">
          <nav className="menu-navigation">
            <div
              className={`menu-icon-toggle`}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <span></span>
            </div>
            <i className="menu-background top"></i>
            <i className="menu-background middle"></i>
            <i className="menu-background bottom"></i>
            <ul className="menu">
              <li>
                <a href="#">For Business</a>
              </li>
              <li>
                <a href="#">For Personal</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

function NavigationItemContainer({
  children,
  className = "",
}: {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}) {
  return (
    <ul
      className={`flex flow-row 2xl:gap-10 xl:gap-2 lg:gap-8 md:gap-4 justify-start ${className}`}
    >
      {children}
    </ul>
  );
}

function ExtraNavigation({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return (
    <ul className="flex flex-row 2xl:gap-4 xl:gap-2 justify-end font-light">
      {children}
    </ul>
  );
}
