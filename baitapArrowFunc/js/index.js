

document.querySelector(".pallet").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.pallet").classList.add("active")
  document.querySelector(".house").classList.add("pallet")
  document.querySelector(".house").classList.remove(
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar");

};
document.querySelector(".viridian").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.viridian").classList.add("active")
  document.querySelector(".house").classList.add("viridian")
  document.querySelector(".house").classList.remove("pallet",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar");
};
document.querySelector(".pewter").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.pewter").classList.add("active")
  document.querySelector(".house").classList.add("pewter")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar");
};
document.querySelector(".cerulean").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.cerulean").classList.add("active")
  document.querySelector(".house").classList.add("cerulean")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar");
};
document.querySelector(".vermillion").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.vermillion").classList.add("active")
  document.querySelector(".house").classList.add("vermillion")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "cerulean",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar");
};
document.querySelector(".lavender").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.lavender").classList.add("active")
  document.querySelector(".house").classList.add("lavender")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar");
};
document.querySelector(".celadon").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.celadon").classList.add("active")
  document.querySelector(".house").classList.add("celadon")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "saffron",
  "fuschia",
  "cinnabar");
};
document.querySelector(".saffron").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.saffron").classList.add("active")
  document.querySelector(".house").classList.add("saffron")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "fuschia",
  "cinnabar");
};
document.querySelector(".fuschia").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.fuschia").classList.add("active")
  document.querySelector(".house").classList.add("fuschia")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "cinnabar");
};
document.querySelector(".cinnabar").onclick = () => {
  document.querySelector(".color-button").classList.remove("active")
  document.querySelector(".color-button.cinnabar").classList.add("active")
  document.querySelector(".house").classList.add("cinnabar")
  document.querySelector(".house").classList.remove("pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia");
};