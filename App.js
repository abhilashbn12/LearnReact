// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World!";
// const hello = document.getElementById("root").appendChild(heading);
//         // hello.

import React from "react";
import ReactDOM from "react-dom/client"

// const heading1 = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key: "101"
//     },
//     "Heading1"
// );
// console.log(heading1);

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title",
//         key: "102"
//     },
//     "Heading2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//         hello: "World"
//     },
//     [heading1, heading2]
// );

// console.log(heading1);


// This is variable
// const title = (
//     <h1 id="tile">Welcome To React World</h1>
// );

// This is JavaScript function
const Title = () => (
    <h1 id="tile">Welcome To React World</h1>
);


const Heading = () => {
    return (
        <div>
            {/* {title} */}    {/* This is used to call variable */}
            <Title />
            <h1>This is React JS</h1>
            <h2>This is Abhilash</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);