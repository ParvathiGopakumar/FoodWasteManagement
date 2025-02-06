import React from "react";
import FoodDonationForm from "./components/FoodDonationForm";
import NearbyDonations from "./components/NearbyDonations";

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Food Waste Management</h1>
            <FoodDonationForm />
            <NearbyDonations />
        </div>
    );
};

export default App;
