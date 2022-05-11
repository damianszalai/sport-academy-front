import styled from "styled-components";
/* import { bgtennis } from "../../../assets"; */

const Container = styled.div`
  padding: 0 0 24px;
  background:rgb(33,37,41);
  margin: 0;


  section {
    display: flex;
    justify-content: space-between;

    &:nth-child(2){
        padding: 24px 0;
    }
    &:nth-child(4){
        padding: 72px 0;
        > div {
            display: flex;
            justify-content: space-between;
            > article {
                padding: 0 24px;
                width: 30%;
                background:rgb(33,37,41);
                color: white;

                h2 {
                    background: #ffff33;
                    color: rgb(33,37,41);
                    border-bottom: solid 1px #ffff33;
                    padding: 6px 24px;
                    position: relative;
                    top: -40px;
                    clip-path: polygon(5% 0%,100% 0%,95% 100%,0% 100%);
                    text-align: center;
                    font-weight: bold;
                }
                p{
                    position: relative;
                    top: -30px;
                    font-size: 1.1em;
                    line-height: 1.3;
                }
            }
        }
        
    }
    &:nth-child(3){
       background: rgb(33, 37, 41);
       article {
           padding: 48px 0;
           display: flex;
           > div, > figure {
               width: 50%;
           }
           > figure {
               text-align: center;
           }
           > div {
               display: flex;
               flex-direction: column;
               justyfy-content: left;
           h2{
            justyfy-content: left;
            color: #ffff33;
            font-weight: bold;
            font-size: 2.3em;
            border-bottom: #ffff33 solid 1px;
            text-transform: uppercase;
            
           }
           p{
               color: white;
               text-align: justify;
           }
        }
       }

       
    }

`;

export default Container;
