function createMotivationalSpeec(wallpaperObj){
    const positonTable = {
            // align-items-XXX
            "top": "start",
            "bottom": "end",

            // justify-content-XXX
            "left": "start",
            "right": "end",
        };

    // bg-img
    let div = document.createElement("div");
    div.style = "background-image: url(" + wallpaperObj.url + ")";
    div.classList.add("bg-img", "d-flex", 
                        "align-items-" + positonTable[wallpaperObj.alignVal],       
                        "justify-content-" + positonTable[wallpaperObj.justifyVal],
                        );

    // message
    let message = document.createElement("h2");
    message.classList.add("message", "d-flex", "col-9");
    message.style.color = wallpaperObj.colorCode;
    message.innerHTML = wallpaperObj.text;
    div.append(message);

    wallpaperObj.domObj.append(div);
}

class motivationalSpeechWallpaper{
    constructor(text, colorCode, url, alignVal, justifyVal, domObj){
        this.text = text;
        this.colorCode = "#" + colorCode;
        this.url = url;
        this.alignVal = alignVal;
        this.justifyVal = justifyVal;
        this.domObj = domObj;
    }
}

// 関数呼び出しの例
let domObj = document.getElementById("target");

let wallpaper1 = new motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "bottom", "right", domObj);

let wallpaper2 = new motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);

let wallpaper3 = new motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);

// 生成したクラスを配列に代入
let wallpapers = [wallpaper1, wallpaper2, wallpaper3];

// 関数で生成
wallpapers.map(wallpaper => createMotivationalSpeec(wallpaper));