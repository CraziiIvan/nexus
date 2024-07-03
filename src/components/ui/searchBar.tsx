import { Search } from "iconoir-react";

const SearchBar = () => {
    return (
        <div className="flex shadow-2xl items-center gap-x-2 w-full py-2.5 px-4  text-neutral-700 bg-neutral-950 border border-neutral-900 rounded-full">
            <Search fontSize={14}/>
            <input type="text" placeholder="Search for a token" className="w-full  text-white placeholder:text-neutral-700 bg-transparent outline-none"/>
        </div>
    )}

export default SearchBar;
