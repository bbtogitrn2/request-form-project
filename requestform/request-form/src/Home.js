import React from 'react';
import './Home.css';

function Home() {
  // Implement form submission logic here

  return (
    <div className="home-wrapper">
      <div className="leave-application-form">
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Position" />
          <select>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            {/* Add other leave types here */}
          </select>
          <input type="text" placeholder="From Date (dd-mm-yyyy)" />
          <input type="text" placeholder="To Date (dd-mm-yyyy)" />
          <textarea placeholder="Reason of Leave"></textarea>
          <input type="text" placeholder="Number of Days" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
