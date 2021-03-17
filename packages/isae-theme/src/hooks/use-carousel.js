import { useEffect } from 'react';

export default function useCarousel(currentItem, setCurrentItem) {
  let item1, item2, item3;
  if (currentItem === 1) {
    item1 = { left: 0 };
    item2 = { left: "100%", opacity: 0 };
    item3 = { left: "200%", opacity: 0 };
  } else if (currentItem === 2) {
    item1 = { left: "-100%", opacity: 0 };
    item2 = { left: 0 };
    item3 = { left: "100%", opacity: 0 };
  } else if (currentItem === 3) {
    item1 = { left: "-200%", opacity: 0 };
    item2 = { left: "-100%", opacity: 0 };
    item3 = { left: 0 };
  }
  useEffect(() => {
    const autoplay = setInterval(() => {
      if (currentItem === 3) setCurrentItem(1);
      else if (currentItem >= 1) setCurrentItem(currentItem + 1);
    }, 7200);
    return () => { clearInterval(autoplay) };
  });
  const carouselItems = {
    item1,
    item2,
    item3
  }
  return carouselItems;
}