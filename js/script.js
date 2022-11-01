window.onload = function () {
  fetch("http://myjson.dit.upm.es/api/bins/9jju")
  //fetch('../json/myjson.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let postDiv = document.querySelector(".posts");
      for (let i = 0; i < json.length; i++) {
        let authorImage = document.createElement('img');
        authorImage.src = "../img/emptyProfile.png";
        authorImage.width = 35;
        authorImage.height = 35;
        authorImage.classList.toggle('author');

        let date = document.createElement("p");
        date.innerHTML = json[i].date;
        date.classList.toggle("date");

        let title = document.createElement('p');
        title.innerHTML = json[i].title;
        title.classList.toggle('title');

        let topDiv = document.createElement("div");
        topDiv.classList.toggle('top_div');
        topDiv.appendChild(authorImage);
        topDiv.appendChild(title);
        topDiv.appendChild(date);


        let image = document.createElement("img");
        image.src = json[i].image;
        image.width = 75;
        image.height = 75;

        let imgDiv = document.createElement("div");
        imgDiv.appendChild(image);

        let textDiv = document.createElement("div");
        textDiv.innerHTML = json[i].body;

        let contentDiv = document.createElement("div");
        contentDiv.classList.toggle('content');
        contentDiv.appendChild(textDiv);
        contentDiv.appendChild(imgDiv);

        let like = document.createElement("img");
        like.classList.toggle('float_left');
        like.src = "../img/like.png";
        like.width = 30;
        like.height = 30;

        let dislike = document.createElement("img");
        dislike.classList.toggle('float_left');
        dislike.src = "../img/dislike.png";
        dislike.width = 30;
        dislike.height = 30;


        let bottomDiv = document.createElement("div");
        bottomDiv.classList.toggle('bottom_div');
        bottomDiv.appendChild(like);
        bottomDiv.appendChild(dislike);

        let postBody = document.createElement("div");
        postBody.classList.toggle('post')
        postBody.appendChild(topDiv);
        postBody.appendChild(contentDiv);
        postBody.appendChild(bottomDiv);

        postDiv.appendChild(postBody);
      }
    })
    .catch((err) => {
      let divElement = document.createElement("div");
      divElement.className = "post";
      divElement.innerHTML = err;
      document.body.appendChild(divElement);
    });
  /**
        .finally(function () {
            var htmlElement = document.createElement("footer");
            htmlElement.innerHTML = new Date().toLocaleDateString()
            document.body.appendChild(htmlElement)
        })
         */
};

function showInfo() {
    document.getElementById("dropDown").classList.toggle("show");
} 

function hideInfo() {
  var myDropdown = document.getElementById("dropDown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
}

window.onclick = function(e) {
  if (!e.target.matches('.profilePic')) {
    hideInfo();
  }
}