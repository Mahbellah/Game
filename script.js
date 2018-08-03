console.log("loaded ");
let plane = document.querySelector("#plane");
let player = document.querySelector("#player");
let monsters = document.querySelectorAll(".monster");
let monster1 = document.querySelector("#monster1");
let monster2 = document.querySelector("#monster2");
let monster3 = document.querySelector("#monster3");
let x1 = player.object3D.position.x;
let y1 = player.object3D.position.y;
let z1 = player.object3D.position.z;
let x2 = monster1.object3D.position.x;
let y2 = monster1.object3D.position.y;
let z2 = monster1.object3D.position.z;
let x3 = monster2.object3D.position.x;
let y3 = monster2.object3D.position.y;
let z3 = monster2.object3D.position.z;
let x4 = monster3.object3D.position.x;
let y4 = monster3.object3D.position.y;
let z4 = monster3.object3D.position.z;
let footSteps = document.querySelector('#footsteps')
let oof = document.querySelector("#oof")
let chest = document.querySelector("#open")
let sound = document.querySelector("#chest")
let staticSword = document.querySelector('#staticSword')
let Sword = document.querySelector('#Sword')
let swordon = 0
let swordraw = document.querySelector('#swordraw')
let swoosh = document.querySelector('#swoosh')
let wizard = document.querySelector("#wizard")
let laugh =document.querySelector("#laugh")


monsters.forEach(monster => {
    monster.addEventListener("click", e => {
        console.log("click!!!!!!!!!!!!!!!!")
        console.log(x4, y4, z4)
        if (dist(x1, y1, z1, x2, y2, z2) <= 10) {
            console.log(dist);
            console.log("Attack!");
            // monster.setAttribute("position", "1 -10 1");
        }
        else if (dist(x1, y1, z1, x3, y3, z3) <= 10) {
            console.log(dist);
            console.log("Attack!");
            monster.setAttribute("position", "1 -16 1");
        }
        else if (dist(x1, y1, z1, x4, y4, z4) <= 50) {
            console.log(dist);
            console.log("Attack!");
            monster.setAttribute("position", "1 -16 1");
        }
    });
});

player.addEventListener("collide", function(e) {
    console.log(e);
    if (e.detail.body.el.classList.contains("monster")) {
        console.log("Player has collided with a monster");
        oof.play();
        alert("You got killed by a monster, which means that you are dead! Try again!");
        player.setAttribute("position", "64 4 69");
        // player.setAttribute("universal-controls","acceleration:200");
        player.removeAttribute("wasd-controls")
        reload()
    }
});

console.log(player.getAttribute("position"));

setInterval(trackPos, 100);

function trackPos() {
    x1 = player.object3D.position.x;
    y1 = player.object3D.position.y;
    z1 = player.object3D.position.z;
    console.log(x1, y1, z1);
}


function dist(X, Y, Z, a, b, c) {
    let dist = Math.sqrt((X - a) ** 2 + (Y - b) ** 2 + (Z - c) ** 2);
    console.log(dist);
    return (dist);
}
window.addEventListener('keydown', footsteps, false);

function footsteps(e) {
    console.log(e.key);
    if (e.key == 'w' || e.key == 'a' || e.key == 's' || e.key == 'd')
        console.log('key pressed');
    footSteps.play();
}

player.addEventListener("collide", function(e) {
    console.log(e);
    if (e.detail.body.el == chest) {
        console.log("Player has collided with a chest");
        sound.play();
        player.setAttribute("wasd-controls", "acceleration:150");

    }
});

staticSword.addEventListener('collide', e => {
    console.log("Collided")
    swordon = 1
    console.log(e.detail.body.el)
    if (e.detail.body.el == player) {
        swordraw.play()
        player.innerHTML = `<a-cursor></a-cursor><a-entity static-body gblock="https://poly.google.com/view/aL08hxEjBS7" scale="2 2 2" position="0.6 -4 -1.4" id="Sword" rotation="0 -140 0"></a-entity>`
        staticSword.setAttribute("position", "0 -100 0")
    }
})

window.addEventListener('click', e => {
    if (swordon == 1) {
        swoosh.play()
        player.innerHTML = `<a-cursor></a-cursor><a-entity static-body gblock="https://poly.google.com/view/aL08hxEjBS7" scale="2 2 2" position="0.6 -3.5 -1.4" id="Sword" rotation="0 -140 0"><a-animation attribute="rotation" from="0 -140 0" to="90 -140 0" dur="1000"></a-animation><a-animation attribute="rotation" from="0 -140 0" to="90 -140 0" dur="1000" direction="reverse" begin="1000" look-controls ></a-animation></a-entity>`
        //         player.innerHTML += `<a-animation attribute="rotation" from="0 -140 0" to="-90 -140 0" dur="1000"></a-animation>`
    }

})



let notscary = document.querySelector("#notscary")
let HP = notscary.getAttribute('width')


monster1.addEventListener('click', e => {
    HP = HP - 1
    console.log(HP)
    notscary.setAttribute('width', `${HP}`)
    if (HP==0) {
        notscary.setAttribute("position","0 -30 0")

    }
})

player.addEventListener("collide", function(e) {
    console.log(e);
    if (e.detail.body.el==wizard) {
        laugh.play()
        console.log("Wizard!!!")
        alert ("Congratulagtions, you won. But you still can not leave this maze!")
    }
});
