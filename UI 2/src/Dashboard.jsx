import React from "react";
import "./Dashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const activityData = [
    { day: "Sun", value: 13 },
    { day: "Mon", value: 54 },
    { day: "Tue", value: 42 },
    { day: "Wed", value: 69 },
    { day: "Thu", value: 11 },
    { day: "Fri", value: 24 },
  ];

  return (
    <div className="dashboard-container">
      
      {/* Activity Section */}
      <div className="activity-card">
        <h3>Activity</h3>
        <ul>
          <li className="activity-item">
            <span className="avatar">🧑</span>
            <span>Steven S.</span>
            <span className="status green">Delivered to recipient</span>
            <span>01 Jan</span>
          </li>
          <li className="activity-item highlighted">
            <span className="avatar">👨🏾‍🦱</span>
            <span>Anatoly B.</span>
            <span className="status blue">Gave to courier</span>
            <span>01 Jan</span>
          </li>
          <li className="activity-item">
            <span className="avatar">👩</span>
            <span>Ann D.</span>
            <span className="status blue">Accepted on post office</span>
            <span>30 Dec</span>
          </li>
          <li className="activity-item">
            <span className="avatar">🧑‍🦰</span>
            <span>Yulia Z.</span>
            <span className="status orange">Arranged delivery</span>
            <span>29 Dec</span>
          </li>
        </ul>
      </div>

      {/* Shipment Status */}
      <div className="shipment-card">
        <h3>#TN24512-SF-NY</h3>
        <div className="ship">
            <button className="shipment-status">In Transit</button>
        
            <button className="shipment-status">Parcel</button>
        </div>
        <div className="depature">
            <div>Depature</div>
            <div>19:49</div>
            
        </div>
        <div>
            1554 Shafter Ave, San Francisco, CA 94124
        </div>
        <div className="depature">
            <div>Depature</div>
            <div>19:49</div>
            
        </div>
        <div>
            1554 Shafter Ave, San Francisco, CA 94124
        </div>
        <div className="depature">
            <div>Depature</div>
            <div>19:49</div>
            
        </div>
        <div>
            1554 Shafter Ave, San Francisco, CA 94124
        </div>
        
      
      </div>

      {/* Second Shipment Card */}
      <div className="shipment-card secondary">
        <h3>#TN23543-NY-CA</h3>
        <div className="tags">
          <span>At Customs</span>
          <span>Jewelry</span>
          <span>Fragile</span>
          <span>Docs</span>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="chart-card">
        <h3>Daily Activity</h3>
        <ResponsiveContainer width="50%" height={200}>
          <BarChart data={activityData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Map Placeholder */}
      <div className="map-card">
        <h3>Location Tracking</h3>
        <div className="map-placeholder">📍 Map will be displayed here</div>
      </div>

    </div>
  );
};

export default Dashboard;
