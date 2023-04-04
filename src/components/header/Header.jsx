import * as s from "./HeaderStyle";
import logo from "../../logo.png";


export default function Header() {
  return (
    <s.Content>
      <s.Logo>
        <s.LogoImg src={logo} />
      </s.Logo>
      <s.User>
        <s.UserImg />
        <s.UserText>
          <s.UserName>Сергей</s.UserName>
          <s.UserArrow>
            <s.UserArrowImg src="../../icons/arrow.svg" />
          </s.UserArrow>
        </s.UserText>
      </s.User>
    </s.Content>
  );
}
