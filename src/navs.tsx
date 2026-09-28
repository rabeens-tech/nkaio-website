import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Doctor from "./pages/Doctor";
import HomePage from "./pages/Homepage";
import Nails from "./pages/Nails";
import Privacy from "./pages/Privacy";
// import Services from "./pages/Services";

const NAV_ITEMS = [
  {
    name: "Home",
    element: () => <HomePage />,
    link: "/",
    header:true,
    footer:true,
    icon: "icons/home.png"
  },
  {
    name: "About",
    element: () => <AboutPage />,
    link: "/about",
    header:true,
    footer:true,
    icon: "icons/about.png"
  },
  // {
  //   name: "Services",
  //   element: () => <Services />,
  //   link: "/services",
  //   header:true,
  //   footer:true
  // },
  {
    name: "Nails",
    element: () => <Nails />,
    link: "/nails",
    header:true,
    footer:true,
    icon: "icons/nails.png"
  },
  {
    name: "Hair",
    element: () => <Nails />,
    link: "/hair",
    header:true,
    footer:true,
    icon: "icons/hair.jpeg"
  },
  {
    name: "Body & Makeup",
    element: () => <Nails />,
    link: "/body-and-makeup",
    header:true,
    footer:true,
    icon: "icons/body-and-makeup.png"
  },
  {
    name: "Esthetic Hair",
    element: () => <Nails />,
    link: "/esthetic-hair",
    header:true,
    footer:true,
    icon: "icons/esthetic-hair.jpeg"
  },
  {
    name: "Esthetic Body",
    element: () => <Nails />,
    link: "/esthetic-body",
    header:true,
    footer:true,
    icon: "icons/esthetic-body.png"
  },
  {
    name: "Doctor",
    element: () => <Doctor />,
    link: "/doctor",
    header:true,
    footer:true,
    icon: "icons/doctor.png"
  },
  {
    name: "Bar",
    element: () => <Doctor />,
    link: "/bar",
    header:true,
    footer:true,
    icon: "icons/bar.png"
  },
  {
    name: "Contact",
    element: () => <ContactPage />,
    link: "/contact",
    header:true,
    footer:true,
    icon: "icons/contact.png"
  },
  {
    name: "Privacy",
    element: () => <Privacy />,
    link: "/privacy",
    header:true,
    footer:true,
    icon: "icons/privacy.png"
  }
];


export default NAV_ITEMS;