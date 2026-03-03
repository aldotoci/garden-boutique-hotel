"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { rooms } from "@/data/rooms";

export default function RoomSlider() {
  return (
    <div className="row">
      <Swiper
        className="main__room__slider overflow-hidden wow fadeInUp"
        data-wow-delay=".5s"
        modules={[Pagination]}
        spaceBetween={30}
        loop
        speed={1000}
        centeredSlides={false}
        pagination={{
          clickable: true,
          el: ".room-slider-pagination",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          768: { slidesPerView: 2, centeredSlides: false },
          992: { slidesPerView: 2.5, centeredSlides: false },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
      >
        {rooms.map((room, i) => (
          <SwiperSlide key={i}>
            <div className="room__slide__box radius-6">
              <div className="room__thumbnail jara-mask-2 jarallax">
                <img
                  height={585}
                  width={420}
                  className="radius-6 jarallax-img"
                  src={room.thumb}
                  alt={room.title}
                />
              </div>
              <div className="room__content">
                <a href={`/room-details/${room.slug}`} className="room__title">
                  <h5>{room.title}</h5>
                </a>
                <div className="room__content__meta">
                  <span>
                    <i className="flaticon-construction" /> {room.sqm} sqm
                  </span>
                  <span>
                    <i className="flaticon-user" />
                    {room.person} Person
                  </span>
                </div>
                <span className="h4 rent mb-0 mt-15 d-block">{room.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rts__pagination">
        <div className="room-slider-pagination rts-pagination" />
      </div>
    </div>
  );
}
