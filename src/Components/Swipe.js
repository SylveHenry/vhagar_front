import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SwiperCarousel() {
  return (
    <div className="align-items-center justify-content-center mb-5">
      <h2 className="text fw-bold ps-4 mt-5">Top Collections</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          946: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper container-fluid"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        style={{
          margin: "100px auto",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="card" style={{ width: "18 rem", background: "#050c24", border:'2px solid #b2b5b7' }}>
            <div>
              <img
                src="../images/about-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text">Ant Collection</h5>
                <p className="card-text text">
                  by @ Jerry Peter <br></br>
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="card" style={{ width: "18 rem", background: "#050c24" }}>
            <div>
              <img
                src="../images/about-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text">Ant Collection</h5>
                <p className="card-text text">
                  by @ Jerry Peter <br></br>
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="card" style={{ width: "18 rem", background: "#050c24" }}>
            <div>
              <img
                src="../images/about-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text">Ant Collection</h5>
                <p className="card-text text">
                  by @ Jerry Peter <br></br>
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="card" style={{ width: "18 rem", background: "#050c24" }}>
            <div>
              <img
                src="../images/about-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text">Ant Collection</h5>
                <p className="card-text text">
                  by @ Jerry Peter <br></br>
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="card" style={{ width: "18 rem", background: "#050c24" }}>
            <div>
              <img
                src="../images/about-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text">Ant Collection</h5>
                <p className="card-text text">
                  by @ Jerry Peter <br></br>
                  25 Items
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
