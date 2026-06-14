import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Home() {
  const [tripCount, setTripCount] = useState(0);
  const [activityCount, setActivityCount] = useState(0);
  const [itineraryCount, setItineraryCount] = useState(0);
  const [recentTrips, setRecentTrips] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const { count: trips } = await supabase
      .from("trips")
      .select("*", { count: "exact", head: true });

    const { count: activities } = await supabase
      .from("activities")
      .select("*", { count: "exact", head: true });

    const { count: itinerary } = await supabase
      .from("itinerary")
      .select("*", { count: "exact", head: true });

    const { data: recent } = await supabase
      .from("trips")
      .select("*")
      .order("id", { ascending: false })
      .limit(4);

    setTripCount(trips || 0);
    setActivityCount(activities || 0);
    setItineraryCount(itinerary || 0);
    setRecentTrips(recent || []);
  }

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Plan Your Next Adventure</h1>

          <p>Organize trips, activities, and itineraries all in one place.</p>
        </div>
      </div>

      <section>
        <h2>Dashboard</h2>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>{tripCount}</h3>
            <p>Total Trips</p>
          </div>

          <div className="dashboard-card">
            <h3>{activityCount}</h3>
            <p>Total Activities</p>
          </div>

          <div className="dashboard-card">
            <h3>{itineraryCount}</h3>
            <p>Total Itinerary Items</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Recent Trips</h2>

        <div className="trips-grid">
          {recentTrips.map((trip) => (
            <div className="trip-card" key={trip.id}>
              <h3>{trip.title}</h3>

              <p className="destination">📍 {trip.destination}</p>

              <p>{trip.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
