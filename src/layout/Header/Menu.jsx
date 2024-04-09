import React, { useState, useEffect } from "react";
import menu_ic from "../../assets/Header_img/menu.svg";
import { useSpring, animated } from "react-spring";
const Menu = ({ onMenuToggle, show }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [menuRotation, setMenuRotation] = useState(0);

  useEffect(() => {
    setMenuRotation(show ? 90 : 0);
  }, [show]);

  const buttonAnimation = useSpring({
    transform: `rotate(${menuRotation}deg)`,
  });
  return (
    <div className="relative">
      <animated.button
        style={buttonAnimation}
        className="lg:hidden"
        onClick={() => {
          setShowMenu((prev) => !prev);
          onMenuToggle(showMenu);
        }}
      >
        <img src={menu_ic} alt="Menu" />
      </animated.button>
    </div>
  );
};

export default Menu;
