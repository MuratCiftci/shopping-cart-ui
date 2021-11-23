const index = ({category}) => {
  console.log(category);
    return (
        <div>
            {category.map(product => (
               <p>{ product.id}</p>
            ))}
        </div>
    )
}
export async function getStaticPaths() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
  
    // Get the paths we want to pre-render based on posts
    const paths = categories.map((category) => ({
      params: { category },
    }));
  
    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };
  }
  export async function getStaticProps({ params }) {
    console.log(params);
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${params.category}`
    );
    const category = await res.json();
  
    return {
      props: {
        category,
      },
    };
  }
export default index
