import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';

import status from './order-status';
import React from 'react'
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

import { Container, Menu, LinkMenu } from './style';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/order');
      setOrders(response.data);
      setFilteredOrders(response.data);
    }
    loadOrders();
  }, []);

  function createData(orders) {
    return {
      name: orders.user.name,
      order: orders._id,
      date: orders.createdAt,
      status: orders.status,
      product: orders.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((ord) => createData(ord));
    setRows(newRows);
  }, [filteredOrders]);

  useEffect(() => {
    if (activeStatus == 1) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = status.findIndex((sts) => sts.id === activeStatus);
      const newFilteredOrders = orders.filter(
        (order) => order.status === status[statusIndex].value,
      );
      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  const filterStatus = (status) => {
    setActiveStatus(status.id);
    if (status.id == 1) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status == status.value);
      setFilteredOrders(newOrders);
    }
  };

  return (
    <Container>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              key={status.id}
              onClick={() => filterStatus(status)}
              $isActive={status.id === activeStatus}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className="header" />
              <TableCell className="header">Pedido</TableCell>
              <TableCell className="header">Nome do Cliente</TableCell>
              <TableCell className="header">Data do pedido</TableCell>
              <TableCell className="header">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.order}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};