var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "Daily Star";
    PrintMedia["Newsletter"] = "Daily Newyork Paper";
    PrintMedia["Magazine"] = "Forbes";
    PrintMedia["Book"] = "TypeScript Programming";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName == PrintMedia.Book)
        return "It is book";
    else if (mediaName == PrintMedia.Newsletter || mediaName == PrintMedia.Newspaper) {
        return "It is newspaper";
    }
    else {
        return "others";
    }
}
console.log(PrintMedia.Book);
console.log(PrintMedia["Book"]);
console.log(getMedia("Forbes"));
console.log(getMedia("Daily Star"));
