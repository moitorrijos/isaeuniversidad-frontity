import { keyframes } from 'frontity';

export const bounceInUp = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 300px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -10px, 0);
  }

  75% {
    transform: translate3d(0, 5px, 0);
  }

  90% {
    transform: translate3d(0, -2px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;