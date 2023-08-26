import React from "react";
import { Box } from "@mui/material";

import HeroCrousel from "@/components/BannerCarousels/carousels/heroCarousel/heroCarousel";

import img1 from "../../../../public/images/banner-1.svg";
import img2 from "../../../../public/images/banner-image-2.webp";
import img3 from "../../../../public/images/herobanner.avif";

const data = [
  {
    url: img1,
    title: "Best Deal Online on smart Watches",
    heading: "Smart Wearable.",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam provident mollitia, quas consequuntur repellat nihil nam culpa cumque",
  },
  {
    url: img2,
    title: "Best Deal Online on smart Watches",
    heading: "Smart Wearable.",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam provident mollitia, quas consequuntur repellat nihil nam culpa cumque",
  },
  {
    url: img3,
    title: "Best Deal Online on smart Watches",
    heading: "Smart Wearable.",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam provident mollitia, quas consequuntur repellat nihil nam culpa cumque",
  },
];

const page = () => {
  return (
    <Box>
      <HeroCrousel data={data} />
    </Box>
  );
};

export default page;
