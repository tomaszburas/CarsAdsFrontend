import styled from "styled-components";

interface Props {
    searchValue: string;
}

export const SearchFor = ({searchValue}: Props) => {
    return (
        <Search>Search For: {searchValue}</Search>
    )
}

const Search = styled.div`
  height: 5%;
  background-color: ${props => props.theme.colors.turquoise};
  padding-left: 1rem;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.purple};
`
