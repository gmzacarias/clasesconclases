// las clases siempre se llaman en singular,salvo excepciones
class BandaAlbum {
    title : string;
    songs : string[];
    // title : string; aca solo se define un string
    // songs : string[]; aca se define un array de strings
constructor (title ,songs : string[]){
    this.title=title;
    this.songs=songs;
}
}


class banda {
members : string[];
albums:any[];
constructor(members:string[],albums:BandaAlbum[])
{
    this.members = members;
    this.albums = albums;
}

}



//
function main (){
// opcion 1
// const unAlbum = new BandaAlbum("album de rock", [])
// opcion 2
const unAlbum = {
    title:"detonador de sueños",
    songs :["hiela sangre","detonador de sueños","la razon que te demora"],
}
const unAlbum2 = {
    title : "nonpalidece",
songs : ["dangerman","espejos","en el aire"],
}
const unAlbum3 = {
    title : "los cafres-25 años",
    songs: ["tus ojos", "velas y sahumerios", "bastara"],
}

const unaBanda = new banda (["gaston"], [unAlbum,unAlbum2,unAlbum3])
// console.log (unaBanda.members);
console.log(unaBanda.albums);

}
main();
