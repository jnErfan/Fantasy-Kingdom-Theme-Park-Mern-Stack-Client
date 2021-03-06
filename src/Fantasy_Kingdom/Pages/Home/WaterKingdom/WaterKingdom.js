import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./WaterKingdom.css";

const WaterKingdom = () => {
  // Water Kingdom Image Gallery And Video
  return (
    <div className="container galleryContainer2" id="WaterKingdom">
      <div>
        <div data-aos="fade-up" data-aos-duration="1000" className="mb-5">
          <img
            width="35%"
            src="https://fantasykingdom.net/wp-content/uploads/2021/08/waterkingdom-300x122.png"
            alt=""
          />
        </div>
        <div className="fantasyGalleryContainer2 p-3">
          <div data-aos="fade-up" data-aos-duration="1000" className="mb-5">
            <h1 className="gallery2">Gallery</h1>
          </div>
          <div className="px-4">
            <Row xs={2} md={3} lg={4}>
              {[
                "https://fantasykingdom.net/wp-content/uploads/2021/08/H10.jpg",
                "https://www.localguidesconnect.com/t5/image/serverpage/image-id/28143iF02D537FDCEC425A/image-size/large?v=v2&px=999",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/dancing-zone1-1.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/family-pool3-1.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/lazy-river1-1.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/multi-slide1-1.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/slide-world1-1.jpeg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/H01.png",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/H03.png",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/F_OOR5235.jpg",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/H09.png",
                "https://fantasykingdom.net/wp-content/uploads/2021/08/H13.png",
              ].map((image) => (
                <Col key={image}>
                  <Card
                    data-aos="flip-left"
                    data-aos-duration="3000"
                    className="mb-2 bg-transparent imageFrame2 mb-5"
                  >
                    <Card.Img variant="top galleryImage2 m-1" src={image} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="videoContainer2">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="gallery2">Video</h1>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="3000" className="">
            <iframe
              className="p-4 mb-4 video2"
              width="85%"
              height="500px"
              src="https://www.youtube.com/embed/8CT8f9-ZmBw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterKingdom;
