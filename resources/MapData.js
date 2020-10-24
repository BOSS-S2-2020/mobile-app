const Images = [
    { image: require('../assets/park1.jpg') },
    { image: require('../assets/park2.jpg') },
    { image: require('../assets/park3.jpg') },
  
];
//const walks = [
//    {
//        coordinates: {
//            latitude: -35.272908,
//            longitude: 149.080073,
//        }
//    },
//    {
//        coordinates: {

//            latitude: -35.269144,
//            longitude: 149.080370,
//        }
//    },
//];

export const locations = [
    {
        coordinate: {
            latitude: -35.267758,
            longitude: 149.079150,
        },
        title: "Aranda Bushlland Nuture Reserve",
        description: "Aranda Bushland is an important part of the wooded area which extends from Black Mountain to the Molonglo and Murrumbidgee river corridors.",
        image: Images[0].image,
        //  orgion: walks[0].coordinates,
        //  destination:walks[1].coordinates,
    },

    {

        coordinate: {
            latitude: - 35.269278,
            longitude: 149.163692,
        },
        title: "Mount Ainslie Nature Reserve",
        description: "Mount Ainslie Nature Reserve (637 hectares) and the adjoining Mount Majura Nature Reserve form a significant ridge in north-east Canberra.",
        image: Images[1].image,
    },
    {
        coordinate: {
            latitude: -35.267758,
            longitude: 149.119234,
        },
        title: "Red Hill Nature Reserve",
        description: "Red Hill Nature Reserve (293 hectares) is a prominent hill located between Woden Valley and south Canberra.It makes an impressive ‘Bush Capital’ back drop to Parliament House.",
        image: Images[2].image,

    },
]
