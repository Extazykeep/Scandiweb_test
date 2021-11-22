import {
  gql
} from '@apollo/client'

const FETCH_Products = gql`
query products($categoryInput: CategoryInput){
  category(input: $categoryInput) {
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
`
const PRODUCT_SINGLE = gql`
query productSinle{
  category{
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
`

const Currencies = gql`
query currencies{
  currencies
} 
`

export { FETCH_Products, Currencies, PRODUCT_SINGLE }
