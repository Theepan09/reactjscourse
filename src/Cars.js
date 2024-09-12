import React from "react"

// const cars = ["MG Hector", "hyundai Venue", "Toyota Fortuner", "Hyundai Creta"];
const cars = [
    { "brand": "Saab", "models": ["9-3", "9-3 Cabriolet", "9-3 Coupe", "9-3 SportCombi", "9-5", "9-5 SportCombi", "900", "900 C", "900 C Turbo", 9000] },
    { "brand": "Jeep", "models": ["Cherokee", "Commander", "Compass", "Grand Cherokee", "Patriot", "Renegade", "Wrangler"] },
    { "brand": "Land Rover", "models": ["109", "Defender", "Discovery", "Discovery Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Roer Sport"] }
]


const Cars = () => {
    return (
        <div>
            <h1>Car Brands and Models</h1>
            {cars.map(car => (
                <div key={car.brand}>
                    <h2>{car.brand}</h2>
                    <ul>
                        {car.models.map((model, index) => (
                            <li key={index}>{model}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Cars