import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://editor.analyticsvidhya.com/uploads/66982lms.jpg'
          alt="First slide"
        />
        
       </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kortext.com/wp-content/uploads/Book-blog-image.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      {/* </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-photo/book-library-old-open-textbook-260nw-785109361.jpg"
          alt="Second slide"
        /> */}

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      </Carousel>

  );
}

export default Home