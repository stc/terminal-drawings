createGallery = () => {
    let imgList = [
        { title: "Recursive Tree (a)", fileName: "./assets/imgs/previews/light/1.jpg", id: "img1", state: "reserved" },
        { title: "ASCII Tree (a)", fileName: "./assets/imgs/previews/light/2.jpg", id: "img2", state: "available" },
        { title: "Modulo (a)", fileName: "./assets/imgs/previews/light/3.jpg", id: "img3", state: "transferred" },

        { title: "Binary Tree (a)", fileName: "./assets/imgs/previews/light/4.jpg", id: "img4", state: "transferred" },
        { title: "Triangles (a)", fileName: "./assets/imgs/previews/light/5.jpg", id: "img5", state: "available" },
        { title: "File Tree (a)", fileName: "./assets/imgs/previews/light/6.jpg", id: "img6", state: "available" },

        { title: "Turtle (a)", fileName: "./assets/imgs/previews/light/7.jpg", id: "img7", state: "available" },
        { title: "Dutree (a)", fileName: "./assets/imgs/previews/light/8.jpg", id: "img8", state: "available" },
        { title: "List Sort (a)", fileName: "./assets/imgs/previews/light/9.jpg", id: "img9", state: "reserved" }
    ]

    addImageRow(imgList.slice(0, 3), document.getElementsByClassName('image-grid')[0])
    addImageRow(imgList.slice(3, 6), document.getElementsByClassName('image-grid')[1])
    addImageRow(imgList.slice(6, 9), document.getElementsByClassName('image-grid')[2])
}

addImageRow = (imgList, targetDIV) => {
    for (let i = 0; i < imgList.length; i++) {
        let title = imgList[i].title
        let id = imgList[i].id
        let state = imgList[i].state
        let fileName = imgList[i].fileName

        let container = document.createElement('div')
        container.style.width = 'auto'
        container.style.height = 'auto'
        container.style.border = 'none'

        let image = document.createElement('img')
        image.src = fileName
        image.id = id

        let txt = document.createElement('p')
        txt.innerHTML = `<i>${title}</i> <a onclick="changeImage('${id}')" style="text-decoration:none;">☼/☾</a><br>
        <p class="desc">${state}</p>`

        container.appendChild(image)
        container.appendChild(txt)
        targetDIV.appendChild(container)
    }
}

createGallery()

function changeImage(id) {
    const img = document.getElementById(id);
    const path = './assets/imgs/previews';
    img.src.includes('dark') ? img.src = path + '/light/' + split_at_index(id, 3) + '.jpg' : img.src = path + '/dark/' + split_at_index(id, 3) + '.jpg';
}
function split_at_index(value, index) {
    return value.substring(index);
}
document.querySelectorAll('img').forEach(img => {
    if (img.id) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            const fullScreen = document.createElement('div');
            fullScreen.style.position = 'fixed';
            fullScreen.style.top = '0';
            fullScreen.style.left = '0';
            fullScreen.style.width = '100vw';
            fullScreen.style.height = '100vh';
            fullScreen.style.background = 'rgba(0, 0, 0, 0.4)';
            fullScreen.style.display = 'flex';
            fullScreen.style.justifyContent = 'center';
            fullScreen.style.alignItems = 'center';
            fullScreen.style.zIndex = '9999';

            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';
            fullImg.style.cursor = 'zoom-out';

            fullScreen.appendChild(fullImg);
            document.body.appendChild(fullScreen);

            fullScreen.addEventListener('click', () => {
                document.body.removeChild(fullScreen);
            });
        });
    }
});