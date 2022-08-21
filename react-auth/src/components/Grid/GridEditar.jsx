/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { putProdutos } from '../../services/api';
import CustomCardItem from './CustomCardItem';
import * as Style from './style';

const GridEditar = ({ item, onChange, removeItem }) => {
//   const [valorInicial, setValorInicial] = useState(null);

//   useEffect(() => {
//     putProdutos(id).then((data) => {
//         setValorInicial(data);
//     })
//   })

  return (
    <Style.Table>
      <Style.Thead>
        <Style.Tr>
          <Style.Th width={15} alignCenter></Style.Th>
          <Style.Th width={40} alignCenter>
            Descrição
          </Style.Th>
          <Style.Th width={10} alignCenter></Style.Th>
          <Style.Th width={25} alignCenter>
            Preco
          </Style.Th>
          <Style.Th width={10} alignCenter></Style.Th>
        </Style.Tr>
      </Style.Thead>
      <Style.Tbody>
        {item?.map((item, index) => (
          <CustomCardItem
            key={index}
            item={item}
            onChange={onChange}
            removeItem={removeItem}
          />
        ))}
      </Style.Tbody>
    </Style.Table>
  );
};

export default GridEditar;
