import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Trips() {
  const [trips, setTrips] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTrips();
  }, []);

  async function fetchTrips() {
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setTrips(data || []);
    }
  }

  async function createTrip(e) {
    e.preventDefault();

    const { error } = await supabase.from("trips").insert([
      {
        title,
        destination,
        start_date: startDate,
        end_date: endDate,
        description,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Error creating trip");
      return;
    }

    setTitle("");
    setDestination("");
    setStartDate("");
    setEndDate("");
    setDescription("");

    setShowForm(false);

    fetchTrips();
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>My Trips</h1>
          <p>Organize and plan your adventures.</p>
        </div>

        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "+ New Trip"}
        </button>
      </div>

      <div className="trips-grid">
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <h3>{trip.title}</h3>

            <p className="destination">📍 {trip.destination}</p>

            <p>{trip.description}</p>

            <Link to={`/trips/${trip.id}`}>View Trip →</Link>
          </div>
        ))}
      </div>

      {showForm && (
        <>
          <hr />

          <h2>Create New Trip</h2>

          <form onSubmit={createTrip}>
            <input
              type="text"
              placeholder="Trip Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <br />
            <br />

            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />

            <br />
            <br />

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <br />
            <br />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <br />
            <br />

            <textarea
              placeholder="Trip Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <br />
            <br />

            <button type="submit">Create Trip</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Trips;
