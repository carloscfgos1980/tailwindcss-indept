export type Person = {
    id: number;
    name: string;
    email: string;
    imagePath: string;
}

export type Data = Person[]

const dummyData: Data = [
    {
        id: 1,
        name: "Kyra",
        email: "kyra@emample.com",
        imagePath: "/pics/kyra.jpeg"
    },
    {
        id: 2,
        name: "mami",
        email: "mami@emample.com",
        imagePath: "/pics/mami.jpeg"
    },
    {
        id: 3,
        name: "flaki",
        email: "flaki@emample.com",
        imagePath: "/pics/flaki.jpeg"
    },
    {
        id: 4,
        name: "yo",
        email: "yo@emample.com",
        imagePath: "/pics/yo.jpeg"
    }
]

export default dummyData;