export type Worker = {
    id: number;
    name: string;
    title: string
    email: string;
}

export type PeopleData = Worker[];


const peopleData: PeopleData = [
    {
        id: 1,
        name: "Jane Cooper",
        title: "Regional Paradigm Technician",
        email: "jane.cooper@example.com"
    }, 
    {
        id: 2,
        name: "Cody Fisher",
        title: "Product Directives Officer",
        email: "cody.fisher@example.com"
    }, 
    {
        id: 3,
        name: "Leonard Krasner",
        title: "Senior Designer",
        email: "leonard.krasner@example.com"
    }, 
    {
        id: 4,
        name: "Emily Selman",
        title: "VP, Hardware Engineering",
        email: "emily.selman@example.com"
    }, 
    {
        id: 5,
        name: "Anna Roberts",
        title: "Chief Strategy Officer",
        email: "anna.roberts@example.com"
    }   
]

export default peopleData;