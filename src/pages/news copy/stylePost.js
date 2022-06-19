import styled, {keyframes} from "styled-components";
import { Colors } from "../../styles/colors";
import { devices } from "../../styles/devices";



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
/*       overflow-x: scroll;
      overflow-y: hidden;
      display: flex; */

      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      overflow-y: auto;
      overscroll-behavior-x: contain;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;

      &::-webkit-scrollbar{
        display: none;
      }

      @media ${devices.laptop} {
        overflow: auto;
        display: flex;
      }
      > article {

        scroll-snap-align: start;
      }
      article {
        object-fit: contain;
        background: white;
        border-radius: 4px;
        width: 80vw;
        overflow: hidden;
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
            font-size: 1.5rem;
            line-height: 1.1;
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

          &:first-child {
            height: 150px;
            width: 100%;
            margin-top: 0;
            background-size:cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
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
