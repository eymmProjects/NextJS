import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import Logo from "./Logo";

interface Props {
  navItems: { label: string; icon?: IconType; href: string }[];
}

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const [visible, setVisible] = useState(false); 

  const updateNavState = () =>{
   
  }

  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark  flex flex-col justify-between ">
      <div className="">
        <Link href="/admin" className="flex items-center space-x-2 p-3 ">
          <Logo className=" fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
          {visible && (
            <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
              Admin
            </span>
          )}
        </Link>

        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex  text-highlight-light dark:text-highlight-dark text-xl items-center hover:scale-[0.98] transition"
            >
              {visible && <span className="ml-2">{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>

      <button onClick={updateNavState} className="text-highlight-ligh dark:text-highlight-dark p-3 hover:scale-[0.98] transition self-end ">
        {/* {visible ? `<RiMenuFoldFill size={25} />` : `<RiMenuUnfoldFill/>`} */}
        {visible ? (
          <RiMenuFoldFill size={25} />
        ) : (
          <RiMenuUnfoldFill size={25} />
        )}
      </button>
    </nav>
  );
};

export default AdminNav;
