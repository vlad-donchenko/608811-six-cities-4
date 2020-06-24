const offers = [
  {
    id: 0,
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
    }
  },
  {
    id: 1,
    title: `Wood and stone place`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 220,
    type: `Private room`,
    rating: 3,
    guests: 5,
    bedroomsCount: 3,
    advantages: [`Wi-Fi`, `Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    isPremium: false,
    isBookmark: false,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: false
    }
  },
  {
    id: 2,
    title: `Canal View Prinsengracht`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 150,
    type: `Apartment`,
    rating: 2,
    guests: 4,
    bedroomsCount: 2,
    advantages: [`Wi-Fi`, `Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`, `Towels`],
    isPremium: false,
    isBookmark: false,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: true
    }
  },
  {
    id: 3,
    title: `Nice, cozy, warm big bed apartment`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 850,
    type: `Apartment`,
    rating: 5,
    guests: 5,
    bedroomsCount: 3,
    advantages: [`Wi-Fi`, `Coffee machine`, `Dishwasher`, `Towels`],
    isPremium: false,
    isBookmark: true,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: false
    }
  },
  {
    id: 4,
    title: `Wood and stone place`,
    picture: `apartment-01.jpg`,
    gallery: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    price: 450,
    type: `Private room`,
    rating: 4.5,
    guests: 3,
    bedroomsCount: 1,
    advantages: [`Wi-Fi`, `Dishwasher`, `Towels`],
    isPremium: true,
    isBookmark: false,
    host: {
      name: `Angelina`,
      avatar: `avatar-angelina.jpg`,
      description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
      isPro: true
    }
  }
];

export {offers};
