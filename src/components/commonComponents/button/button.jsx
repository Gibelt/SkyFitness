// /* eslint-disable prettier/prettier */
import { StyledButton } from "./styleData/commonStyles";
import { sizeStyles, colorStyles } from "./styleData/dynemicStyles";

export const Button = {
  s16: { blue: btn(16, "blue") },
  s18: { blue: btn(18, "blue"), white: btn(18, "white") },
  s20: { green: btn(20, "green") },
  s24: { green: btn(24, "green") },
};

function btn(fontSize, color) {
  const StyledButtonConstructor = ({
    width = "100%",
    onClick = () =>
      console.log(`I am a ${color} button with ${fontSize} font-size`),
    children,
    disabled = false,
  }) => {
    return (
      <StyledButton
        onClick={onClick}
        style={{
          width,
          size: sizeStyles[fontSize],
          color: colorStyles[fontSize][color],
        }}
        disabled={disabled}
      >
        {children}
      </StyledButton>
    );
  };
  return StyledButtonConstructor;
}
