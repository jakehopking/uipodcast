const scrollTo = (selector, block = 'start') => {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      // start, center, end, or nearest
      block: block,
    });

    return true;
  }
  return false;
};

export default scrollTo;
