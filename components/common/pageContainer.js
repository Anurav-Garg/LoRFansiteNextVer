import React, { useState } from "react";

export function PageContainer(props) {
  const [outerBackground, setOuterBackground] = useState(
    props.outerBackground ? props.outerBackground : "bg-gray-800"
  );
  const [innerBackground, setInnerBackground] = useState(
    props.innerBackground ? props.innerBackground : "bg-gray-800"
  );

  const childrenWithHandler = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        setOuterBackground: setOuterBackground,
        setInnerBackground: setInnerBackground,
      });
    }
  });

  return (
    <div
      className={`${outerBackground} bg-fixed bg-top bg-cover h-full min-h-screen min-w-screen -z-10`}
      id="bg-image"
    >
      <div
        className={`${innerBackground} transition-all duration-500 min-h-screen min-w-screen ease-in-out bg-fixed bg-top bg-cover`}
      >
        {childrenWithHandler}
      </div>
    </div>
  );
}
