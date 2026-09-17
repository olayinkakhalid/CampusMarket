import { useEffect } from "react";

const TestApi = () => {
    useEffect(() => {
        fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "Physics Textbook",
                price: 25,
                category: "Books",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Backend response:", data);
            });
        return <h1>API Test</h1>;
    };

    export default TestApi;