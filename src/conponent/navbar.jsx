import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


function Navbar() {

  const location = useLocation();
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY.current) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const isProjectPage = ["/project", "/ourcompany" , "/services"].includes(location.pathname);
  const isTransparentPage = location.pathname === "/ourexperties";

  let themeClasses = "bg-black text-white";
  if (isProjectPage) themeClasses = "bg-white text-[#292929]";
  if (isTransparentPage) themeClasses = "bg-transparent text-white";



  const linkColor = isProjectPage ? "text-[#292929]" : "text-[#fcfdff]";
  const hoverColor = isProjectPage ? "hover:text-gray-600" : "hover:text-gray-400";
  // For transparent page, we want white logo/burger unless we decide otherwise. Defaulting to white like Home.
  const burgerColor = isProjectPage ? "bg-black" : "bg-white";

  // Dropdown Theme: Opposite of navbar
  const dropdownBg = isProjectPage ? "bg-black" : "bg-white";
  const dropdownText = isProjectPage ? "text-white" : "text-black";
  const dropdownBtnBorder = isProjectPage ? "border-white" : "border-black";
  const dropdownBtnHover = isProjectPage ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white";

  return (
    <>
    <nav className={`w-full h-20 px-6 md:px-12 flex items-center justify-between font-sans z-50 ${isTransparentPage ? 'absolute top-0' : `fixed top-0 transition-transform duration-500 ease-in-out ${show ? 'translate-y-0' : '-translate-y-full'}`} ${themeClasses}`}>
      {/* Left Section - Navigation Links (Desktop Only) */}
      <div className="hidden xl:flex items-center gap-8 font-medium tracking-wide">
        {[
          { name: "Our Company", path: "/ourcompany" },
          { name: "Our Expertise", path: '/ourexperties' },
          { name: "Services", path: "/services" }
        ].map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`relative text-[16px] font-bold transition-colors duration-300 ${linkColor} ${hoverColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Center Section - Logo */}
      <div className={`absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 pl-6 md:pl-0 ${isTransparentPage ? '' : ''}`}>
           {/* Logo placeholder - using text/svg if needed, or keeping existing logic if there was a logo */}
           {!isTransparentPage && (
              <img 
                src="/picture/pillows.png" 
                alt="Logo" 
                className={`w-10 h-10 object-contain ${!isProjectPage ? "invert" : ""}`}
              />
           )}
      </div>

      {/* Right Section - CTA and Menu */}
      <div className="flex items-center gap-4 md:gap-8 ml-auto">
        <a href="/project" className={`hidden xl:flex items-center gap-2 font-bold group relative text-[16px] transition-colors duration-300 ${linkColor} ${hoverColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}>
          Start a project
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          >
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        
        {/* Hamburger - Visible on Mobile & Tablet (or always if intended) */}
        {/* Adjusted to be always visible or only mobile based on design. Assuming mobile-only for "menu" functionality if links are hidden, but existing code had strictly a button. 
            However, since we hid the left links on mobile, we NEED this button to show them.
        */}
        <div className="xl:hidden">
             {/* Mobile specific burger or keep the default one but ensure it opens the menu */}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex flex-col gap-1.5 p-2 hover:opacity-80 transition-opacity z-50 relative"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 ${burgerColor} transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 ${burgerColor} transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
           <div className={`w-6 h-0.5 ${burgerColor} transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

         {/* Dropdown Menu - Customized for Mobile to include all links */}
         {isOpen && (
          <div className={`absolute top-20 right-6 w-[calc(100vw-3rem)] md:w-80 p-8 rounded-xl shadow-2xl flex flex-col items-start md:items-center gap-6 ${dropdownBg} ${dropdownText} transition-all duration-300 origin-top-right overflow-y-auto max-h-[80vh]`}>
            {/* Mobile/Tablet/NestHub Links */}
            <div className="flex flex-col gap-4 w-full items-start">
                {[
                  { name: "Our Company", path: "/ourcompany" },
                  { name: "Our Expertise", path: '/ourexperties' },
                  { name: "Services", path: "/services" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold hover:opacity-70 transition-opacity"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="h-px w-full bg-gray-200 my-2"></div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight">We welcome you.</h2>
            <a 
              href="/project" 
              className={`flex items-center gap-3 px-6 py-3 border rounded-full font-bold transition-all duration-300 ${dropdownBtnBorder} ${dropdownBtnHover} w-full justify-center md:w-auto`}
            >
              Lets Connect
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </nav>
    {!isTransparentPage && <div className={`h-20 w-full ${isProjectPage ? "bg-white" : "bg-black"}`} />}
    </>
  )
}

export default Navbar