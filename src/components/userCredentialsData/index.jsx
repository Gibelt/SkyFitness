import * as St from './styled';

export default ({ login = 'login' }) => {
  const hiddenPass = '⦁⦁⦁⦁⦁⦁⦁⦁';

  return (
    <St.Wrapper>
      <link
        rel="stylesheet"
        href="path/to/font-awesome/css/font-awesome.min.css"
      />
      <St.Item>
        <St.Text> Логин: </St.Text>
        <St.Text> {login}</St.Text>
      </St.Item>
      <St.Item>
        <St.Text> Пароль: </St.Text>
        <St.Text style={{ minWidth: '100px' }}>{hiddenPass}</St.Text>
      </St.Item>
    </St.Wrapper>
  );
};
