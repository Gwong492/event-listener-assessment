//import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
const allBtns = document.querySelectorAll(".expand_button");

function expandArticleBody() {
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const parentArticle = event.target;
      console.log(parentArticle.innerText);
      if (parentArticle.innerText === ">") {
        parentArticle.innerHTML = "v";
      } else {
        parentArticle.innerHTML = ">";
      }
    });
  });
};

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // your code here
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
