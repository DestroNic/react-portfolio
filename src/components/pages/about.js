import React from "react";
import ProfilePic from "../../../static/assets/images/ProfilePic.jpg"

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
      style={{
        background: "url(" + ProfilePic + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula
        purus, bibendum vel scelerisque venenatis, iaculis vel felis. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In commodo ante et
        hendrerit placerat. Maecenas sagittis tincidunt enim, quis posuere arcu
        vehicula et. Aliquam molestie auctor ligula, ut sagittis lacus mollis
        at. Vestibulum sagittis nibh quis nibh placerat, porta vestibulum risus
        mattis. Nullam non mi velit. Proin porta bibendum pharetra. Sed et dolor
        pretium, blandit diam sit amet, ultrices tellus. Duis at tortor quis
        erat iaculis tristique. Duis sit amet volutpat eros, feugiat commodo
        diam. In eget purus accumsan, luctus nisl semper, sollicitudin nisl.
        Integer quis leo ut turpis scelerisque facilisis. Pellentesque vitae
        malesuada leo. Nunc quis quam ac metus auctor auctor. Donec eget elit ut
        turpis mollis congue sit amet vitae leo. Vivamus faucibus laoreet
        lacinia. Integer tristique dictum orci, consequat fringilla libero
        eleifend nec. Donec eget eros ac elit efficitur cursus at in turpis.
        Pellentesque ut mauris vitae dolor pretium vestibulum. Nulla ut leo sed
        nisl interdum pretium eu vitae nisl. Praesent ultricies fringilla elit
        vel volutpat. Proin diam dui, fringilla nec neque ac, imperdiet
        tincidunt mauris. Suspendisse nec dolor at felis fringilla lacinia.
        Suspendisse eu sagittis elit. Suspendisse sed leo maximus nibh blandit
        viverra. In et tortor at risus pellentesque aliquet quis ac augue. Donec
        non tincidunt velit. Donec viverra pulvinar cursus. Ut quis fermentum
        urna, accumsan elementum risus. In hac habitasse platea dictumst.
        Suspendisse vehicula nunc sed libero consectetur sollicitudin. Proin
        pharetra ligula vitae quam volutpat.
      </div>
    </div>
  );
}
