import styled from "styled-components";
import { sliderPng, tennisCategory } from "../../../../assets";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

const Container = styled.article`
  margin: auto;
  display: flex;
  width: 90%;
  flex-direction: column;
  text-align: left;
  margin: 12px auto;
  @media ${devices.laptop} {
    background: none;
    width: 50%;
  }
  a {
    border-radius: 4px;
    padding: 24px 12px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    background-image: ${(props) =>
      props.deporte === "tennis"
        ? `url(${tennisCategory}),
      linear-gradient(${Colors.yellow}, ${Colors.yellow})`
        : `url(${sliderPng}),
      linear-gradient(${Colors.yellow}, ${Colors.yellow})`};
    background-position: 95% 100%;
    background-repeat: no-repeat;
    background-size: auto 90%, cover;

    @media ${devices.laptop} {
      background: none;
      width: 100%;
      max-width: 400px;
      margin: auto;
    }

    h2 {
      color: ${Colors.black};
      font-weight: bold;
      margin-bottom: 2px;
      width: 70%;

      @media ${devices.laptop} {
        background: yellow;
        width: 100%;
        text-align: center;
        height: 100px;
        clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
        padding: 0 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    h3 {
      color: ${Colors.black};
      margin-bottom: 0;

      @media ${devices.laptop} {
        background: white;
        text-align: center;
        height: 100px;
        clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
        padding: 0 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span {
        margin-left: 6px;
      }
    }
  }
`;

export default Container;
/* clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%); */
