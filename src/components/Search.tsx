import styled from "styled-components";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {ChangeEvent} from "react";
import {setSearchValue} from "../redux/features/search/searchSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const {searchValue} = useSelector((store: RootState) => store.search);

    const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.target.value));
    }

    return <Wrapper>
        <div className="search">
            <input type="text"
                   className="searchTerm"
                   placeholder="What are you looking for?"
                   value={searchValue}
                   onChange={handleSearchValue}
            />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search" />
                </button>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  
  .search {
    width: 100%;
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid ${props => props.theme.colors.green};
    border-right: none;
    padding: 4px;
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  .searchButton {
    padding: 0 .5rem;
    border: 1px solid ${props => props.theme.colors.green};
    background: ${props => props.theme.colors.green};
    text-align: center;
    color: ${props => props.theme.colors.purple};
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`
