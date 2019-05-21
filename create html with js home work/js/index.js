var input = document.getElementById("num");  // inputdan gelen deyer

var button = document.querySelector(".button"); // button alinmasi htmlden

var content = document.querySelector(".container");

var ul = document.querySelector("ul.item");

var count = 1;



button.addEventListener("click", function () {

    if (!isNaN(Number(input.value))) {

        for (var index = 0; index < input.value; index++) {

            var li = document.createElement("li");

            li.classList.add("list");

            li.innerHTML = count;

            ul.appendChild(li);


            document.getElementById("num").addEventListener("change", function () {
                for (var i = 0; i < ul.childElementCount; i++) {
                    ul.removeChild(ul.children[i]);
                }

                count = 1;
            })

            count++;
        }


    } else {

        var p = document.createElement("p");

        p.innerText = "Zehmet olmasa eded daxil edin";

        p.classList.add("warning");

        content.appendChild(p);
        
        document.getElementById("num").addEventListener("change", function () {
            p.remove();
        })


    }


})


