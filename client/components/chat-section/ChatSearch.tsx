import { Search } from "lucide-react";

const ChatSearch = (props: {width: number}) => {
    return(
        <div
            id="inputElement"
            className={`bg-neutral-800 flex flex-row rounded-3xl w-${props.width} ml-7 h-10 mt-1`}
          >
            <div className="flex items-center justify-center ml-2">
              <Search color="#ffffff" />
            </div>
            <input
              type="text"
              className="ml-2 bg-transparent border-none focus:outline-none text-white"
              placeholder="Search"
            />
          </div>
    )
}

export default ChatSearch;