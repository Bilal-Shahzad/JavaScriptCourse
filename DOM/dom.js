// dom 
// programming interface for web documents
// represents the page so that programs can change the document structure style and content

// syntax
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
// DOM is not a programming language, but without it  the JavaScript language wouldn't have any model or notion of web pages

// Accessing the DOM
// use script 
// console.log is an example

{/* <body onload="console.log('Welcome to my home page!');">
  …
</body>

<html lang="en">
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = () => {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Big Head!");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html> */}

// this creates a new h1 adds text and then adds it to the tree 
