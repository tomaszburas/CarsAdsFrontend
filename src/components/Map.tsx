import styled from "styled-components"

export const Map = () => {
    return <Maps/>
}

const Maps = styled.div`
  height: calc(100vh - 3rem);
  width: 100%;
  background-color: ${props => props.theme.colors.green};
`
