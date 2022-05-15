import styled, { keyframes } from "styled-components";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`;

const leftRight = keyframes`
 0% { transform: translateX(-100px);opacity:0}
 100% { transform: translateX(0);opacity:1 }
`;

const topBottom = keyframes`
 0% { transform: translateY(-100px);opacity:0}
 40% { transform: translateY(-100px);opacity:0}
 100% { transform: translateY(0);opacity:1 }
`;

const Container = styled.section`
  .slider {
    height: 308px;
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;
    padding: 0;
    max-width: initial;

    @media ${devices.laptop} {
      height: 538px;
    }

    .slider_container {
      list-style: none;
      height: 100%;
      margin: 0;
      padding: 0;
      position: relative;
      transition: transform 0.25s ease-out;
      transform: translateX(0px);
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      li {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        opacity: 0;
        display: none;
        background-size: 100%;
        background-repeat: no-repeat;

        @media ${devices.mobileOnly} {
          background-position: 108px center !important;
        }
        @media ${devices.laptop} {
          background-size: 60%;
          background-position: right center;
        }

        &.show {
          opacity: 1;
          display: block;
          animation: ${breatheAnimation} 0.5s ease-out;
        }
        p {
          position: relative;
          opacity: 1;
          animation: ${leftRight} 0.5s ease-out;
        }
        .left-desc {
          width: 60%;
          max-width: 950px;
          background: rgba(33, 37, 41, 09);
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          height: 101%;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
          position: relative;
          top: -1px;

          @media ${devices.laptop} {
            width: 70%;
          }

          figure {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: calc(100% - 40px);
            background: 0 0;
            padding: 15px 0 37px;
            text-align: center;

            @media ${devices.laptop} {
              padding: 15px 48px 37px;
          }

            h3 {
              font-size: 30px;
              font-weight: 700;
              line-height: 32px;
              margin-bottom: 20px;
              color: white;
            }
            p {
              margin-bottom: 20px;
              font-size: 1em;
              line-height: 1;
              font-weight: bold;
              color: ${Colors.yellow};
              width: 85%;
              text-transform: uppercase;

              @media ${devices.laptop} {
                font-size: 2.5em;
                max-width: 400px;
              }

              &.mobile-copy {
                display: none;
              }
            }
            .logo {
              text-align: left;
              img {
                position: relative;
                top: 0px;
                width: auto;
                max-width: 300px;
              }
            }
            figcaption {
              flex-flow: column;
              text-align: left;
              .btn-container {
                width: 100%;
                flex-flow: row;
                justify-content: left;
                align-content: flex-start;
                display: flex;
                animation: ${topBottom} 1s ease-out;

                .buy_now {
                  display: inline-block;
                  padding: 0 24px;
                  background: ${Colors.yellow};
                  color: ${Colors.black};
                  text-transform: uppercase;
                  height: 45px;
                  line-height: 45px;
                  text-align: center;
                  font-size: 1.1em;
                  font-weight: 700;
                  text-decoration: none;
                  border-radius: 5px;
                  border: solid 1px ${Colors.yellow};
                  margin-right: 20px;
                  left: 13%;
                  right: unset;
                  bottom: 30%;
                  bottom: 22%;
                  transition: all 0.25s ease-out;
                  margin: 0 24px 0 0;

                  &:hover {
                    border: solid 1px #1976a1;
                    background: #fff;
                    color: #1976a1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Container;
