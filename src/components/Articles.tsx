import { useState } from "react";
import { publishers } from "../constants";
import type { ArticleInList } from "../types";
import Article from "./Article";
import ExternalLink from "./ExternalLink";
import { SearchIcon } from "@heroicons/react/outline";

enum SORT_TYPE {
  published_at = "published_at",
  reading_time_minutes = "reading_time_minutes",
  page_views_count = "page_views_count",
  positive_reactions_count = "positive_reactions_count",
}

const Articles = ({ articles }: { articles: ArticleInList[] }) => {
  const [search, setState] = useState("");
  const [sort, setSort] = useState(SORT_TYPE.published_at);

  function filterArticles(item: ArticleInList) {
    return (
      item.title.includes(search) ||
      item.tag_list.some((tag) => tag.includes(search))
    );
  }

  const filteredArticles = articles.filter(filterArticles).sort((a, b) => {
    if (sort === SORT_TYPE.published_at) {
      return new Date(b[sort]).getTime() - new Date(a[sort]).getTime();
    }
    return Number(b[sort]) - Number(a[sort]);
  });

  return (
    <>
      <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>
        Recent Articles
      </h1>
      <p className="text-lg">
        I&apos;m big on developer advocacy and part of the following programmes:
      </p>
      <div>
        {publishers.map((exp) => (
          <ExternalLink {...exp} />
        ))}
      </div>
      <br />
      <hr />
      <div className="py-4 flex-1">
        <div
          className={"flex flex-col sm:flex-row sm:justify-between mt-6 mb-10"}
        >
          <div
            className={
              "relative mb-4 sm:mb-0 sm:w-1/2 sm:mr-10 sm:max-w-[450px]"
            }
          >
            <input
              type={"text"}
              placeholder="Search keywords..."
              value={search}
              onChange={(e) => setState(e.target.value)}
              className="w-full bg-dark border-2 border-slate-800 text-slate-300 p-2 pl-6 rounded-lg outline-none ring-yellow-400 hover:ring-2 focus:ring-2"
            />
            <SearchIcon
              className={"text-slate-400 h-6 w-6 absolute right-4 top-2.5"}
            />
          </div>
          <select
            className={
              "sm:w-1/2 sm:max-w-[200px] p-2 rounded text-slate-300 bg-dark border-2 border-slate-800 shadow-slate-800 outline-none focus:ring-2 ring-yellow-400"
            }
            value={sort}
            onChange={(e) => setSort(e.target.value as SORT_TYPE)}
          >
            <option className={"p-2"} value={SORT_TYPE.published_at}>
              Published
            </option>
            <option className={"p-2"} value={SORT_TYPE.page_views_count}>
              Popular
            </option>
            <option
              className={"p-2"}
              value={SORT_TYPE.positive_reactions_count}
            >
              Most loved
            </option>
            <option className={"p-2"} value={SORT_TYPE.reading_time_minutes}>
              Reading time
            </option>
          </select>
        </div>
        {filteredArticles.length ? (
          filteredArticles.map((article) => <Article article={article} />)
        ) : (
          <div className="flex my-20 md:w-1/2 text-center mx-auto">
            <p className="text-slate-200 text-lg mr-1">
              Sorry, no matching article is currently available, but you can
              always{" "}
              <a
                href={"mailto:hi@theanshuman.dev"}
                className="rounded text-yellow-400 hover:underline text-lg"
              >
                request an article
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Articles;
