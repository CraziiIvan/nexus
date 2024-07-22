import { ChangeEventHandler } from "react";
import { Search } from "lucide-react";

const SearchBar = ( {value, onChange}: {value: string, onChange: ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <div className="h-11 flex items-center px-3 gap-x-3 bg-gray1 border border-gray5 rounded-2xl text-gray11 outline outline-transparent focus-within:outline-gray12">
            <Search  size={18}/>
            <input value={value} onChange={onChange} type="text" placeholder="Search" className="w-full bg-transparent outline-none text-gray12"/>
        </div>
    )}

export default SearchBar;
