function scrapeData() {
    let titleElement = document.querySelector("ep-title");
    let timestampElements = document.getElementsByClassName("vds-time");
    let imageElement = document.querySelector("_image_1r2hh_1 _coverImg_2wrhc_89")
    let videoElement = document.querySelector("video");

    if (!titleElement || !numberElement || !videoElement) {
        return null
    }

    return {
        title: titleElement,
        current: timestampElements[0].getAttribute("data-type"),
        duration: timestampElements[1].getAttribute("data-type"),
        cover: imageElement,
        paused: videoElement.paused
    };
}

