export default function Button(props) {
    const {text, func} = props;
  return (
    <button onClick={func} className="px-8 py-4 mx-auto mt-15 rounded-md bg-blue-900 hero-button duration-200">
      <p>{text}</p>
    </button>
  );
}
