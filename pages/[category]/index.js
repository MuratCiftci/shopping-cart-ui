const index = ({category}) => {
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
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: false };
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${params}`
    );
    const category = await res.json();
    return {
      props: {
        category,
      },
    };
  }
export default index
