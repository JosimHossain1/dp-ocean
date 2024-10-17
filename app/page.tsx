import WeeklyBestSelling from './components/best-selling/WeeklyBestSelling';
import BlogSection from './components/blog/BlogSection';
import FeaturedProduct from './components/featured-product/FeaturedProduct';
import Feedback from './components/feedback/Feedback';
import Header from './components/Header';
import NewProduct from './components/new-product/NewProduct';
import Performance from './components/perfomance/Performance';

export default function Home() {
  return (
    <div>
      <Header />
      <NewProduct />
      <WeeklyBestSelling />
      <FeaturedProduct />
      <Performance />
      <Feedback />
      <BlogSection />
    </div>
  );
}
