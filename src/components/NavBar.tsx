import { useReadingProgress } from "../hooks";
import clsx from "clsx";

const NavLinks = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/articles",
    name: "Articles",
  },
  {
    url: "/services",
    name: "Services",
  },
  {
    url: "/about",
    name: "About",
  },
];

export default function NavBar() {
  const completion = useReadingProgress();

  return (
    <nav className="print:hidden sticky z-50 top-0 backdrop-blur-3xl py-3">
      <span
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full h-1 bg-yellow-400`}
      />
      <div className="w-full flex flex-row items-end px-6 lg:px-0 lg:w-3/4 xl:max-w-[990px] mx-auto ">
        <h2
          className={
            "hidden self-start text-yellow-400 lg:inline-block text-3xl"
          }
        >
          Anshuman Bhardwaj
        </h2>
        <div className="w-full sm:w-auto flex flex-row justify-between mx-auto sm:justify-start lg:mr-0 lg:ml-16">
          {NavLinks.map((item) => (

              <a
              key={item.url} href={item.url}
                className={clsx(
                  "sm:mr-24 last:mr-0 outline-none text-lg rounded p-1 px-4 first:pl-0 last:pr-0 sm:first:pl-4 sm:last:pr-4 hover:text-yellow-400 focus:text-yellow-400 focus:ring-2 ring-yellow-400",
                  {
                    "text-yellow-400": window.location.pathname === item.url,
                  }
                )}
              >
                {item.name}
              </a>

          ))}
        </div>
      </div>
    </nav>
  );
}
