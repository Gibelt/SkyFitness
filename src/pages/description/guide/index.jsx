import Styled from './style';

import SuitableFor from './SuitableFor';
import Directions from './Directions';

export default ({ data }) => {
  const { description, directions, suitableFor } = data;
  return (
    <Wrapper>
      <Section>
        <h2>Подойдет для вас, если:</h2>
        <SuitableFor data={suitableFor} />
      </Section>

      <Section>
        <h2>Направления:</h2>
        <Directions data={directions} />
      </Section>

      <Section>
        <p>{description}</p>
      </Section>
    </Wrapper>
  );
};
const { Wrapper, Section } = Styled;
