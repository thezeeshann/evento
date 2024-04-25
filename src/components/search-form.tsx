"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {

    const [searchText,setSearchText] = useState("")
    const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!searchText) return
    router.push(`/events/${searchText}`)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-12 rounded-lg bg-white/50 px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10 "
        type="text"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        placeholder="Seach event any city..."
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
