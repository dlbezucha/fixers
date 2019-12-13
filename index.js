const container = document.querySelector(".scroller");
const scenes = document.querySelectorAll(".scene");
const images = document.querySelectorAll(".photo");

const scroller = new window.Scroller({
    container: container,
    scenes: scenes
});

scroller.on("scene:enter", d => {
    images[d.index].classList.add("active");
    if (images[d.index].classList.contains("photo-video")) {
        let video = images[d.index].getElementsByTagName("video")[0]
        video.play();
    }
});

scroller.on("scene:exit", d => {
    if (d.index != 0 && !d.isScrollingDown) {
        images[d.index].classList.remove("active");
    }
    //console.log(images[d.index].classList)
    if (images[d.index].classList.contains("photo-video")) {
        let video = images[d.index].getElementsByTagName("video")[0]
        video.pause();
    }
    //if (images) {}
});

window.addEventListener("load", event => {
    images[0].classList.add("active");
});

// starts up the IntersectionObserver
scroller.init();