import { LinkInformationType } from "../types";

export default function ExternalLink({ url, name }: LinkInformationType) {
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      className="text-gray-300 tracking-widest text-lg inline-block my-2 mr-10 pb-1 border-gray-400 border-solid border-b-2 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-75"
      href={url}
    >
      {name}
    </a>
  );
}
