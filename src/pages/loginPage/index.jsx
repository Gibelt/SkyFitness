import { useEffect } from "react";
import Login from "../../components/loginComp/login";

export default function LoginPage() {
  useEffect(() => {
    let wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.style = "background-color: #F5F5F5";
    }
  });
  return <Login />;
}
