import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import paths from '../../contants/paths';

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ReceiptLongIcon,
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Product,
    icon: Inventory2Icon,
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon,
  },
]

export default listLinks