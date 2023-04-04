import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 444px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 36px 41px 44px;
  background: #fff;
  box-sizing: border-box;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 0 40px;
`;
