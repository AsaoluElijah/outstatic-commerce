import { getDocuments } from "outstatic/server";

const Index = ({ allProducts }) => {
  return (
    <div>
      {allProducts.map((product) => (
        <h1 key={product.title}>{product}</h1>
      ))}
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allProducts = getDocuments("products", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
    "author",
  ]);

  return {
    props: { allProducts },
  };
};
