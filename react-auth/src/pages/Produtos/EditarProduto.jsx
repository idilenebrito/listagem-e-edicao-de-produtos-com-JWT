import { useContext, useEffect, useState } from 'react';
import GridEditar from '../../components/Grid/GridEditar';
import { LoginAuthContext } from '../../contexts/loginAuth';
import { getProdutosAll } from '../../services/api';
import { BoxProdutos, Title, LargeTitle } from '../../Styles/global';

const EditarProdutos = () => {
  // eslint-disable-next-line prettier/prettier
  const [produtos, setProdutos] = useState();
  const { logOut } = useContext(LoginAuthContext);
  useEffect(() => {
    getProdutosAll().then((data) => {
      setProdutos(data);
    });
  }, []);

  return (
    <>
      <LargeTitle
        onClick={() => {
          logOut();
        }}
      >
        LogOut
      </LargeTitle>

      <Title>Editar Produtos</Title>

      <BoxProdutos>
        {produtos?.map((item, index) => (
          <GridEditar
            key={item.id}
            index={index}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </BoxProdutos>
    </>
  );
};

export default EditarProdutos;
