import {
  gql
} from "@apollo/client";

const Products = gql`
query GetExchangeRates{
  category {
  products{
    name
    inStock
    gallery
    description
    category
    prices {
        currency
        amount
      }
    attributes {      
      name
      type
      items {
        value
        id
      }
    }  
  }
} 
}
`;

const Currencies = gql`
query Currencies{
  currencies
} 
`;


export {Products,Currencies}