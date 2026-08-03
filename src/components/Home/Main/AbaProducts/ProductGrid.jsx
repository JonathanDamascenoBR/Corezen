import Products from './Products';

function ProductGrid({ categoriaAtiva }) {
  return (
    <>
      <Products categoriaAtiva={categoriaAtiva} />
    </>
  )
}

export default ProductGrid