export function ContentContainer(props) {
  return (
    <div className="z-0 text-slate-300 text-xl w-4/5 mx-auto py-8">
      {props.children}
    </div>
  );
}
