import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

const products = [
  {
    id: "1",
    name: "Rompecabezas",
    cantidad: "5",
    precio: "$/.32",
    total: "160"
  },
  {
    id: "2",
    name: "Galleta casino menta",
    cantidad: "1",
    precio: "$/.4.60",
    total: "4.60"
  },
  {
    id: "3",
    name: "Galleta casino chocolate",
    cantidad: "1",
    precio: "$/.4.60",
    total: "4.60"
  }
];

const ProductPerfomance = () => {
  return (
    <BaseCard title="Lista de venta">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Producto
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Cantidad
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Precio
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Total
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {product.name}
                      </Typography>
                      
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.cantidad}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.precio}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.total}
                  </Typography>
                </TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default ProductPerfomance;
