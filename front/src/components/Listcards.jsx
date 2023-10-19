import Card from "../components/Card.jsx";

const Listcards = (props) => {
  const productos = props.productsData;

  return productos.map((product) => (
    <div key={product.id}>
      <Card id={product.id} name={product.name} price={product.price} />
    </div>
  ));
};

export default Listcards;
