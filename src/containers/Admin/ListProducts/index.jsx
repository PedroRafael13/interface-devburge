import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import React from 'react'
import paths from '../../../contants/paths';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import { useEffect, useState } from 'react';

import { Container, ButtonIcon } from './style';
import ModeIcon from '@mui/icons-material/Mode';

export const ListProducts = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
      setProduct(data);
    }
    loadProducts();
  }, []);

  const editProduct = (prd) => {
    navigate(paths.EditProduct, { state: { prd } });
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="header">Nome</TableCell>
              <TableCell className="header">Preço</TableCell>
              <TableCell className="header">Produto em oferta</TableCell>
              <TableCell className="header"></TableCell>
              <TableCell className="header">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product &&
              product.map((prd) => (
                <TableRow
                  key={prd.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {prd.name}
                  </TableCell>
                  <TableCell>{formatPrice(prd.price)}</TableCell>
                  <TableCell align="center">
                    {prd.offer ? (
                      <CheckCircleIcon style={{ color: '#228B22' }} />
                    ) : (
                      <CancelIcon style={{ color: '#9E1C00' }} />
                    )}
                  </TableCell>
                  <TableCell>
                    <img src={prd.url} alt="imagem-produto" width={'120px'} />
                  </TableCell>
                  <TableCell>
                    <ButtonIcon>
                      <ModeIcon onClick={() => editProduct(prd)} />
                    </ButtonIcon>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};