'use client';
import {
    Paper,
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import ProductPerfomance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Forms = () => {
    return (
      <Grid container spacing={12}>
        <Grid item xs={12} lg={12} >
          <BaseCard title="Ingreso de Venta">
            <>
            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={4} justifyContent="space-between">
              
                <TextField
                        id="name-basic"
                        label="Código"
                        variant="outlined"
                        defaultValue="200"
                        
                      />
              
              
              <TextField
                      id="name-basic"
                      label="Cliente"
                      variant="outlined"
                      defaultValue="Seok Jin"
                    />
              <TextField
                      id="name-basic"
                      label="Fecha"
                      variant="outlined"
                      defaultValue="20/10/23"
                    />
            </Stack >
            
            
            </>
          </BaseCard>
          <br />
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <ProductPerfomance />
            </Grid>
          </Grid>

          <br />
            <Button>
              Agregar Producto
            </Button>

            <Button>
              Terminan venta 
            </Button>

        </Grid>
      </Grid>
    );
  };
  
  export default Forms;