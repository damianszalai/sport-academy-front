import styled from "styled-components";
import { Colors } from "../../UI/atoms/colors";
import { devices } from "../../UI/atoms/devices";

const StylePost = styled.section`
  background: ${Colors.black};
  > div {
    padding:0;
    margin-left:0;
    margin-right: 0;
      > h2 {
          color: ${Colors.white};
          display: block;
          font-weight: bold;
          font-size: 3em;
          padding: 48px 0 24px;
      }
      >div {
      /*   background: red; */
        overflow-x: scroll;
        overflow-y: hidden;
     /*  display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 12px; */
      display: flex;
      
      @media ${devices.laptop} {
        display: grid;
        grid-gap: 12px; 
          grid-template-columns: repeat(4, 1fr);
        }
    article {
      background: white;
      border-radius: 4px;
      overflow: hidden;
      min-width: 80%;
      margin: 0 12px;
      figure {
        img{
          width: 100%;
        }
      }

      > div {
        &:first-child {
          width: 100%;
          height: 100px;
          background: ${Colors.yellow};
        }
      }
      div:last-child {
          position: relative;
          padding: 12px;
          height: calc(100% - 100px);
          display: flex;
          flex-direction: column;
          h2{
              font-weight: bold;
          }
          a{
            margin-top: a;
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
    }
}
  }
`;

export default StylePost;
