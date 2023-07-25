const isUsed = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
};

const lis = document.querySelectorAll(".keyboard-ul li");

lis.forEach(function (li) {
    li.addEventListener("click", function (e) {
        const keyPressed = e.target.textContent;
        if (isUsed.keyPressed) {
        } else {
            isUsed[keyPressed] = true;
            e.target.classList.add("clicked");
            console.log(e.target.classList);
        }
    });
});

window.addEventListener("keydown", function (e) {
    const keyPressed = e.key;
    if (isUsed[e.key] === undefined) {
        return;
    }
    if (isUsed[e.key]) {
        console.log("already clicked");
    } else {
        console.log(isUsed);
        isUsed[keyPressed] = true;
        lis.forEach(function (li) {
            if (li.textContent === keyPressed.toUpperCase()) {
                console.log(li);
                li.classList.add("clicked");
            }
        });
    }
});
