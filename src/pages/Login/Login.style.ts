import styled from "styled-components";

const image = require('../../assets/login_image.png'); 

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const FormContainer = styled.div`
  width: 15%; 
  height: 60%; margin-top: 30px; 
  display: flex; 
  flex-direction: column;

  .ant-input-affix-wrapper {
      background: #ffffff !important;
  }
`;

export const CreateAcc = styled.span`
    margin-top: 15px;
    font-size: 14px;
    color: #FFFFFF;
    align-self: center;
`;