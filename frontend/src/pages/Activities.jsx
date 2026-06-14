import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [trips, setTrips] = useState([]);

  const [tripId, setTripId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [activityDate, setActivityDate] = useState("");

  useEffect(() => {
    fetchActivities();
    fetchTrips();
  }, []);

  async function fetchActivities() {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .order("activity_date");

    if (error) {
      console.error(error);
      return;
    }

    setActivities(data || []);
  }

  async function fetchTrips() {
    const { data, error } = await supabase
      .from("trips")
      .select("id, title")
      .order("title");

    if (error) {
      console.error(error);
      return;
    }

    setTrips(data || []);
  }

  async function createActivity(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("activities")
      .insert([
        {
          trip_id: parseInt(tripId),
          title,
          description,
          location,
          activity_date: activityDate,
        },
      ])
      .select();

    if (error) {
      console.error("SUPABASE ERROR:", error);
      alert(`Error: ${error.message}`);
      return;
    }

    console.log("Created:", data);

    setTripId("");
    setTitle("");
    setDescription("");
    setLocation("");
    setActivityDate("");

    fetchActivities();
  }

  return (
    <div>
      <h1>Activities</h1>

      <h2>Create Activity</h2>

      <form onSubmit={createActivity}>
        <select
          value={tripId}
          onChange={(e) => setTripId(e.target.value)}
          required
        >
          <option value="">Select a Trip</option>

          {trips.map((trip) => (
            <option key={trip.id} value={trip.id}>
              {trip.title}
            </option>
          ))}
        </select>

        <br />
        <br />

        <input
          type="text"
          placeholder="Activity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />
        <br />

        <input
          type="datetime-local"
          value={activityDate}
          onChange={(e) => setActivityDate(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create Activity</button>
      </form>

      <hr />

      <h2>Activity List</h2>

      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        activities.map((activity) => (
          <div className="trip-card" key={activity.id}>
            <h3>{activity.title}</h3>

            <p>
              <strong>Trip ID:</strong> {activity.trip_id}
            </p>

            <p>
              <strong>Location:</strong> {activity.location}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {activity.activity_date
                ? new Date(activity.activity_date).toLocaleString()
                : "No date"}
            </p>

            <p>
              <strong>Description:</strong> {activity.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Activities;
