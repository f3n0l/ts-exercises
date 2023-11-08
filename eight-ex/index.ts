type Artist = {
    id: number;
    name: string;
};

type Album = {
    id: number;
    artistName: string;
    name: string;
};

function extractName(obj: { name: string }): string {
    return obj.name;
}

function getAlbumsByArtistName(artistName: string, albums: Album[]): Album[] {
    return albums.filter((album) => album.artistName === artistName);
}

function getArtistAndAlbumsByArtistName(
    artistName: string,
    artists: Artist[],
    albums: Album[]
): (Artist | Album)[] {
    const artist = artists.find((artist) => artist.name === artistName);
    const artistAlbums = getAlbumsByArtistName(artistName, albums);
    return artist ? [artist, ...artistAlbums] : [];
}

function getArtistWithAlbumNames(
    artistAndAlbums: (Artist | Album)[]
): (Artist & { albumNames: string[] }) | null {
    if (!artistAndAlbums.length || !("name" in artistAndAlbums[0])) return null;

    const artist = artistAndAlbums[0] as Artist;
    const albumNames = artistAndAlbums
        .slice(1)
        .filter((item): item is Album => "artistName" in item)
        .map((album) => album.name);

    return { ...artist, albumNames };
}

const artists: Artist[] = [
    { id: 1, name: "The Beatles" },
    { id: 2, name: "Elvis Presley" },
];

const albums: Album[] = [
    { id: 1, artistName: "The Beatles", name: "Abbey Road" },
    { id: 2, artistName: "The Beatles", name: "Let It Be" },
    { id: 3, artistName: "Elvis Presley", name: "Blue Hawaii" },
];

console.log(extractName(artists[0]));

console.log(getAlbumsByArtistName("The Beatles", albums));

const artistAndAlbums = getArtistAndAlbumsByArtistName(
    "The Beatles",
    artists,
    albums
);
console.log(artistAndAlbums);

console.log(getArtistWithAlbumNames(artistAndAlbums));
