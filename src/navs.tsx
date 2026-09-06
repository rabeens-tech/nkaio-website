import Doctor from "./pages/Doctor";
import HomePage from "./pages/Homepage";
import Nails from "./pages/Nails";
import Privacy from "./pages/Privacy";

const NAV_ITEMS = [
  {
    name: "Home",
    element: () => <HomePage />,
    link: "/",
    header:true,
    footer:true
  },
  {
    name: "About",
    element: () => <div>About</div>,
    link: "/about",
    header:true,
    footer:true
  },
  {
    name: "Services",
    element: () => <div>Services</div>,
    link: "/services",
    header:true,
    footer:true
  },
  {
    name: "Nails",
    element: () => <Nails />,
    link: "/nails",
    header:true,
    footer:true
  },
  {
    name: "Doctor",
    element: () => <Doctor />,
    link: "/doctor",
    header:true,
    footer:true
  },
  {
    name: "Contact",
    element: () => <div>Contact</div>,
    link: "/contact",
    header:true,
    footer:true
  },
  {
    name: "Privacy",
    element: () => <Privacy />,
    link: "/privacy",
    header:true,
    footer:true
  }
];


export default NAV_ITEMS;