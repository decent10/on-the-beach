export type HotelItemType = {
    id:number;
    title: string;
    image: string;
    location: string;
    rating: number;

    description: string;
    cta: {
        title: string;
        amount: number;
    };
   
}
export enum SortColumn {
    ALPHABETICALLY = "alphabetically",
    PRICE = "price",
    RATING = "rating"
}