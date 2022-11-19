let str = document.querySelector(".heading").innerHTML;
let chars = [...str];

const render = () => {
    let text = ""
  for (let i in chars) {
     text += `<span>${chars[i]}</span>`;
    }
    document.querySelector(".heading").innerHTML = text;
};
window.onload = ()=>{
    render()
}
