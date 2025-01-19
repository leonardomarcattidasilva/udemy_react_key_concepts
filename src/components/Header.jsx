import React, { memo } from "react";

const Header = memo(function Header({ src }) {
   return <header>
      <img src={src} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
   </header>
})

export default Header;