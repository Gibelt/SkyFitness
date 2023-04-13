import { useRef, useEffect } from 'react';
import * as S from './styles';

export default function Popover(props) {
  const onCloseHandler = props.onClose;

  const containerRef = useRef();
  const popoverCloseBtnRef = useRef();

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const popoverCloseBtnWidth = popoverCloseBtnRef.current.offsetWidth;

    popoverCloseBtnRef.current.style.transform = `translate(calc(${containerWidth}px / 2 - ${popoverCloseBtnWidth}px + 7px), calc(-${popoverCloseBtnWidth}px - 2px))`;
  }, []);

  return (
    <S.Wrapper>
      <S.Container ref={containerRef}>
        <S.PopoverCloseBtn onClick={onCloseHandler} ref={popoverCloseBtnRef} />
        {props.children}
      </S.Container>
    </S.Wrapper>
  );
}
