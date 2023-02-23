/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            length: 3,
            species: "Shark",
            location: "the Pacific Ocean",
            food: "smaller Sharks",
            image: "http://www.easthamptonstar.com/sites/default/files/shark%2021.jpg"
        },

        {
            id: 2,
            name: "Willy",
            length: 25,
            species: "Moon Snapper",
            location: "the Fire Lake",
            food: "rocks",
            image: "https://i.cbc.ca/1.5656648.1595279810!/fileImage/httpImage/idiacanthus-antrostomus-pacific-blackdragon-fish.jpg"
        },

        {
            id: 3,
            name: "Moby",
            length: 1,
            species: "Immortal One",
            location: "a puddle in Martin's driveway",
            food: "nothing, because he's immortal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtgN_rU6iq8yeT7CJhkdsFvM2TOrVNpIlYQ&usqp=CAU"
        },

        {
            id: 4,
            name: "Flipper",
            length: 30,
            species: "Snapper Predator",
            location: " the Fire Lake",
            food: "Moon Snappers",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqyUVgoBJDBdqf46y4E_KOU2Hwc5AbF_51A&usqp=CAU"
        },

        {
            id:5,
            name: "Bubbles",
            length: 4,
            species: "Bubbles Species",
            location: "Martin's bathtub",
            food: "water from the tank",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQz1NHNyn2FW08Rc39mSOeriwduDsoIEPqw&usqp=CAU"
        },

        {
            id: 6,
            name: "Nemo",
            length: 15,
            species: "Clown Fish",
            location: "the Indian Ocean",
            food: "algae",
            image: "data:image/jpeg;base64,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"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

