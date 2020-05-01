const mangas = {
    "Kimestu No Yaiba": {
        chapter: "200",
        author: "Haru Yakuse"
    },
    "Bleach": {
        chapter: "623",
        author: "Ryuma"
    },
    "Detecctive Conan": {
        chapter: "5001",
        author: "Aoyama"
    }
};

module.exports.read = function (titleName) {
    return mangas[titleName];
}

module.exports.create = function (titleName, chapter, author) {
    if (mangas[titleName]) {
        return 'Error';
    } else {
        mangas[titleName] = {
            chapter: chapter,
            author: author
        };
        return 'Success';
    }
}