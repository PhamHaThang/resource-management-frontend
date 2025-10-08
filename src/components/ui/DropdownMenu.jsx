import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { cn } from "../../utils/cn";

export const DropdownMenu = ({ trigger, items = [] }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-2">
        {trigger}
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mt-2">
        <div className="py-1">
          {items.map((item, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <button
                  onClick={item.onClick}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm flex items-center gap-3",
                    active ? "bg-neutral-100" : "",
                    item.danger ? "text-danger" : "text-neutral-700"
                  )}>
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};
