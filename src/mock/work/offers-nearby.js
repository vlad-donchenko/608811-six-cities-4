import {OfferType} from "../../const";

const nearbyAmsterdam = [
  {
    id: 0,
    offerType: OfferType.NEARBY,
    title: `Beautiful & luxurious apartment at great location`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 120,
    type: `Apartment`,
    rating: 4,
    guests: 2,
    bedroomsCount: 2,
    advantages: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    isPremium: true,
    isBookmark: true,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: true
    },
    city: {
      name: `Amsterdam`,
      latitude: 52.38333,
      longitude: 4.9,
    },
    coordinates: {
      latitude: 52.3909653943508,
      longitude: 4.85309766406198,
      zoom: 12
    }
  },
  {
    id: 1,
    offerType: OfferType.NEARBY,
    title: `Wood and stone place`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 520,
    type: `Private room`,
    rating: 3,
    guests: 2,
    bedroomsCount: 3,
    advantages: [`Wi-Fi`, `Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    isPremium: false,
    isBookmark: true,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: false
    },
    city: {
      name: `Amsterdam`,
      latitude: 52.38333,
      longitude: 4.9,
    },
    coordinates: {
      latitude: 52.369553993508,
      longitude: 4.85309666407198,
      zoom: 12
    }
  },
  {
    id: 2,
    offerType: OfferType.NEARBY,
    title: `Canal View Prinsengracht`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 750,
    type: `Apartment`,
    rating: 2,
    guests: 3,
    bedroomsCount: 2,
    advantages: [`Wi-Fi`, `Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`, `Towels`],
    isPremium: false,
    isBookmark: false,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: true
    },
    city: {
      name: `Amsterdam`,
      latitude: 52.38333,
      longitude: 4.9,
    },
    coordinates: {
      latitude: 52.3909573943508,
      longitude: 4.929309666406198,
      zoom: 12
    }
  }
];

export {nearbyAmsterdam};
