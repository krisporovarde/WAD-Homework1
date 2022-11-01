window.onload = function() {



    fetch('http://myjson.dit.upm.es/api/bins/acve')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                let divElement = document.createElement("div");
                let title = document.createElement("h3");
                let postDiv = document.querySelector(".posts");
                let paragraphElement = document.createElement("p");

                divElement.className = "post color";

                title.innerHTML = json[i].title;
                paragraphElement.innerHTML = json[i].body;

                divElement.appendChild(title);
                divElement.appendChild(paragraphElement);

                postDiv.appendChild(divElement)
            }

        }).catch(err =>{
        let divElement = document.createElement("div");
        divElement.className = "post";
        divElement.innerHTML = err;
        document.body.appendChild(divElement)
    })
        /**
        .finally(function () {
            var htmlElement = document.createElement("footer");
            htmlElement.innerHTML = new Date().toLocaleDateString()
            document.body.appendChild(htmlElement)
        })
         */



}