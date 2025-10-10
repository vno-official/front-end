"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { slides } from "./config";
import { useOnboarding } from "./context";

const OnboardingScreenBody = () => {
  const { bindSwiper } = useOnboarding();

  return (
    <Swiper
      className="flex-1 w-full"
      slidesPerView={1}
      speed={600}
      spaceBetween={24}
      loop={false}
      grabCursor={true}
      onSwiper={bindSwiper}
    >
      {slides.map(({ id, title, desc, Illustration }) => (
        <SwiperSlide key={id}>
          <div className="h-full flex flex-col justify-between p-4">
            <motion.h2
              className="font-bold text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="flex items-center justify-center w-full max-h-[280px] lg:max-h-[350px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <Illustration className="w-full h-auto" />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {desc}
            </motion.p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OnboardingScreenBody;
