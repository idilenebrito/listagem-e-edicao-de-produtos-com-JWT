import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard/CustomCard';
import { getProdutosAll } from '../../services/api';
import { BoxProdutos, Title, LargeTitle } from '../../Styles/global';

const ListaDeProdutos = () => {
  // eslint-disable-next-line prettier/prettier
  const [produtos, setProdutos] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getProdutosAll().then((data) => {
      setProdutos(data);
    });
  }, []);

  return (
    <>
      <LargeTitle
        onClick={() => {
          navigate('/login');
        }}
      >
        Entrar
      </LargeTitle>

      <Title>Produtos</Title>

      <BoxProdutos>
        {produtos?.map((item) => (
          <CustomCard
            key={item.id}
            foto={item.imagem}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </BoxProdutos>
    </>
  );
};

export default ListaDeProdutos;
