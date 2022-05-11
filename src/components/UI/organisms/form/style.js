import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  background: white;
  border-radius: 4px;
  margin: auto;
  margin-top: 24px;
  padding: 24px;
  max-width: 600px;

  h2 {
    font-weight: bold;
    font-size: 3em;
    border-bottom:solid 1px rgb(33, 37, 41);
    color: rgb(33, 37, 41)
  }

  .btn.btn-primary {
    background: transparent;
    border: solid 1px #ffff33;
    color: rgb(33, 37, 41);

    background: #ffff33;
    font-weight: bold;
    width: 100%;
    margin-top:6px;
    border-radius: 0px;
  }
`;
 
export default Container;
