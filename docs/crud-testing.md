# CRUD Testing Documentation

## Overview

CRUD testing was performed using Postman and the Supabase REST API to validate backend functionality for the Travel Organization App.

---

## Create (POST)

### Endpoint Tested

`/trips`

### Result

Successfully created new trip records in the database.

### Evidence

- screenshots/POST Create Trip.png

---

## Read (GET)

### Endpoints Tested

- `/trips`
- `/trips?id=eq.<id>`

### Result

Successfully retrieved all trip records and individual trip records.

### Evidence

- screenshots/GET Trips.png
- screenshots/SINGLE Trips.png

---

## Update (PATCH)

### Endpoint Tested

`/trips?id=eq.<id>`

### Result

Successfully updated trip information and verified changes.

### Evidence

- screenshots/PATCH Update Trip.png

---

## Delete (DELETE)

### Endpoint Tested

`/trips?id=eq.<id>`

### Result

Successfully deleted trip records from the database.

### Evidence

- screenshots/DELETE Trip.png

---

## Conclusion

All CRUD operations were successfully tested through the Supabase REST API using Postman. The database schema and API endpoints function correctly and are ready for frontend integration.
