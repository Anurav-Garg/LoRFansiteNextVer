export function PageHeading(props) {
  return (
    <h1 className="text-4xl md:text-5xl text-yellow-400 font-semibold pt-4">
      {props.heading}
    </h1>
  );
}
