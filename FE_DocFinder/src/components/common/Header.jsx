import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/avatar-icon.jpg";
import { BiMenu } from "react-icons/bi";

const navbar = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleSticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleSticky();

    return () => window.removeEventListener("scroll", handleSticky);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header flex items-center py-2" ref={headerRef}>
      <div className="container">
        <div className=" flex items-center justify-between">
          <div className="flex ">
            {/* logo */}
            <img src={logo} alt="logo" height={35} width={135} />
          </div>
          {/* navigation menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-11">
              {navbar.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* right navbar */}
          <div className="flex items-center gap-4 ">
            <div className="hidden">
              <Link to="/">
                <figure className="w-9 h-9 rounded-full cursor-pointer">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-full rounded-full h-9"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white flex items-center rounded-3xl justify-center">
                LOGIN
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
