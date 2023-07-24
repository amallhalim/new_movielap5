import React from "react";
import aboutUsimg from "../assets/about us.jpg";
export default function AboutUs() {
  return (
    <div className="container AboutUs  h-100 pb-5 ">
      <img src={aboutUsimg} alt="aboutus" className="w-100 my-5  my-lg-3" />
      <div className="container text-light">
        <p>
          We are a movie website powered by the TMDb API, which provides us with
          access to a vast collection of movie data. Our goal is to make it easy
          for movie fans to discover new movies, learn about their favorite
          actors and directors, and stay up-to-date on the latest movie news.
          Our website features a variety of movie-related content, including
          movie reviews, trailers, and news articles. We also offer a search
          function that allows users to find specific movies or information
          about actors and directors. Thank you for visiting our website. We
          hope you enjoy using it as much as we enjoy creating it. If you have
          any feedback or suggestions, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
}
