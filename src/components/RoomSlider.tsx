"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { RoomListing } from "@/data/rooms";

type RoomSliderProps = {
  rooms: RoomListing[];
};

export default function RoomSlider({ rooms }: RoomSliderProps) {
  const [preferStatic, setPreferStatic] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPreferStatic(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (preferStatic) {
    return (
      <div className="row g-4 justify-content-center room-slider--static px-3 px-md-4">
        {rooms.map((room) => (
          <div
            key={room.slug}
            className="col-12 col-sm-10 col-md-6 col-xl-4"
          >
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
                    <i className="flaticon-user" />
                    {room.person} Person
                  </span>
                </div>
                <span className="h4 rent mb-0 mt-15 d-block">{room.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <Swiper
        className="main__room__slider room__slider overflow-hidden wow fadeInUp"
        data-wow-delay=".5s"
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        loop={rooms.length >= 2}
        speed={900}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: ".room-slider-pagination",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.slug}>
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
