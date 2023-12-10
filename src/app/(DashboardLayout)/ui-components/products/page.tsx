// En ProductList.js
'use client';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/product_service';

import MaterialTable from 'material-table';
import { Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface Product {
  id: number;
  title: string;
  price: number;
  // ...otras propiedades
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleCreate = () => {
    // Lógica para crear un nuevo producto
    console.log('Crear producto');
  };

  const handleEdit = (productId: number) => {
    // Lógica para editar un producto con el ID proporcionado
    console.log(`Editar producto ${productId}`);
  };

  const handleDelete = (productId: number) => {
    // Lógica para eliminar un producto con el ID proporcionado
    console.log(`Eliminar producto ${productId}`);
  };

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Título', field: 'title' },
    { title: 'Precio', field: 'price' },
  ];

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreate}
        startIcon={<AddIcon />}
        style={{ marginBottom: 16 }}
      >
        Crear Producto
      </Button>
      <Typography variant="h5" style={{ marginBottom: 16 }}>
        Lista de Productos
      </Typography>
      <MaterialTable
        columns={columns}
        data={products}
        title=""
        actions={[
          {
            icon: () => <EditIcon />,
            tooltip: 'Editar',
            onClick: (event, rowData: any) => handleEdit(rowData.id),
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: 'Eliminar',
            onClick: (event, rowData: any) => handleDelete(rowData.id),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </Box>
  );
};

export default ProductList;
