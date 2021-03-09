import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Container,
  MenuButton,
  Label,
  Logo,
  MenuArea,
  Placeholder,
} from "./styles";

export default function MenuBar() {
  const menuRef = useRef<HTMLDivElement>();
  const router = useRouter();
  const [currentEndpoint, setCurrentEndpoint] = useState(null);

  useEffect(() => {
    setCurrentEndpoint(router.pathname);
  }, []);

  return (
    <>
      <Container ref={menuRef}>
        <Logo src="/full-logo.svg" alt="Actionbox Logo" />
        <MenuArea>
          <Label>MENU</Label>
          <Link href="/">
            <MenuButton isSelected={currentEndpoint === "/" ? true : false}>
              <svg
                width={15}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.294.448C6.632.158 7.059 0 7.5 0c.441 0 .868.159 1.206.448l5.625 4.817c.21.179.378.403.494.655.115.252.175.528.175.806v8.001c0 .338-.132.661-.366.9a1.238 1.238 0 01-.884.373h-3.438c-.331 0-.649-.134-.883-.373a1.285 1.285 0 01-.367-.9v-4.456H5.938v4.456c0 .338-.132.661-.367.9a1.238 1.238 0 01-.883.373H1.25c-.332 0-.65-.134-.884-.373a1.285 1.285 0 01-.366-.9V6.725c0-.278.06-.553.175-.806.116-.252.284-.476.494-.655L6.294.448zm1.609.973a.618.618 0 00-.805 0L1.473 6.24a.635.635 0 00-.223.485v8.001h3.438v-4.455c0-.338.131-.662.366-.9.234-.24.552-.373.883-.373h3.125c.332 0 .65.134.884.373.235.238.367.562.367.9v4.455h3.437v-8a.645.645 0 00-.223-.487L7.904 1.42z" />
              </svg>
              <span>Home</span>
            </MenuButton>
          </Link>
          <Link href="/leaderboard">
            <MenuButton
              isSelected={currentEndpoint === "/leaderboard" ? true : false}
            >
              <svg
                width={15}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 10H1v4h3v-4zM1 9a1 1 0 00-1 1v5h5V9H1zM9 1H6v13h3V1zM6 0a1 1 0 00-1 1v14h5V1a1 1 0 00-1-1H6zM14 5h-3v9h3V5zm-4-1v11h5V5a1 1 0 00-1-1h-4z"
                />
              </svg>
              <span>Leaderboard</span>
            </MenuButton>
          </Link>
        </MenuArea>
      </Container>
      <Placeholder width={menuRef.current?.getBoundingClientRect().width} />
    </>
  );
}
