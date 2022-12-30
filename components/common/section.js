export function Section(props) {
  return (
    <>
      <h2 className="text-3xl md:text-4xl text-yellow-400 pt-8 pb-2">
        {props.heading}
      </h2>
      {props.children}
    </>
  );
}
