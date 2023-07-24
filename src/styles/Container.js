import styled from "styled-components";
import bgDesktop from "../assets/bgDesktop.svg";
import bgTablet from "../assets/bgTablet.svg";
import bgMobile from "../assets/bgMobile.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media ${(props) => props.theme.media.phone} {
    padding: 20px;
    background-image: url(${bgMobile});
    /* background-repeat: no-repeat; */
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 768px;
    padding: 24px 32px;
    background-image: url(${bgTablet});
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 1280px;
    padding: 20px 16px;
    background-image: url(${bgDesktop});
  }
`;
