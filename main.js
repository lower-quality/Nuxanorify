function getThumbnailLink() {
    // there is 3x chance for the first thumbnail
    const thumbnails = 9
    const thumbnail = Math.max(
        Math.floor(Math.random() * (thumbnails + 2)) - 1, 1
    )

    return `https://raw.githubusercontent.com/legitna/nux/main/${thumbnail}.png`
}

function addNux(thumbnailElement) {
    if (thumbnailElement.classList.contains("nuxified")) {
        return
    }

    const nuxImage = document.createElement("img")
    nuxImage.setAttribute("src", getThumbnailLink())
    nuxImage.style.position = "absolute"
    nuxImage.style.width = "100%"
    nuxImage.style.left = 0
    nuxImage.style.bottom = 0
    nuxImage.style.objectFit = "cover"

    thumbnailElement.append(nuxImage)
    thumbnailElement.classList.add("nuxified")
}

function generateRegex(r) {
    r = r.replace("'", "['’]")
    return new RegExp(`(^${r}|(?<=\\s)${r})(?=\\s)`)
}

function nuxifyTitle(title) {
    const newTitle = title
        // I -> We
        .replace(generateRegex("I"), "WE")
        .replace(generateRegex("i"), "we")

        // I'm -> We're
        .replace(generateRegex("I'm"), "We're")
        .replace(generateRegex("I'M"), "WE'RE")
        .replace(generateRegex("i'm"), "we're")
        .replace(generateRegex("i'M"), "we'RE")

        // I've -> We're
        .replace(generateRegex("I've"), "We've")
        .replace(generateRegex("I'VE"), "WE'VE")
        .replace(generateRegex("i've"), "we've")
        .replace(generateRegex("i'VE"), "we'VE")

        // Me -> Us
        .replace(generateRegex("Me"), "Us")
        .replace(generateRegex("ME"), "US")
        .replace(generateRegex("mE"), "uS")
        .replace(generateRegex("me"), "us")

        // My -> Our
        .replace(generateRegex("My"), "Our")
        .replace(generateRegex("MY"), "OUR")
        .replace(generateRegex("mY"), "our")
        .replace(generateRegex("my"), "our")

        // My -> Our
        .replace(generateRegex("Your"), "Our")
        .replace(generateRegex("YOUR"), "OUR")
        .replace(generateRegex("yOUR"), "oUR")
        .replace(generateRegex("your"), "our")

        // Mine -> Ours
        .replace(generateRegex("Mine"), "Ours")
        .replace(generateRegex("MINE"), "OURS")
        .replace(generateRegex("mine"), "ours")

        // I'll -> We'll
        .replace(generateRegex("I'll"), "We'll")
        .replace(generateRegex("I'LL"), "WE'LL")
        .replace(generateRegex("i'll"), "we'll")

        // I'd -> We'd
        .replace(generateRegex("I'd"), "We'd")
        .replace(generateRegex("I'D"), "WE'D")
        .replace(generateRegex("i'd"), "we'd")

        // am -> are
        .replace(generateRegex("am"), "are")
        .replace(generateRegex("AM"), "ARE")
        .replace(generateRegex("Am"), "Are")

    return newTitle
}

function main() {
    Array.from(
        document.querySelectorAll("yt-image.ytd-thumbnail:has(img), yt-image.ytd-playlist-video-thumbnail-renderer:has(img)")
    ).forEach(addNux)

    Array.from(
        document.querySelectorAll(
            "yt-formatted-string#video-title, span#video-title, a#video-title, " +
            "span.cbCustomTitle, yt-formatted-string.ytd-watch-metadata, " +
            "title" + 
            "yt-formatted-string.promo-body-text" // easter egg
        )
    ).forEach(titleElement => {
        if (titleElement.classList.contains("nuxified")) {
            return
        }

        titleElement.innerHTML = nuxifyTitle(titleElement.innerText)
        titleElement.classList.add("nuxified")
    })
}

setInterval(main, 1000)