import { useEffect } from 'react';

export default function useCarousel(currentItem, setCurrentItem, autoplay = true) {
  let item1, item2, item3;
  if (currentItem === 1) {
    item1 = { transform: "translateX(0)", };
    item2 = { transform: "translateX(110%)" };
    item3 = { transform: "translateX(220%)" };
  } else if (currentItem === 2) {
    item1 = { transform: "translateX(-110%)" };
    item2 = { transform: "translateX(0)" };
    item3 = { transform: "translateX(110%)" };
  } else if (currentItem === 3) {
    item1 = { transform: "translateX(-220%)" };
    item2 = { transform: "translateX(-110%)" };
    item3 = { transform: "translateX(0)" };
  }
  useEffect(() => {
    const play = autoplay ? setInterval(() => {
      if (currentItem === 3) setCurrentItem(1);
      else if (currentItem >= 1) setCurrentItem(currentItem + 1);
    }, 7200) : null;
    return () => { clearInterval(play) };
  });
  const carouselItems = {
    item1,
    item2,
    item3
  }
  return carouselItems;
}