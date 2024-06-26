import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Secound Book",
    description: "The secound book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => {
          return (
            <ProductItem
              key={prod.id}
              title={prod.title}
              price={prod.price}
              description={prod.description}
              id={prod.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
