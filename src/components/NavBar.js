import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const tags=links.map((link)=>{
    return(
      <a href={"#" + link} key={link}>{link}</a>
    )
  })

  return <nav>
          {tags}         
         </nav>;
}

export default NavBar;
