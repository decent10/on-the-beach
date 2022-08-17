
// crate function which take list of items and column as parameters and  sort them by column

import { HotelItemType, SortColumn } from "./types";


 
  export const sortByColumn = (list:HotelItemType[], column:string) => {
    console.log(list, column,SortColumn);
    // @ts-ignore
    return list.sort((a,b) =>  {
      if (column == SortColumn.ALPHABETICALLY) {
        return a.title.localeCompare(b.title);
      } else if (column == SortColumn.PRICE) {
        return a.cta.amount - b.cta.amount;
      } else if (column == SortColumn.RATING) {
        return a.rating - b.rating;
      }
    });
  };
