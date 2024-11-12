import Spline from '@splinetool/react-spline/next';
import "./app.css"

export default function Home() {
  return (
    <>
      <div className="slogan">
        <p >Discover a smarter way to explore! Our personalized recommendation system brings you the best news, movies, and books, tailored to your unique tastes. 
          Stay updated with fresh content that matches your interests—always relevant, always exciting. Start exploring now!</p>
      </div>
      <main>
        <div className="main-container">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/RW-CBonFpbUvANYJ/scene.splinecode" />
          </div>
          </div>
      </main>
    
    </>
  );
}
