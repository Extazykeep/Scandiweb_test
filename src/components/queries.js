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
    category
    prices {
        currency {
          symbol
        }
        amount
      }
    attributes {      
      name
    }
    id
    brand  
  }
  }
}
`


const PRODUCT_SINGLE = gql`
query productSingle($id: String!){
  product(id: $id) { 
    name
    inStock
    gallery    
    prices {
        currency {
          symbol
        }
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
    id
    brand  
  }
}
`

const Currencies = gql`
query currencies{
  currencies {
    label
    symbol
  }
} 
`

export { FETCH_Products,Currencies, PRODUCT_SINGLE }
