'use client';
import {
    Paper,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    Box ,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
    Button,
    Typography ,
    Table ,
    TableBody,
    TableCell ,
    TableContainer,
    TableHead ,TableRow,
} from '@mui/material';

import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import ProductPerfomance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './page.css';
import UpdateIcon from '@mui/icons-material/Update';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React, {useEffect, useState} from 'react'

import axios from 'axios';


const endpoint = 'http://127.0.0.1:8080/api/products'; // Ruta de la API


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });


function Forms() {

    const defaultProps = {
      options: top100Films,
      getOptionLabel: (option: FilmOptionType) => option.label,
    };
    
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };


    //////
    // const [products, setProducts] = useState<any[]>([]);
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTcwMDUyMjg2MiwiZXhwIjoxNzAzMTE0ODYyLCJuYmYiOjE3MDA1MjI4NjIsImp0aSI6IkRtMnRxdjBKM2RVQUo2SjQiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.TVN9dc22KVx-UmmPBhlOMnODkhai5ALzPXf7WaCgFSk';
 
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(endpoint, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //       setProducts(response.data.data);
    //     } catch (error) {
    //       console.error('Error fetching products:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, [token]); //
      

    const [product, setProduct] = useState('');

    const handleChan = (e) => {
      const  value=e.target.value;
      setProduct(value);
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid container xs={6}>
            
              <Grid xs={3}>
                <Item>Cliente</Item>
              </Grid>

              <Grid xs={8}>
                
                  <Autocomplete
                  {...defaultProps}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                    
                  )}
                />
              </Grid>
              <Grid xs={1}>
                <Button style={{ color: 'black',minWidth:'0px' }} startIcon={ <ArrowForwardIcon style={{ marginTop:'1rem'}} />}></Button>
              </Grid>
            
          </Grid>

          <Grid container xs={6}>
            <Grid  xs={12}style={{ fontWeight: 'bold'}}>
              Expiraciòn
            </Grid>
            <Grid container xs={12}>
              <Grid xs={8}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1"  gutterBottom style={{ fontWeight: 'bold', display:'flex'}}>
                    Lista de precio 
                    <a href="" className="update">
                      <QuestionMarkIcon style={{ fontSize: 12, marginBottom:5}} />
                    </a>
                  </Typography>
                  <p className='left'>Tarifa Pública (PEN)</p>
                </Box>
              </Grid>

                <Grid xs={4} display={'flex'}>
                  <a  href="" className="update"> <UpdateIcon />Actualizar precio</a>
                </Grid>
                
            </Grid>
            <Grid style={{ fontWeight: 'bold'}} xs={12}>
              Plazos de pago
            </Grid>
          </Grid>

        </Grid>

        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Lineas de Pedido" value="1" />
                <Tab label="Productos opcionales" value="2" />
                <Tab label="Otra información" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div><a href="">AGREGAR</a></div>
              <div className='products-cart'>
                <div className='item'>
                  <div className="group1">
                    <div className='picture'>
                      <img src="https://static.vecteezy.com/system/resources/previews/002/697/605/original/saas-icon-software-as-a-service-line-icon-with-a-cloud-vector.jpg" alt="" />
                    </div>
                    <div className="description">
                      <div className='bolder'>Saas - Servicio en nube básico</div>
                      <div className='light'>Cantidad: 1.00 Unidades</div>
                      <div className='light'>Precio Unitario: 200.00</div>
                    </div>
                  </div>
                  
                  <div className="price">
                    <div className="content">200.00</div>
                  </div>
                </div>
              </div>

             
            </TabPanel>
            <TabPanel style={{padding:'24px 0'}} value="2">
            <TableContainer >
              <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{padding:'24px 0'}}>
                  <TableRow style={{background:'#ebebeb'}}>
                    <TableCell>Product</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Impuestos</TableCell>
                    <TableCell align="right">Desc %</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                </TableBody>
                
              </Table>
              <Box style={{margin:'15px 0'}} sx={{ maxWidth: 200 }}>
                <FormControl  color={'info'} fullWidth>
                    <InputLabel >Agregar Product</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={product}
                      label="Age"
                      onChange={handleChan}
                    >
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                      <MenuItem value={30}>3</MenuItem>
                    </Select>
                </FormControl>
              </Box>
          </TableContainer>
            </TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <p className='too-light'>Términos y condiciones...</p>

          </TabContext>
          
        </Box>

        <Grid container spacing={2}>
          <Grid xs={12} className='Parent'>
            <div className='group2'>
              <div className='gray'>_______________________</div>
              <div className='box'>
                <div className='gray'>Base imponible: </div>
                <div className='bold fs'>S/200.00</div>
              </div>
              <div className='box'>
                <div className='gray'>IGV: </div>
                <div className='gray'>S/36.00</div>
              </div>
              <div className='gray'>___________</div>
              <div className='box'>
                <div className='gray'>Total: </div>
                <div className='bold fb'>S/236.00</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

    );
  }
export default Forms;

interface FilmOptionType {
    label: string;
    year: number;
  }

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];