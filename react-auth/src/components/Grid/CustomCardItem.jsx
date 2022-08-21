/* eslint-disable prettier/prettier */
import * as Style from '../CustomCard/style';
import { FiEdit2 } from 'react-icons/fi';

const CustomCardItem = ({ id, descricao, preco, editaItem, onChange}) => {
  return (
    <Style.Tr>
      <Style.Td>{id}.</Style.Td>
      <Style.Td>{descricao}</Style.Td>
      <Style.Td>R${preco}</Style.Td>
      <Style.Td>
        <FiEdit2 onClick={() => editaItem()} />
      </Style.Td>
    </Style.Tr>
  );
};

export default CustomCardItem;
