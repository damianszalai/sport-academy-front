import styled from "styled-components";
import { Colors } from "../../UI/atoms/colors";
import { devices } from "../../UI/atoms/devices";

const Post = styled.section`
  background: ${Colors.black};
  > div {
      > h2 {
          color: ${Colors.white};
          display: block;
          font-weight: bold;
          font-size: 3em;
          padding: 48px 0 24px;
      }
      >div {
      display: grid;
      grid-template-columns: repeat(1fr);
      grid-gap: 12px;
      
      @media ${devices.laptop} {
          grid-template-columns: repeat(4, 1fr);
        }
    article {
      background: white;
      border-radius: 4px;
      overflow: hidden;

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
          h2{
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
    }
}
  }
`;

export default Post;
