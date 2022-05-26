import styled, {keyframes} from "styled-components";
import { Colors } from "../../UI/atoms/colors";
import { devices } from "../../UI/atoms/devices";



const loading = keyframes`
to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`
const StylePost = styled.section`
  background: ${Colors.black};
  .placeHolderImg {
    width: 100%;
    height: 200px;
    cursor: progress; 
  background: 
    linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#eee, #eee);  
  background-repeat: no-repeat;
  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px; 
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
  animation: ${loading} 1.5s infinite;

  }
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
    transition: all 0.25s ease-out;
    border: none;
    &.cancel {
      background: ${Colors.red};
      transform: translateX(-50%) rotate(45deg);
    }

    i {
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

    > button {
      margin-top: 12px;
      background: ${Colors.yellow};
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
