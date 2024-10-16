"use client";

import articleData from '../articleData.json'
import React, { useState } from "react";

interface Article {
  date: string;
  title: string;
  content: string;
}


export default function Articles(){
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const reversedArticles = [...articleData].reverse();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: Article[] = reversedArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(reversedArticles.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      {currentPosts.map((article, index) => (
        <div
          key={index}
          className="bg-transparent bg-opacity-90 p-6 mb-10 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl  text-zinc-600 dark:text-zinc-100 font-bold text-center mb-2">{article.title}</h2>
         <br/>
          <p className="text-justify  text-zinc-600 dark:text-zinc-400">{article.content}</p>
          <br/>
          <p className="text-left text-gray-500 mb-4">{article.date} - Yitbarek Wolde</p>
        
          
        </div>
      ))}

      <div className="flex justify-between mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-400 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded`}
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-400 hover:bg-blue-700"
          } text-white font-bold py-2 px-4 rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
};


