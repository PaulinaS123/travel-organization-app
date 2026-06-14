import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Itinerary() {
  const [itineraryItems, setItineraryItems] = useState([]);
  const [trips, setTrips] = useState([]);

  const [tripId, setTripId] = useState("");
  const [dayNumber, setDayNumber] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  useEffect(() => {
    fetchItinerary();
    fetchTrips();
  }, []);

  async function fetchTrips() {
    const { data, error } = await supabase
      .from("trips")
      .select("id, title")
      .order("title");

    if (!error) {
      setTrips(data || []);
    }
  }

  async function fetchItinerary() {
    const { data, error } = await supabase
      .from("itinerary")
      .select("*")
      .order("day_number");

    if (!error) {
      setItineraryItems(data || []);
    }
  }

  async function createItinerary(e) {
    e.preventDefault();

    const { error } = await supabase.from("itinerary").insert([
      {
        trip_id: parseInt(tripId),
        day_number: parseInt(dayNumber),
        title,
        details,
        scheduled_time: scheduledTime,
      },
    ]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    setTripId("");
    setDayNumber("");
    setTitle("");
    setDetails("");
    setScheduledTime("");

    fetchItinerary();
  }

  return (
    <div>
      <h1>Itinerary</h1>

      <h2>Create Itinerary Item</h2>

      <form onSubmit={createItinerary}>
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
          type="number"
          placeholder="Day Number"
          value={dayNumber}
          onChange={(e) => setDayNumber(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="datetime-local"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create Itinerary Item</button>
      </form>

      <hr />

      <h2>Itinerary Items</h2>

      {itineraryItems.length === 0 ? (
        <p>No itinerary items found.</p>
      ) : (
        itineraryItems.map((item) => (
          <div className="trip-card" key={item.id}>
            <h3>{item.title}</h3>

            <p>
              <strong>Day:</strong> {item.day_number}
            </p>

            <p>
              <strong>Details:</strong> {item.details}
            </p>

            <p>
              <strong>Scheduled:</strong>{" "}
              {item.scheduled_time
                ? new Date(item.scheduled_time).toLocaleString()
                : "No time"}
            </p>

            <p>
              <strong>Trip ID:</strong> {item.trip_id}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Itinerary;
