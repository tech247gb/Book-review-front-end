export interface Book {
    id?: number;
    title: string;
    author: string;
    review: string;
    coverImage: string;
    rating: number;
    featured?:boolean;
    imageUrl?:string;
}
