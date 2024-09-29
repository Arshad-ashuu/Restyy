import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

interface DropdownProps {
  setHttpMethod: (method: "GET" | "POST" | "PUT" | "DELETE") => void;
  httpMethod: "GET" | "POST" | "PUT" | "DELETE"; // Correctly type the httpMethod prop
}

export default function Dropdown({ setHttpMethod, httpMethod }: DropdownProps) {
  return (
    <div className="top-24 text-bottom">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-2 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          {httpMethod} {/* Display the currently selected HTTP method */}
          <ChevronDownIcon className="size-4 fill-white" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {/* Define each menu item with its corresponding method */}
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => setHttpMethod("PUT")}
            >
              <PencilIcon className="size-4 fill-white/30" />
              PUT
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => setHttpMethod("GET")}
            >
              <Square2StackIcon className="size-4 fill-white/30" />
              GET
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => setHttpMethod("POST")}
            >
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              POST
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={() => setHttpMethod("DELETE")}
            >
              <TrashIcon className="size-4 fill-white/30" />
              DELETE
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
