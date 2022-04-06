// app instance
let app = document.getElementById("app");

//Declaring app posts
let allPosts;
let user;
//
async function getPosts() {
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    allPosts = posts.data.slice(0, 10);
    displayPosts();
}

async function getUser() {
    let { data } = await axios.get("https://randomuser.me/api/?results=10")
    user = data.results;
    console.log(user);
}

getUser();

function displayPosts() {
    allPosts.forEach((post, index) => {
        
        
        //Creating main Div
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("mainDiv","my-5", "shadow", "rounded-lg", "mx-auto");
        let mainRow = document.createElement("div");
        mainRow.classList.add("row", "mb-0", "p-3");


        // Creating col element
        let colElement = document.createElement("div");
        
        // Creating flexed div
        let flexedDiv = document.createElement("div");

        //Creating flexedDiv img
        let flexedDivImg = document.createElement("img");

        //Creating flexedDiv img
        let flexedDivSpan = document.createElement("span");
        flexedDivSpan.textContent = user[index].name.first;

        //Creating flexedDiv img
        let flexedDivIcon = document.createElement("i");
        flexedDivIcon.classList.add("fa", "fa-star");

        //Creating ellipses div
        let ellipsesDiv = document.createElement("div");
        ellipsesDiv.classList.add("col-md-5", "text-end", "offset-md-2");

        //Creating elipses icon
        let ellipsesDivIcon = document.createElement("i");
        ellipsesDivIcon.classList.add("fa", "fa-ellipsis-h");

        ellipsesDiv.appendChild(ellipsesDivIcon);

        //Adding image source and styles to flexedDivImg
        flexedDivImg.setAttribute(
            "src",
            user[index].picture.large
        )
        flexedDivImg.classList.add("flexedDivImage");

        //creating post text
        let postTextDiv = document.createElement("div");
        postTextDiv.classList.add("mb-3", "p-3");
        let postText = document.createElement("p");
        let postTextTwo = document.createElement("p");
        postText.textContent = user[index].email
        postTextTwo.textContent = user[index].gender.toUpperCase();
        postTextDiv.appendChild(postText);
        postTextDiv.appendChild(postTextTwo);

        //Creating postImageContainer
        let postImageContainer = document.createElement("div");
        //Creating postImage
        let postImage = document.createElement('img');
        postImage.setAttribute(
            "src",
            user[index].picture.large
        );
        postImage.classList.add("w-100");

        //appending to post image container

        //creating post text container
        let postTextContainer = document.createElement("div");
        postTextContainer.classList.add("bg-light", "p-3");

        //creating post text content
        let postTextContentOne = document.createElement("p");
        postTextContentOne.classList.add("small", "mb-0");

        postTextContentOne.textContent = "ARSENAL.COM";
        let postTextContentTwo = document.createElement("p");
        postTextContentTwo.classList.add("mb-0");
        postTextContentTwo.textContent = post.title;
        postTextContainer.appendChild(postTextContentOne);
        postTextContainer.appendChild(postTextContentTwo);



        // Adding classes to colElement
        colElement.classList.add("col-md-5", "align-items-center")
        // app.appendChild(colElement);

        

        // Adding classes to flexedDiv
        flexedDiv.classList.add("d-flex", "align-items-center")
        flexedDiv.style.gap = "1rem";

        //creating reactions  
        let reactionsContainer = document.createElement("div");
        reactionsContainer.classList.add(
            "d-flex",
            "p-3",
            "g-1",
            "justify-content-around",
            "border-top",
            "border-bottom"
        );

        // Creating empty div for commenting
        let commentDiv = document.createElement("div");
        let commentExtract = document.createElement("div");
        commentExtract.classList.add("p-3")

        let commentFlexedDiv = document.createElement("div");
        commentFlexedDiv.classList.add("d-flex");
        let commFlexedImage = document.createElement("img");
        commFlexedImage.classList.add("flexedDivImage", "me-2");
        commFlexedImage.setAttribute("src", user[index].picture.large);
        let commFlexedDefault = document.createElement("div");
        commFlexedDefault.classList.add("bg-light", "c-d-div", "px-3");
        commFlexedDefault.textContent = post.title;
        commentFlexedDiv.appendChild(commFlexedImage);
        commentFlexedDiv.appendChild(commFlexedDefault);
        // creating like and reply
        let commentLR = document.createElement("div");
        commentLR.classList.add("d-flex");
        let LRTextOne = document.createElement("button");
        LRTextOne.classList.add("like-down-btn");
        LRTextOne.textContent = "like";
        LRTextOne.onclick = function () {
            LRTextOne.classList.toggle("text-primary");
        }
        let LRTextTwo = document.createElement("button");
        LRTextTwo.classList.add("reply-down-btn");
        LRTextTwo.textContent = "Reply";
        LRTextTwo.setAttribute("data-bs-toggle", "modal");
        LRTextTwo.setAttribute("data-bs-target", "#exampleModal1")
        commentLR.appendChild(LRTextOne);
        commentLR.appendChild(LRTextTwo);

        // Creating personal comment
        let personalCommentDiv = document.createElement("div");
        personalCommentDiv.classList.add("d-flex", "comment-top");
        let personalImage = document.createElement("img");
        personalImage.setAttribute("src", "user1.png");
        personalImage.classList.add("flexedDivImage", "me-2");
        let personalComment = document.createElement("button");
        let commentResultArray = [];
        let postBtn = document.getElementById("activeBtn");
        postBtn.addEventListener('click', () => {
            // let commentResult = document.getElementById("appPost");
            let commentResult = document.createElement("div");
            commentResult.setAttribute("id", "appPost");
            let commentResultInput = document.getElementById("comments");
            let commentResultDiv = document.createElement("div");
            commentResultDiv.textContent = commentResultInput.value;
            commentResult.appendChild(commentResultDiv);
            commentResultArray.push(commentResult);
        });
        personalComment.classList.add("bg-light", "comment-down-btn");
        personalComment.textContent = "Write a comment...";
        personalComment.setAttribute("data-bs-toggle", "modal");
        personalComment.setAttribute("data-bs-target", "#exampleModal1");
        personalCommentDiv.appendChild(personalImage);
        personalCommentDiv.appendChild(personalComment);


        // commentBox.appendChild(commentShow);
        commentExtract.appendChild(commentFlexedDiv);
        commentExtract.appendChild(commentLR);
        commentExtract.appendChild(personalCommentDiv);
        commentDiv.appendChild(commentExtract);


        let x = 1;
        while(x <= 3) {
            let iconsArray = ["fa-thumbs-up", "fa-comment", "fa-share"]
            let iconsWordArray = ["Like", "Comment", "Share"]
            let div = document.createElement("div");
            let iconTag = document.createElement("i");
            let iconFlex = document.createElement("p");
            iconTag.classList.add("fa", iconsArray[x - 1]);
            iconFlex.textContent = iconsWordArray[x - 1];
            iconTag.classList.add("me-1");
            div.classList.add("d-flex");
            iconTag.onclick = function (e) {
                if (e.target.classList.contains("fa-thumbs-up")) {
                    e.target.classList.toggle("text-primary");
                }
                if (e.target.classList.contains("fa-comment")) {
                    e.target.setAttribute("data-bs-toggle", "modal");
                    e.target.setAttribute("data-bs-target", "#exampleModal1");
                }
                if (e.target.classList.contains("fa-share")) {
                    e.target.setAttribute("data-bs-toggle", "modal");
                    e.target.setAttribute("data-bs-target", "#exampleModal2");
                }
            }

            div.appendChild(iconTag);
            div.appendChild(iconFlex);
            console.log(div);
            reactionsContainer.appendChild(div);
            x++;
        }

        //appending to postimage container
        postImageContainer.appendChild(postImage);
        postImageContainer.appendChild(postTextContainer);
        postImageContainer.appendChild(reactionsContainer);

        //Adding flexedDivImg to flexedDiv
        flexedDiv.appendChild(flexedDivImg);
        flexedDiv.appendChild(flexedDivSpan);
        flexedDiv.appendChild(flexedDivIcon);



        //Adding children of colElement
        colElement.appendChild(flexedDiv);
        mainRow.appendChild(colElement);
        mainRow.appendChild(ellipsesDiv);



        mainDiv.appendChild(mainRow);
        mainDiv.appendChild(postTextDiv);
        mainDiv.appendChild(postImageContainer);
        mainDiv.appendChild(commentDiv);
        // mainRow.appendChild(colElement);
        // apending colElement to app instance
        app.appendChild(mainDiv);
    });
    
}

setInterval(() => {
    getPosts();
}, 5000);