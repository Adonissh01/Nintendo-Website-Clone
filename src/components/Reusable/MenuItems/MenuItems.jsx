import React from "react";

export const MenuItems = () => {
  const Hub = [
    { id: "1", title: "My Nintendo Store", icon: "cloud", canToggle: true },
    { id: "2", title: "Games", icon: "joystick-button", canToggle: true },
    {
      id: "3",
      title: "Nintendo Switch",
      icon: "joystick-alt",
      canToggle: true,
    },
    { id: "4", title: "News & Events", icon: "chalkboard", canToggle: false },
    { id: "5", title: "Play Nintendo", icon: "play", canToggle: true },
  ];

  return (
    <div className="flex flex-col border-t border-b border-customWhite w-[20rem]">
      {Hub.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between spy-2 px-4 border-b"
        >
          <div className="flex h-[5rem] items-center">
            <box-icon name={item.icon} color="red"></box-icon>

            <p className="ml-2">{item.title}</p>
          </div>
          <div className="items-center flex">
            {item.canToggle ? <box-icon name="right-arrow-alt"></box-icon> : ""}
          </div>
        </div>
      ))}
    </div>
  );
};
