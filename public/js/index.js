const blogComment = document.querySelector(".blog-comment-count");
const blogIcon = document.querySelector("#arrow-icon");
const userCircle = document.querySelector('.user-circle');

const commentIcon = document.querySelector('.bxs-comment-detail');
const homeComments = document.querySelector('.home-comments');

var commentCount = 0;

function arrowSwitch() {
    blogComment.addEventListener("click",  function() {
        commentCount++;
        if (commentCount % 2 === 1) {
            blogIcon.setAttribute("class", "bx bx-chevron-up");
        } else if (commentCount % 2 === 0) {
            blogIcon.setAttribute("class", "bx bx-chevron-down");
        }
        
    });    
}

arrowSwitch();

console.log(commentIcon);
// for (let i = 0; i < commentIcon.length; i++) {
//     commentIcon[i].addEventListener("click", function() {
//         homeComments[i].setAttribute
//     })
// }

