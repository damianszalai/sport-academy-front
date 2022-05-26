import styled from "styled-components";
import { Colors } from "../../UI/atoms/colors";
import { devices } from "../../UI/atoms/devices";

const StylePost = styled.section`
  background: ${Colors.black};
  > button {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1111;
    border-radius: 50%;
    line-height: 1;
    width: 40px;
    height: 40px;
    transform-origin: center;
    transition: all .25s ease-out;
    border: none;
    &.cancel {
      background: red;
      transform: translateX(-50%) rotate(45deg);
      

      i {
        
      }
    }
  
    i{
      line-height: 1;
    }
  }
  > div {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    @media ${devices.laptop} {
      margin: auto;
    }
    > h2 {
      color: ${Colors.white};
      display: block;
      font-weight: bold;
      font-size: 3em;
      padding: 48px 0 24px;
    }
    > div {
      /*   background: red; */
      overflow-x: scroll;
      overflow-y: hidden;
      /*  display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 12px; */
      display: flex;

      @media ${devices.laptop} {
        overflow: auto;
       display: flex;
      }
      article {
        background: white;
        border-radius: 4px;
        overflow: hidden;
        min-width: 80%;
        margin: 0 12px;
        display: flex;
        flex-direction: column;
        @media ${devices.laptop} {
          width: 30%;
          min-width: auto;
        }
        figure {
          img {
            width: 100%;
          }
        }

        div:nth-child(2) {
          position: relative;
          padding: 12px;
          display: flex;
          flex-direction: column;
          margin: 0;
          h2 {
            font-weight: bold;
          }

          p {
            margin: 0;
            &.date {
              font-style: italic;
              color: grey;
              position: absolute;
              right: 12px;
              top: 12px;
            }
            &.category {
              text-transform: capitalize;
            }
            &.desc {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3; /* number of lines to show */
              -webkit-box-orient: vertical;
            }
          }
        }
        > div {
          padding: 12px;
          margin-top: auto;
          a {
            background: ${Colors.yellow};
            color: ${Colors.black};
            border: none;
          }
        }
      }
    }
  }
`;

export default StylePost;
