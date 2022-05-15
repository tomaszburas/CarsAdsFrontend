import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>Mega Ads</Logo>
            <AddButton>Add announcement</AddButton>
            <SearchButton>Search</SearchButton>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  padding: .5rem;
  height: 2.5rem;
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const AddButton = styled.button`
  
`;

const SearchButton = styled.button`

`;
