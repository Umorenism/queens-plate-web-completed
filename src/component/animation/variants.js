export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};