import SortAlpha from './components/Icons/SortAlpha';
import Currency from './components/Icons/Currency';
import Star from './components/Icons/Star';


export const hotelItemList = [


  {
    id: 2,
    title: "Alua Atlántico Golf Resort",
    location: "Lara, Antalya, Turkey",

    rating: 4,
    image: "/assets/hotel-image-2.png",
    description:
      "Designed to combine indulgence with inclusivity, the Royal Hideaway Corales Suites, part of Barceló Hotel Group are situated in a five-star hotel that extends a warm welcome to families, friends and couples. Its tasteful design and beautiful landscape set the scene for a memorable, happy holiday with easy access to stunning beaches of Costa Adeja and a wide range of entertainment.",
    cta: {
      title: "Book now",
      amount: 686.8,
    },
  },
  {
    id: 4,
    title: "Alua Atlántico Golf Resort",
    location: "Lara, Antalya, Turkey",

    rating: 3,
    image: "/assets/hotel-image-2.png",
    description:
      "Designed to combine indulgence with inclusivity, the Royal Hideaway Corales Suites, part of Barceló Hotel Group are situated in a five-star hotel that extends a warm welcome to families, friends and couples. Its tasteful design and beautiful landscape set the scene for a memorable, happy holiday with easy access to stunning beaches of Costa Adeja and a wide range of entertainment.",
    cta: {
      title: "Book now",
      amount: 564.8,
    },
  },
  {
    id: 1,
    title: "Iberostar Grand Salomé",
    location: "Costa Teguise, Lanzarote, Spain",

    rating: 5,
    image: "/assets/hotel-image-1.png",
    description:
      "The hotel offers luxury holiday accommodation close to the ancient city of Paphos. The adjacent ancient Tombs of the Kings provided the design inspiration for the Elysium. Different elements of the resort suggest different spirits, ages and energies including the mysticism of Byzantium, the opulence of Venice and the vitality of the Mediterranean. The resort is intended to offer the visitor a series of experiences that contemplate the rich history of the island.",
    cta: {
      title: "Book now",
      amount: 1136.5,
    },
  },
  {
    id: 3,
    title: "Las Piramides Resort",
    location: "Ayia Napa, Larnaca, Cyprus",
    rating: 3,
    image: "/assets/hotel-image-3.png",
    description:
      "Atrium Palace Thalasso Spa and Villas is truly worthy of its five-star rating. A beachfront location, six swimming pools and luxury dining experiences are just some of the hotel’s upscale amenities. With views over Kalathos Bay, which has earned the Blue Flag for quality, and entertainment for all ages, this property is the perfect place to infuse your Rhodes holiday with more than a bit of luxury.",
    cta: {
      title: "Book now",
      amount: 499.99,
    },
  },
];
export const sortItemList = [
  {
    id: 1,
    label: "alphabetically",
    icon: <SortAlpha />,
    active: true,
  },
  {
    id: 2,
    label: "price",
    icon: <Currency />,
    active: false,
  },
  {
    id: 3,
    label: "rating",
    icon: <Star />,
    active: false,
  },
];