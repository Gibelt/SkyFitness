import styled from 'styled-components';

export default styled('button')`
  /* height: 52px; */

  min-height: max-content;
  min-width: max-content;
  padding: ${(props) => props.style.size.padding};
  /* box-sizing: border-box; */
  border-radius: 46px;

  /* border: 0px solid transparent; */
  border: 1px solid #d0cece;
  background: ${(props) => props.style.color.bg.regular};

  &:hover {
    background: ${(props) => props.style.color.bg.hover};
    transform: scale(1.04);
    transform: ${(props) => `scale(${props.style.activity ? 1.04 : 1})`};
  }
  &:active {
    background: ${(props) => props.style.color.bg.active};
    transform: ${(props) => `scale(${props.style.activity ? 0.96 : 1})`};
  }
  &:disabled {
    background: lightgrey;
  }

  transition: all 0.5s ease-out;

  display: flex;
  flex-direction: row;
  justify-content: center;

  font-family: 'StratosSkyeng', sans-serif;
  font-size: ${(props) => `${String(props.style.size.font)}px`};
  line-height: ${(props) => `${String(props.style.size.font + 8)}px`};
  font-weight: 400;

  color: ${(props) => props.style.color.text};

  overflow: hidden;
  cursor: ${(props) => (props.style.activity ? `pointer` : `default`)};
`;
