"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// next
import Image from "next/image";
import {
  Box,
  Paper,
  Button,
  Typography,
  CardContent,
  Container,
  useMediaQuery,
  Stack,
} from "@mui/material";
// import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import RootStyled from "./styled";
import { varFadeInRight, MotionContainer } from "../../animate";

const variants = {
  enter: (direction: any) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: any) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: any, velocity: any) => {
  return Math.abs(offset) * velocity;
};

function CarouselItem(props: any) {
  const { item, index } = props;
  // const router = useRouter();
  const isMobile = useMediaQuery("@media (max-width: 992px)");
  const [first, setFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, 100);
  }, [index]);

  return (
    <Paper className="slide-wrapper">
      <Box>
        {item && (
          <Image
            priority
            fill
            objectFit="cover"
            sizes="100vw"
            src={item?.url}
            alt="hero-carousel"
          />
        )}
      </Box>
      <Box className="bg-overlay" />
      <Container>
        <CardContent className="card-content">
          <MotionContainer open={first}>
            <motion.div variants={varFadeInRight}>
              <Typography
                variant="h1"
                component="h1"
                fontSize={{ md: "4rem", xs: "2rem" }}>
                {item?.heading}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h6" gutterBottom color={"#000"}>
                {item?.description}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Stack spacing={2} direction="row">
                <Button size={isMobile ? "small" : "large"} variant="contained">
                  Shop now
                </Button>
                <Button
                  size={isMobile ? "small" : "large"}
                  variant="contained"
                  color="secondary">
                  See all
                </Button>
              </Stack>
            </motion.div>
          </MotionContainer>
        </CardContent>
      </Container>
    </Paper>
  );
}

export default function CarouselAnimation(props: any) {
  const { data } = props;
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % (data?.length || 1));

  const paginate = (newDirection: any) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000); // Auto-change every 3 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [page]);

  const isEmpty = !Boolean(data?.length);

  return (
    <RootStyled>
      {isEmpty ? (
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <Typography variant="h4" color="text.secondary">
            Slides are not uploaded yet!
          </Typography>
        </Stack>
      ) : (
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="motion-dev"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}>
            <CarouselItem
              //   themeMode={themeMode}
              item={data ? data[imageIndex] : null}
              index={data ? data[imageIndex] : null}
              activeStep={imageIndex}
              isActive={imageIndex}
              key={Math.random()}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </RootStyled>
  );
}
