import clsx from "clsx";

import { contacts } from "../constants";
import HitCounter from "./HitCounter";

export default function Footer({ counter }: { counter?: number }) {
  return (
    <footer className="w-full lg:w-3/4 xl:max-w-[990px] mx-auto border-t px-6 lg:px-0">
      <div className="place-items-start py-4 grid grid-cols-3 items-start justify-between">
        {contacts.map((contact, index) => (
            <a
            key={contact.url} href={contact.url}
              target={contact.sameTab ? "_self" : "_blank"}
              className={clsx("py-1 hover:underline", {
                "ml-auto w-24": index % 3 === 2,
                "mx-auto w-24": index % 3 === 1,
              })}
            >
              {contact.name}
            </a>
        ))}
      </div>
      {counter ? <HitCounter counter={counter} /> : null}
      <p className="p-2 text-lg text-center tracking-wide">
        Made using Astro by <i>Anshuman Bhardwaj</i>
      </p>
    </footer>
  );
}
