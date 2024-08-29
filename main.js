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

        // POLISH
        // ja -> my
        .replace(generateRegex("Ja"), "My")
        .replace(generateRegex("JA"), "MY")
        .replace(generateRegex("ja"), "my")

        // jestem -> jesteśmy
        .replace(generateRegex("Jestem"), "Jesteśmy")
        .replace(generateRegex("JESTEM"), "JESTEŚMY")
        .replace(generateRegex("jestem"), "jesteśmy")

        // mam -> mamy
        .replace(generateRegex("Mam"), "Mamy")
        .replace(generateRegex("MAM"), "MAMY")
        .replace(generateRegex("mam"), "mamy")

        // mnie -> nas
        .replace(generateRegex("Mnie"), "Nas")
        .replace(generateRegex("MNIE"), "NAS")
        .replace(generateRegex("mnie"), "nas")

        // mój -> nasz
        .replace(generateRegex("Mój"), "Nasz")
        .replace(generateRegex("MÓJ"), "NASZ")
        .replace(generateRegex("mój"), "nasz")

        // moja -> nasza
        .replace(generateRegex("Moja"), "Nasza")
        .replace(generateRegex("MOJA"), "NASZA")
        .replace(generateRegex("moja"), "nasza")

        // moje -> nasze
        .replace(generateRegex("Moje"), "Nasze")
        .replace(generateRegex("MOJE"), "NASZE")
        .replace(generateRegex("moje"), "nasze")

        // moje -> nasze (when "moje" is masculine)
        .replace(generateRegex("Mojego"), "Naszego")
        .replace(generateRegex("MOJEGO"), "NASZEGO")
        .replace(generateRegex("mojego"), "naszego")

        // mnie -> nas (in accusative case)
        .replace(generateRegex("Mnie"), "Nas")
        .replace(generateRegex("MNIE"), "NAS")
        .replace(generateRegex("mnie"), "nas")

        // dla mnie -> dla nas (for me -> for us)
        .replace(generateRegex("Dla mnie"), "Dla nas")
        .replace(generateRegex("DLA MNIE"), "DLA NAS")
        .replace(generateRegex("dla mnie"), "dla nas")

        // moim -> naszym
        .replace(generateRegex("Moim"), "Naszym")
        .replace(generateRegex("MOIM"), "NASZYM")
        .replace(generateRegex("moim"), "naszym")

        // będę -> będziemy
        .replace(generateRegex("Będę"), "Będziemy")
        .replace(generateRegex("BĘDĘ"), "BĘDZIEMY")
        .replace(generateRegex("będę"), "będziemy")

        // bym -> byśmy
        .replace(generateRegex("Bym"), "Byśmy")
        .replace(generateRegex("BYM"), "BYŚMY")
        .replace(generateRegex("bym"), "byśmy")

        // muszę -> musimy
        .replace(generateRegex("Muszę"), "Musimy")
        .replace(generateRegex("MUSZĘ"), "MUSIMY")
        .replace(generateRegex("muszę"), "musimy")

        // potrzebuję -> potrzebujemy
        .replace(generateRegex("Potrzebuję"), "Potrzebujemy")
        .replace(generateRegex("POTRZEBUJĘ"), "POTRZEBUJEMY")
        .replace(generateRegex("potrzebuję"), "potrzebujemy");
    
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