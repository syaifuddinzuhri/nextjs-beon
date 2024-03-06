import "swiper/css";

import { Box, Image, Stack } from "@chakra-ui/react";
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Banner } from "@/interfaces/banner";

interface IProp {
  data: Banner[];
}

const Carousel: React.FC<IProp> = ({ data }) => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<div class="${className}">${index + 1}</div>`;
    },
  };

  return (
    <>
      <Stack gap={0} mb={{ base: 0, md: 3 }} mx={{ base: -3, md: -5 }}>
        <Box width={"full"}>
          <Swiper
            centeredSlides
            centeredSlidesBounds
            slidesPerView={"auto"}
            pagination={pagination}
            mousewheel
            keyboard
            loop
            spaceBetween={8}
            modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                spaceBetween: 12,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={item.id}>
                <Image src={item.file_image} alt={`Slide ${index}`} borderRadius={{ base: 8, md: 16 }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
    </>
  );
};

export default Carousel;
