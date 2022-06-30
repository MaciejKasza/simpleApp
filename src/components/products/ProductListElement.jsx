const ProductListElement = (props) => {
  const { name } = props.product;
  return (
    <li>
      <p>name</p>
      <button>remove</button>
      <button>edit</button>
    </li>
  );
};

export default ProductListElement;
