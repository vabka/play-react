import logo from "./logo.svg";
import { AppContainer as MainContainer, AppHeader as MainHeader, AppLink as MainLink, AppLogo as MainLogo } from "./styles";

const Main = () => (
  <MainContainer>
    <MainHeader>
      <MainLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <MainLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </MainLink>
    </MainHeader>
  </MainContainer>
);

export default Main;
