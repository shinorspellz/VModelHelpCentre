"use client";

import { generalTopics, subTopics } from "@/data";
import { searchContent } from "@/lib/search";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    console.log("searching...");
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const data = searchContent(lowerCaseSearchTerm);
    const ordered = data?.sort((a, b) => b.score - a.score);
    setSearchResult(ordered);
  };
  function findTopicName(link) {
    const matchingTopic = generalTopics.find((topic) => topic.link === link);
    return matchingTopic ? matchingTopic.name : null;
  }

  useEffect(() => {
    const search = searchParams.get("q");
    setSearchTerm(search);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left">
        Search
      </h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter search term"
          className=" text-black px-3 py-2 bg-[#ffffff] rounded-[9px] mr-2 border border-3 border-white outline-none focus-visible:border-black  w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="mt-3">
        <h2>
          Search results for &quot
          <span className="font-bold">{searchTerm} </span>&quot
        </h2>

        <div className="flex flex-col gap-5 mt-3">
          {searchResult.length ? (
            searchResult.map((result, index) => {
              const generalTopic = findTopicName(result.topic);

              const subTopic = subTopics[result.topic].find(
                (topic) => topic.link === result.subTopic
              );

              return (
                <Link
                  href={"/" + result.topic + "/" + result.subTopic}
                  key={index}
                >
                  <div className={`flex flex-col w-full `}>
                    <h3 className="text-lg text-[#edceab86] font-medium">
                      {generalTopic}
                    </h3>
                    <div className="flex justify-between">
                      <p className="ml-5">{subTopic.name}</p>
                      <AiOutlineRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })
          ) : searchTerm === null ? (
            ""
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
