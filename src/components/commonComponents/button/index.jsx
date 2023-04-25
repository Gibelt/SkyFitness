import StyledButton from './style';
import { sizeStyles, colorStyles } from './data';

const Btn = (fontSize, color) => {
  function StyledButtonConstructor({
    width = '100%',
    height = 'auto',
    onClick = () => {},
    children,
    disabled = false,
  }) {
    return (
      <StyledButton
        onClick={onClick}
        style={{
          width,
          height,
          size: sizeStyles[fontSize],
          color: colorStyles[fontSize][color],
          activity: !disabled,
        }}
        disabled={disabled}
      >
        {children}
      </StyledButton>
    );
  }
  return StyledButtonConstructor;
};

export const Button = {
  s16: { blue: Btn(16, 'blue') },
  s18: { blue: Btn(18, 'blue'), white: Btn(18, 'white') },
  s20: { green: Btn(20, 'green') },
  s24: { green: Btn(24, 'green') },
};
