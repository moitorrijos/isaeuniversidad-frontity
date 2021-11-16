const Search = ({ color }) => (
  <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7877 13.6959L20 18.8667L18.0226 20.8284L12.7826 15.63C11.4688 16.5225 9.88198 17.045 8.17338 17.045C3.66668 17.045 0 13.4084 0 8.9367C0 4.46587 3.66668 0.828369 8.17338 0.828369C12.6809 0.828369 16.3476 4.46587 16.3476 8.9367C16.3476 10.7134 15.768 12.3584 14.7877 13.6959ZM8.17438 3.20587C4.98903 3.20587 2.39757 5.7767 2.39757 8.9367C2.39757 12.0967 4.98819 14.6675 8.17438 14.6675C11.3597 14.6675 13.9512 12.0967 13.9512 8.9367C13.9512 5.7767 11.3597 3.20587 8.17438 3.20587Z" fill={color ? color : "#333333"} />
  </svg>
)

export default Search;