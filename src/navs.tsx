import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Doctor from "./pages/Doctor";
import HomePage from "./pages/Homepage";
import Nails from "./pages/Nails";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";

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
    element: () => <AboutPage />,
    link: "/about",
    header:true,
    footer:true
  },
  {
    name: "Services",
    element: () => <Services />,
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
    element: () => <ContactPage />,
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