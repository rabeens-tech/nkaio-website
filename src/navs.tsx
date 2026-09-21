import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Doctor from "./pages/Doctor";
import HomePage from "./pages/Homepage";
import Nails from "./pages/Nails";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";

const base_url = "/nkaio-website"
const NAV_ITEMS = [
  {
    name: "Home",
    element: () => <HomePage />,
    link: base_url + "/",
    header:true,
    footer:true
  },
  {
    name: "About",
    element: () => <AboutPage />,
    link: base_url + "/about",
    header:true,
    footer:true
  },
  {
    name: "Services",
    element: () => <Services />,
    link: base_url + "/services",
    header:true,
    footer:true
  },
  {
    name: "Nails",
    element: () => <Nails />,
    link: base_url + "/nails",
    header:true,
    footer:true
  },
  {
    name: "Doctor",
    element: () => <Doctor />,
    link: base_url + "/doctor",
    header:true,
    footer:true
  },
  {
    name: "Contact",
    element: () => <ContactPage />,
    link: base_url + "/contact",
    header:true,
    footer:true
  },
  {
    name: "Privacy",
    element: () => <Privacy />,
    link: base_url + "/privacy",
    header:true,
    footer:true
  }
];



export default NAV_ITEMS;