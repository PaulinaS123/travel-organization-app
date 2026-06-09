import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState(null);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTrip();
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

      <button onClick={updateTrip}>Save Changes</button>

      <button onClick={deleteTrip} style={{ marginLeft: "10px" }}>
        Delete Trip
      </button>
    </div>
  );
}

export default TripDetails;
