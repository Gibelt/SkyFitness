import { useRef, useEffect } from 'react';
import * as S from './styles';

export default function Popover(props) {
  const onCloseHandler = props.onClose;

  let { closeBtnRequired } = props;
  if (closeBtnRequired !== false) {
    closeBtnRequired = true;
  }

  const containerRef = useRef();
  const popoverCloseBtnRef = useRef();

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    console.log('cont width', containerWidth);
    console.log('cont', containerRef.current);
    const popoverCloseBtnWidth = popoverCloseBtnRef.current.offsetWidth;

    popoverCloseBtnRef.current.style.transform = `translate(calc(${containerWidth}px / 2 - ${popoverCloseBtnWidth}px + 7px), calc(-${popoverCloseBtnWidth}px - 2px))`;
  }, []);

  return (
    <S.Wrapper>
      <S.Container ref={containerRef}>
        {closeBtnRequired ? (
          <S.PopoverCloseBtn
            onClick={onCloseHandler}
            ref={popoverCloseBtnRef}
          />
        ) : (
          ''
        )}
        {props.children}
      </S.Container>
    </S.Wrapper>
  );
}
