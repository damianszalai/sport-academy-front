import styled, { keyframes } from "styled-components";

const loading = keyframes`
to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;
const PlaceholderStyle = styled.div`
  display: flex;
  div {
      border-radius: 4px;
    width: 315px;
    margin-right:12px;
    height: 250px;
    cursor: progress;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    animation: ${loading} 1.5s infinite;
  }
`;

export default PlaceholderStyle;
