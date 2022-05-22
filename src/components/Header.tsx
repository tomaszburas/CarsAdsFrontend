import styled from "styled-components";
import {Button} from "./Button";
import { Search } from "./Search";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo><span>mega</span> ads</Logo>
            <Button text='Add Ads' />
            <Search />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  padding: .5rem 1rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.purple};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.green};
  & span {
    font-weight: 800
  }
`;

