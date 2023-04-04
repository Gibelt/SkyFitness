import * as s from "./LogoStyle";
import logo from "../../logo.png";


export default function Header() {
  return (
      <s.Logo>
        <s.LogoImg src={logo} />
      </s.Logo>
  );
}
