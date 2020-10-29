import * as S from './Styled.js';

const AppStyled = () => {
  const getFooter = (str, name) => {
    return `${str[0]} copyright © ${name}`;
  };

  return (
    <S.StyledParent>
      <S.StyledHeader>Header</S.StyledHeader>
      <S.StyledLeft>Left Sidebar</S.StyledLeft>
      <S.StyledMain>Main Content</S.StyledMain>
      <S.StyledRight>Right Sidebar</S.StyledRight>
      <S.StyledFooter>{getFooter`2020 ${'company'}`}</S.StyledFooter>
    </S.StyledParent>
  );
};

export default AppStyled;
