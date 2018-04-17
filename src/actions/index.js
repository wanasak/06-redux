export function moviesList() {
    return {
        type: "MOVIES_LIST",
        payload: [
            { id: 1, name: "AAA" },
            { id: 2, name: "BBB" },
            { id: 3, name: "CC" }
        ]
    };
}

export function directorList() {
    return {
        type: "DIRECTORS_LIST",
        payload: [
            { id: 1, name: "Director 1" },
            { id: 2, name: "Director 2" },
            { id: 3, name: "Director 3" }
        ]
    };
}
