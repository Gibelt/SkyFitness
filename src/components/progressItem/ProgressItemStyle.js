import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  max-width: 360px;
`;

export const Input = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  :hover,
  :focus {
    appearance: none;
    -moz-appearance: textfield;
  }
  ::placeholder {
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding-bottom: 8px;
  outline: none;
`;
