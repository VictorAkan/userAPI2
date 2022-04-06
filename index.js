//app instance
let app = document.getElementById("app");

let allPosts;
//getPosts
async function getPosts() {
    let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    allPosts = posts.data.slice(0, 10);
    displayPosts();
}

//randomusers
async function getUsers() {
    let { data } = await axios.get("https://randomuser.me/api/?results=10");
    user = data.results;
    console.log(user);
}
// function display posts
function displayPosts() {
    allPosts.forEach((post, index) => {
        // Creating the main div
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("mainDiv", "my-5", "shadow", "rounded-lg", "mx-auto");
        let mainRow = document.createElement("row");
        mainRow.classList.add("row", "mb-0", "p-3");

        //Creating the flexedDiv
        let flexedDiv = document.createElement("div");
        flexedDiv.classList.add("d-flex", "align-items-center");
        flexedDiv.style.gap("1rem");
        // Creating flexed image
        let flexedDivImg = document.createElement("img");
        flexedDivImg.setAttribute("src",user[index].picture.medium);

        let colElement = document.createElement("div");
        colElement.classList.add("col-md-5", "align-items-center");

        //Creating flexed div icon
        let flexedDivIcon = document.createElement("i");
        flexedDivIcon.classList.add("fa", "fa-star");

        // Creating flexed div span
        let flexedDivSpan = document.createElement("span");
        flexedDivSpan.textContent = user[index].name.first;

        //Creating ellipses div
        let ellipsesDiv = document.createElement("div");
        ellipsesDiv.classList.add("col-md-5", "text-end", "offset-md-2"); 
        //Creating ellipses div icon
        let ellipsesDivIcon = document.createElement("i");
        ellipsesDivIcon.classList.add("fa", "fa-ellipsis-h");
        ellipsesDiv.appendChild(ellipsesDivIcon);


        //Creating the posttextdiv
        let postTextDiv = document.createElement("div");
        postTextDiv.classList.add("mb-3", "p-3");
        let postText = document.createElement("p");
        postText.textContent = user[index].email;
        let postTextTwo = document.createElement("p");
        postTextTwo.textContent = user[index].gender.toUpperCase();

        //appending children to postTextDiv
        postTextDiv.appendChild(postText);
        postTextDiv.appendChild(postTextTwo);

        // Creating the post image container
        let postImageContainer = document.createElement("div");
        // Creating the post image
        let postImage = document.createElement("img");
        postImage.setAttribute("src", user[index].picture.large);
        postImage.classList.add("w-100");
        let postTextContainer = document.createElement("div");
        postTextContainer.classList.add("bg-light", "p-3");
        let postTextContentOne = document.createElement("p");
        postTextContentOne.classList.add("small", "mb-0");
        postTextContentOne.textContent = "ARSENAL";
        let postTextContentTwo = document.createElement("p");
        postTextContentTwo.classList.add("mb-0");
        postTextContentTwo.textContent = "Loremipsum  dolor sit amet consectetur, adipisicing elit. Porro natus sed maiores enim quos? Aliquam, delectus officia?";
        postTextContainer.appendChild(postTextContentOne);
        postTextContainer.appendChild(postTextContentTwo);

        // Creating the reactions container
        let reactionsContainer = document.createElement("div");
        reactionsContainer.classList.add(
            "d-flex",
            "p-3",
            "g-1",
            "justify-content-around",
            "border-top"
        );

        // loop for the reaction icons
        let x = 0;
        while (x <= 3) {
            const iconsArray = ["fa-thumbs-up", "fa-comment", "fa-share"];
            let div = document.createElement("div");
            let iconTag = document.createElement("i");
            iconTag.classList.add("fa", iconsArray[x-1]);
            iconTag.onclick = function(e) {
                if (e.target.classList.contains("fa", "fa-thumbs-up")) {
                    e.target.classList.toggle("text-primary");
                };
                if (e.target.classList.contains("fa", "fa-comment")) {
                    e.target.classList.toggle("text-success");
                };
                if (e.target.classList.contains("fa", "fa-share")) {
                    e.target.classList.toggle("text-danger");
                };
            }

            div.appendChild(iconTag);
            reactionsContainer.appendChild(div);
            x++;
        }


        //adding children to postimagecontainer
        postImageContainer.appendChild(postImage);
        postImageContainer.appendChild(postTextContainer);
        postImageContainer.appendChild(reactionsContainer);



        // appending children to parent elements
        // appending children to flexedDiv
        flexedDiv.appendChild(flexedDivImg);
        flexedDiv.appendChild(flexedDivIcon);
        flexedDiv.appendChild(flexedDivSpan);

        //apending children to mainDiv
        colElement.appendChild(flexedDiv);
        mainDiv.appendChild(mainRow);
        mainDiv.appendChild(postTextDiv);
        mainDiv.appendChild(ellipsesDiv);
        // appending mainDiv generally
        app.appendChild(mainDiv);
        app.appendChild(colElement);
    });
}
setTimeout(() => {
    getUsers();
}, 5000);