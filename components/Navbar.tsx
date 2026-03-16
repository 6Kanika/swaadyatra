import { cityIndex } from "@/lib/cityIndex";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return <NavbarClient cities={cityIndex} />;
}
