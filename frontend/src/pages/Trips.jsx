import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Trips() {
  const [trips, setTrips] = useState([]);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  async function fetchTrips() {
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .order("id");

    if (!error) {
      setTrips(data);
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

    fetchTrips();
  }

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Travel Organization App</h1>

      <h2>Create Trip</h2>

      <form onSubmit={createTrip}>
        <input
          type="text"
          placeholder="Trip Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create Trip</button>
      </form>

      <hr />

      <h2>Trips</h2>

      {trips.map((trip) => (
        <div key={trip.id}>
          <Link to={`/trips/${trip.id}`}>
            <h3>{trip.title}</h3>
          </Link>
          <p>{trip.destination}</p>
          <p>{trip.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Trips;
