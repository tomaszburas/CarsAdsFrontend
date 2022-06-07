import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { Search } from "./Search";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">
          <span className="bold">cars</span> <span className="light">ads</span>
        </Link>
      </Logo>
      <div className="container">
        <Button text="+" to="/add" title="Add ad" />
      </div>
      <Search />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  padding: 0.5rem 1rem;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.purple};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container {
    width: calc(100% - 70% - 2rem);
    display: flex;
    justify-content: center;
  }

  Button {
    width: 1.8rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.green};
  width: 30%;

  .bold {
    font-weight: 800;
  }
  .light {
    font-weight: 200;
  }

  @media screen and (max-width: 380px) {
    font-size: 1rem;
  }
`;
