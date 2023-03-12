// class model for our faceSnap - no need exclamation here - btn don't need to be declared as it's gonna be the same all the time
export class FaceSnap {
    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createDate: Date,
                public snaps: number) {
    }
}
/*  title : string;
    description : string;
    imageUrl : string;
    createDate : Date;
    snaps : number;
    


    constructor(title: string, description: string, imageUrl: string, createDate: Date, snaps: number) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createDate = createDate;
        this.snaps = snaps;
    } */

/* there's a shorter way to create this class

we can replace it all by using the keyword (public) in the consctructor

*/


