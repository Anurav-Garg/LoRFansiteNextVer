export function ContentContainer(props) {
  return (
    <div className="z-0 text-slate-300 text-xl max-w-6xl mx-auto py-8">
      {props.children}
    </div>
  );
}
