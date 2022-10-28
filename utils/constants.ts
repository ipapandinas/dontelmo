import alien from "../components/assets/alien.svg";
import cube2 from "../components/assets/cube2.svg";
import heracles from "../components/assets/heracles.svg";
import rurien from "../components/assets/rurien.svg";

export const NAV_MENU = [
  {
    href: "/dev",
    label: "DEV",
    title: "Dev work",
  },
  {
    href: "/misc",
    label: "MISC",
    title: "Misc",
  },
  {
    href: "/about",
    label: "ABOUT",
    title: "About",
  },
];

export const PORTFOLIO = [
  {
    _id: 0,
    colors: ["#62ba49", "#fdb829", "#f6821f", "#df393d", "#973d97", "#009ddc"],
    description: "DON TELMO's web invasion.",
    href: "/",
    label: "TELMO",
    logo: alien,
    prefix: "DON",
    title: "Don Telmo's web invasion.",
  },
  {
    _id: 1,
    colors: ["#6633cf"],
    description: "The first Ternoa NFT marketplace.",
    height: "40px",
    href: "https://secret-stash.io/",
    label: "Secret Stash",
    logo: cube2,
    title: "Secret Stash Marketplace",
    width: "40px",
  },
  {
    _id: 2,
    colors: ["#000"],
    description: "Active Ternoa Validator nodes.",
    href: "https://heracles.works/",
    label: "HERACLES",
    logo: heracles,
    title: "Active Ternoa Validator nodes.",
  },
  {
    _id: 3,
    colors: ["#009ddc"],
    description: "Fuensanta R. Urien portfolio.",
    height: "40px",
    href: "https://fuensantarurien.com/",
    label: "R. URIEN",
    logo: rurien,
    prefix: "Fuensanta",
    title: "Fuensanta R. Urien portfolio.",
    width: "40px",
  },
];
