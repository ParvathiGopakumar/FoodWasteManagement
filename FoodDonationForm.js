import React, { useState } from "react";

const FoodDonationForm = () => {
    const [formData, setFormData] = useState({
        donorName: "",
        foodType: "",
        expiryDate: "",
        location: "",
        recipientName: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form Submitted!");
    };

    return (
        <div className="container">
            <h2>Food Donation Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="donorName"
                    placeholder="Donor Name"
                    value={formData.donorName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="foodType"
                    placeholder="Type of Food"
                    value={formData.foodType}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                />
                <select
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Select Recipient</option>
                    <option value="NGO A">NGO A</option>
                    <option value="NGO B">NGO B</option>
                    <option value="NGO C">NGO C</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FoodDonationForm;
