class Cube {
    randomCube() {
        const btn = document.querySelector("button");
        const cube = document.querySelector(".cube");
        const score = document.querySelector(".score")
        btn.addEventListener("click", e => {
            e.preventDefault();
            let random = Math.ceil(Math.random()*6);
            switch(random) {
                case 1:
                    cube.style.animation = "cubAnim1 3s 0.2s linear forwards";
                    break;
                case 2:
                    cube.style.animation = "cubAnim2 3s 0.2s linear forwards";
                    break;
                case 3:
                    cube.style.animation = "cubAnim3 3s 0.2s linear forwards";
                    break;
                case 4:
                    cube.style.animation = "cubAnim4 3s 0.2s linear forwards";
                    break;
                case 5:
                    cube.style.animation = "cubAnim5 3s 0.2s linear forwards";
                    break;
                case 6:
                    cube.style.animation = "cubAnim6 3s 0.2s linear forwards";
                    break;
            }
            function innerScore() {
                score.innerText = random;
            };
            setTimeout(innerScore, 3500);
            
        })
    }
}

let cube = new Cube;
cube.randomCube();










