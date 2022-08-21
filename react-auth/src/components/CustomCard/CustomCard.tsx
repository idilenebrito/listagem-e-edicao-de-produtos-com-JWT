/* eslint-disable prettier/prettier */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
  foto: string,
  descricao: string,
  preco: number,
};

const CustomCard = ({ foto, descricao, preco }: Props) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 3}}>
      <CardActionArea
        sx={{
          width: 200,
        }}
      >
        <CardMedia
          sx={{
            // padding: 2,
            alignItems: 'center',
          }}
          component="img"
          height="200"
          image={foto}
          alt="green iguana"
        />
        <CardContent sx={{ padding: 0}}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center', paddingTop: 1 }}
          >
            {descricao}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: 'center'}}
          >
            R$ {preco}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
