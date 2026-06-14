import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState(null);

  const [activities, setActivities] = useState([]);
  const [itineraryItems, setItineraryItems] = useState([]);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTrip();
    fetchActivities();
    fetchItinerary();
  }, []);

  async function fetchTrip() {
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching trip:", error);
      return;
    }

    setTrip(data);

    setTitle(data.title || "");
    setDestination(data.destination || "");
    setDescription(data.description || "");
  }

  async function fetchActivities() {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("trip_id", id);

    if (error) {
      console.error(error);
      return;
    }

    setActivities(data || []);
  }

  async function fetchItinerary() {
    const { data, error } = await supabase
      .from("itinerary")
      .select("*")
      .eq("trip_id", id)
      .order("day_number");

    if (error) {
      console.error(error);
      return;
    }

    setItineraryItems(data || []);
  }

  async function updateTrip() {
    const { error } = await supabase
      .from("trips")
      .update({
        title,
        destination,
        description,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating trip:", error);
      alert("Failed to update trip.");
      return;
    }

    alert("Trip updated successfully!");

    fetchTrip();
  }

  async function deleteTrip() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase.from("trips").delete().eq("id", id);

    if (error) {
      console.error("Error deleting trip:", error);
      alert("Failed to delete trip.");
      return;
    }

    alert("Trip deleted successfully!");

    navigate("/trips");
  }

  if (!trip) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit Trip</h1>

      <label>Trip Title</label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <label>Destination</label>
      <br />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br />
      <br />

      <label>Description</label>
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <hr />

      <h2>Activities</h2>

      {activities.length === 0 ? (
        <p>No activities for this trip.</p>
      ) : (
        activities.map((activity) => (
          <div className="trip-card" key={activity.id}>
            <h3>{activity.title}</h3>

            <p>
              <strong>Location:</strong> {activity.location}
            </p>

            <p>
              <strong>Description:</strong> {activity.description}
            </p>
          </div>
        ))
      )}

      <hr />

      <h2>Itinerary</h2>

      {itineraryItems.length === 0 ? (
        <p>No itinerary items for this trip.</p>
      ) : (
        itineraryItems.map((item) => (
          <div className="trip-card" key={item.id}>
            <h3>Day {item.day_number}</h3>

            <p>
              <strong>{item.title}</strong>
            </p>

            <p>{item.details}</p>

            <p>
              <strong>Scheduled:</strong>{" "}
              {item.scheduled_time
                ? new Date(item.scheduled_time).toLocaleString()
                : "No time"}
            </p>
          </div>
        ))
      )}

      <hr />

      <button onClick={updateTrip}>Save Changes</button>

      <button onClick={deleteTrip} style={{ marginLeft: "10px" }}>
        Delete Trip
      </button>
    </div>
  );
}

export default TripDetails;
