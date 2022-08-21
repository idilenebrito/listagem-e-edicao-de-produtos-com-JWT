import styled from 'styled-components';

const InputButton = styled.button`
  background: #188fed;
  width: 12.5em;
  height: 2.5em;
  color: white;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.6em 1.5em;
  border: none;
  border-radius: 4px;
  // box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`;
const InputText = styled.input`
  background: #dcdcdc;
  color: #696969;
  font-size: 1em;
  margin: 1em;
  padding: 0.6em 1.3em;
  border: none;
  outline: none;
  border-radius: 3px;
  &.signup {
    width: 14em;
    font-size: 0.9em;
    margin: 0.5em;
  }
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20em;
  height: auto;
  background: white;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10em;
  border-radius: 4px;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
  &.bigBox {
    width: 30em;
  }
`;

const BoxProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  background: #fffefe;
  margin: 3vw;
  justify-content: space-evenly;
  border-radius: 4px;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
  &.bigBox {
    width: 100em;
  }
`;

const Title = styled.h1`
  color: #696969;
  text-align: center;
`;

const LargeTitle = styled.h3`
  color: #696969;
  font-weight: 700;
  text-align: right;
  padding-right: 3vw;
  &:hover {
    color: #ed5418;
    cursor: pointer;
  }
`;

const SmallTitle = styled.h5`
  color: #696969;
  font-weight: 100;
  &.medium {
    font-weight: 200;
    text-align: left;
    width: 18.7em;
    padding-left: 6px;
    margin: 0.7em;
    margin-top: 1.5em;
  }
`;

const SpanText = styled.span`
  color: #696969;
  font-weight: 700;
  &:hover {
    color: #188fed;
    cursor: pointer;
  }
`;
const ListUl = styled.ul`
  text-align: left;
  width: 100%;
  list-style: none;
  padding-left: 0.5em;
  & > li {
    margin: 0.5em;
  }
`;

const SpanLi = styled.span`
  color: #188fed;
  font-size: 1.1em;
  font-weight: 600;
`;

const Sair = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 0.7em;
`;

export {
  InputButton,
  InputText,
  Box,
  Title,
  SmallTitle,
  SpanText,
  SpanLi,
  ListUl,
  Sair,
  BoxProdutos,
  LargeTitle,
};
