import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/bransyahtan",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/bransyahtan",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/bransyatan",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLink1 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLink2 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Discover Our Services",
  },
  {
    path: "/",
    display: "Request an Appoinment",
  },
];

const quickLink3 = [
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/",
    display: "Donate",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo" height={35} width={135} />
            <p className="text-base leading-7 mt-4 text-textColor font-normal text-justify">
              Copyright &copy; {year} developed by Sultan Bransyah all rights
              reserved
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] 
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Link
            </h2>
            <ul>
              {quickLink1.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I Want To:
            </h2>
            <ul>
              {quickLink2.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLink3.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
