import React from "react";

const NearbyDonations = () => {
    const donors = ["Donor A has food", "Donor B has food", "Donor C has food"];

    return (
        <div className="container">
            <h2>Nearby Donations</h2>
            <ul className="nearby-list">
                {donors.map((donor, index) => (
                    <li key={index}>{donor}</li>
                ))}
            </ul>
        </div>
    );
};

export default NearbyDonations;
