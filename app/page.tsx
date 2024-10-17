import BlogSection from './components/blog/BlogSection';
import FeaturedProduct from './components/featured-product/FeaturedProduct';
import Header from './components/Header';
import NewProduct from './components/new-product/NewProduct';

export default function Home() {
  return (
    <div>
      <Header />
      <NewProduct />
      <FeaturedProduct />
      <BlogSection />
    </div>
  );
}
