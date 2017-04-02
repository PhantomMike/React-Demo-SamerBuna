//console.log("Hello react!");
const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");
//const date = new Date();

//console.log(date);

const render = () => {

// This is what I typed in, but I had to use the single quotes from the commented out
// line below which was from the sample itself. Couldn't use single quote (I guess
// it is the apostrophe) from keyboard, weird!  Need to use the single quote generated
// by the tilde key!!
jsContainer.innerHTML = `<div class="demo">Hello JS<input /><p>${new Date()}</p></div>`;
/*jsContainer.innerHTML = `
<div class="demo">
Hello JS<input />
<p>${new Date()}</p></div>`;

*/
ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React",
      React.createElement("input"),
      React.createElement("p", null, new Date().toString())
    ),
    reactContainer
  );

}

setInterval(render, 1000);
