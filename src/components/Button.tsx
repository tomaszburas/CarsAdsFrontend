import styled from "styled-components";
import {Link} from "react-router-dom";

type Props = {
    text: string;
    to?: string;
}

export const Button = ({text, to}: Props) => {
    return to
        ? <Link to={to}><ButtonStyle>{text}</ButtonStyle></Link>
        : <ButtonStyle>{text}</ButtonStyle>
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
