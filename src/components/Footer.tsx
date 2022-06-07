import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <a
        href="https://github.com/tomaszburas/Cars-Ads"
        title="github"
        target="_blank"
      >
        @Tomaszenko
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  height: 1.6rem;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.blue};
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;
