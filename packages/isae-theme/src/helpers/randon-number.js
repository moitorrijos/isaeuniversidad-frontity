export default function randonNumber(initial = 1, final = 10) {
  return Math.floor(Math.random() * final) + initial;
}