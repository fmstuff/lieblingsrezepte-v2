import config from "@config/config.json";
import { humanize, slugify } from "@lib/utils/textConverter";
import Fuse from "fuse.js";
import { useEffect, useRef, useState } from "react";
import { BiCategoryAlt, BiPurchaseTagAlt } from "react-icons/bi/index.js";

const { summary_length } = config.settings;
const base_path = config.site.base_path;

export type SearchItem = {
  slug: string;
  data: any;
  content: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <div className="min-h-[45vh]">
      <input
        className="form-input w-full text-center"
        placeholder="Suche nach Rezepten..."
        type="text"
        name="search"
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        ref={inputRef}
      />

      {inputVal.length > 1 && (
        <div className="my-6 text-center">
          Found {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " result"
            : " results"}{" "}
          for '{inputVal}'
        </div>
      )}

      <div className="row">
        {searchResults?.map(({ item }) => (
          <div key={item.slug} className={"col-12 mb-8 sm:col-6"}>
            {item.data.image && (
              <a
                href={`${base_path}/${item.slug}`}
                className="group block overflow-hidden rounded-lg hover:text-primary"
              >
                <img
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  src={`${base_path}/${item.data.image}`}
                  alt={item.data.title}
                  width={445}
                  height={230}
                />
              </a>
            )}

            <ul className="mb-4 mt-6 flex flex-wrap items-center text-text">
              <li className="mr-5 flex flex-wrap items-center">
                <BiCategoryAlt className="mr-1 h-[18px] w-[18px] text-gray-600" />
                <>
                  <ul>
                    {item.data.categories.map((category: string, i: number) => (
                      <li className="inline-block">
                        <a
                          href={`${base_path}/categories/${slugify(category)}`}
                          className="mr-2 font-medium hover:text-primary"
                        >
                          {humanize(category)}
                          {i !== item.data.categories.length - 1 && ","}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              </li>
              <li class="mr-5 flex flex-wrap items-center">
                <BiPurchaseTagAlt className="mr-1 h-[18px] w-[18px] text-gray-600" />
                <>
                  <ul>
                    {item.data.tags.map((tag: string, i: number) => (
                      <li class="inline-block">
                        <a
                          href={`${base_path}/tags/${slugify(tag)}`}
                          className="mr-2 font-medium hover:text-primary"
                        >
                          {humanize(tag)}
                          {i !== item.data.tags.length - 1 && ","}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              </li>
            </ul>

            <h3 className="mb-2">
              <a
                href={`${base_path}/${item.slug}`}
                className="block transition duration-300 hover:text-primary"
              >
                {item.data.title}
              </a>
            </h3>
            <p className="text-text">
              {item.content?.slice(0, Number(summary_length))}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
