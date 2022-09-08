export function PageContainer(props) {
  return (
    <div
      className={`${
        props.outerBackground ? props.outerBackground : "bg-gray-800"
      } bg-fixed bg-top bg-cover min-h-screen min-w-screen -z-10 backdrop-brightness-0`}
      id="bg-image"
      onMouseOver={props.handlers.onMouseOver}
    >
      <div
        className={`${
          props.innerBackground ? props.innerBackground : "bg-gray-800"
        } transition-all duration-500 min-h-screen min-w-screen ease-in-out bg-fixed bg-top bg-cover`}
      >
        {props.children}
      </div>
    </div>
  );
}
