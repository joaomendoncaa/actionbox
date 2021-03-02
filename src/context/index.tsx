import { GlobalStyles } from "../styles/GlobalStyles";

import { CountdownContextProvider } from "./CountdownContext";
import { ChallengesContextProvider } from "./ChallengesContext";

export default function Context({ children }) {
  return (
    <>
      <ChallengesContextProvider>
        <CountdownContextProvider>{children}</CountdownContextProvider>
      </ChallengesContextProvider>
      <GlobalStyles />
    </>
  );
}
