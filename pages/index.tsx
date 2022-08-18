import React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HotelItem from "../components/HotelItem/HotelItem";
import { HotelItemType } from "../types";
import { sortByColumn } from "../utils";
import { hotelItemList, sortItemList } from "../data";
import SortMenu from "../components/SortMenu/SortMenu";

const Home: NextPage = () => {
  const [hotelItems, setHotelItems] =
    React.useState<HotelItemType[]>(hotelItemList);
  const [sortItems, setSortItems] = React.useState(sortItemList);
  const [selectSortItem, setSelectSortItem] = React.useState<number>(
    sortItemList[0].id
  );

  const onSortItemClick = (id: number) => {
    setSelectSortItem(id);
    const sortedResult = sortByColumn(hotelItems, sortItems[id - 1].label);
    setHotelItems(sortedResult);
  };

  return (
    <div className="container">
      <Head>
        <title>On the Beach</title>
        <meta
          name="description"
          content="Everything’s Better On the Beach – Find & Book Cheap Holiday Deals "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="grid">
          <div className={`${styles.card} `}>
            <SortMenu
              sortItems={sortItems}
              onClick={onSortItemClick}
              selectedItemIndex={selectSortItem}
            />
          </div>
          <div className={`${styles.card} span-2`}>
            {hotelItems.map((hotelItem, index) => (
              <motion.div
                key={hotelItem.id}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 * index }}
              >
                <HotelItem {...hotelItem} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
