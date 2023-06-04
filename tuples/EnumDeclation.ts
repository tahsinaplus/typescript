enum PrintMedia{
    Newspaper = "Daily Star",
    Newsletter = "Daily Newyork Paper",
    Magazine = "Forbes",
    Book = "TypeScript Programming"
}

function getMedia(mediaName: string): string {
    if(mediaName == PrintMedia.Book)
        return "It is book";
    else if (mediaName == PrintMedia.Newsletter || mediaName == PrintMedia.Newspaper){
        return "It is newspaper";
    }
    else{
        return "others";
    }
}

console.log(PrintMedia.Book);
console.log(PrintMedia["Book"]);
console.log(getMedia("Forbes"));
console.log(getMedia("Daily Star"));