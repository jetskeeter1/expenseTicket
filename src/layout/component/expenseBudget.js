import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainBudget() {
    const [budget, setBudget] = useState(null);

    useEffect(() => {
        axios.get('http://localhost/expense_app/expense_backend/getMonthBudget.php')
            .then(response => {
                console.log(response.data); // ✅ Inspect returned structure
                setBudget(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="budget flex flex-align-center flex-justify-center">
            <h4>This is budget</h4>
            <div className="outputIncome">
                {budget !== null ? `${budget[0].monthly_income} ₱` : "Loading..."}
            </div>
        </div>
    );
}

export default MainBudget;
