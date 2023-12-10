import axios from "axios"
const server = process.env.NEXT_PUBLIC_URL_API
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTcwMDkzMTgzNywiZXhwIjoxNzAzNTIzODM3LCJuYmYiOjE3MDA5MzE4MzcsImp0aSI6IkRYS2pkVVBZblhPa0pXTG8iLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.1rx4bPb3OeeO7juSaZMMh6rC5BKelcWvdSjeFnZTrEg'
const urlProducts =`${server}/api/products`

export const getProducts = async () => {
    try {
      const response = await axios.get(urlProducts, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response.data.data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Propagar el error para que pueda ser manejado en el componente que llama a esta función
    }
  };

  
export const getProductsById = async(idProduct: number) => {
    console.log(`urlProducts Server => ${server}`)
    const result = await axios.get(`${urlProducts}/${idProduct}`, {
        headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    console.log(result.data.data.data);
    return {
        props:{
            products: result
        }
    }
}