import styled from "styled-components";

type Props = {
    text: string;
}

export const Button = ({text}: Props) => {
    return <ButtonStyle>{text}</ButtonStyle>
}

const ButtonStyle = styled.button`
  background-color: ${props => props.theme.colors.green};
  cursor: pointer;
  border: none;
  color: ${props => props.theme.colors.purple};
  border-radius: .3rem;
  height: 1.7rem;
  font-size: 1rem;
  font-weight: 600;
`;
