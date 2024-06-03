
/**
 * Contains the hardcoded data for the properties. This file will export an array of property objects
 * that can be imported wherever the data is needed in the application. This approach simulates fetching
 * data from an API and helps in keeping the UI components clean and focused on rendering logic.
 */

const properties = [
    {
        id: 1,
        name: "Sunny Apartment",
        location: "123 Sunny St, Sunville",
        price: "1200",
        description: "A nice sunny apartment with 2 bedrooms and a great view.",
        image: "url-to-image"
    },
    {
        id: 2,
        name: "Cozy Cottage",
        location: "101 Cottage Lane, Countryside",
        price: "900",
        description: "A cozy cottage with a beautiful garden and lots of privacy.",
        image: "url-to-image"
    },
    {
        id: 3,
        name: "Modern Studio",
        location: "202 High St, Downtown",
        price: "1100",
        description: "A modern studio apartment in the heart of the city, close to shopping and nightlife.",
        image: "url-to-image"
    }
    // More properties can be added here
];

export default properties;
