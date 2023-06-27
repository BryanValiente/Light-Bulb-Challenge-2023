function lights() {
  let lightbulb = document.getElementById("image-style");
  if (lightbulb.src.match("https://i.ibb.co/FWKPQvG/pixil-frame-0-1.png")) {
    // lightbulb.src="https://i.ibb.co/8MyjCXp/Lightbulb-On.png";
    lightbulb.src = "https://i.ibb.co/PQJLVxH/pixil-frame-0.png";
    document.body.style.backgroundColor = "gold";
  } else {
    lightbulb.src = "https://i.ibb.co/FWKPQvG/pixil-frame-0-1.png";
    document.body.style.backgroundColor = "grey";
  }
  //  if (lightbulb.src.match("https://i.ibb.co/8MyjCXp/Lightbulb-On.png")){
  //       lightbulb.src="https://i.ibb.co/3hw3J9M/pixil-frame-0.png";
  // } else {
  //      lightbulb.src="https://i.ibb.co/FWKPQvG/pixil-frame-0-1.png";
  // }
  // lightbulbs = [
  //     lightbulb_dark = "https://i.ibb.co/kBDxRN0/Lightbulb-Off.png",
  //     lightbulb_lighter = "https://i.ibb.co/8MyjCXp/Lightbulb-On.png",
  //     lightbulb_lightest = "https://i.ibb.co/3hw3J9M/pixil-frame-0.png",
  // ]
  // for ( let i=0; i<4; 1++){
  //     lightbulb.src = lightbulbs[i++]
  // }
}
