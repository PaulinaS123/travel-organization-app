# Travel Organization App

## Author

**Victoria Salomon**

Application Development BAS Program

North Seattle College


## Project Overview

The Travel Organization App is a full-stack web application designed to help users organize and manage trips, activities, itineraries, group members, notifications, and travel-related voting. The application combines a PostgreSQL database hosted on Supabase with a React + Vite frontend and API testing through Postman.

This project was developed as part of the Application Development BAS program and demonstrates database design, API integration, frontend development, version control, and project documentation practices.

---

## Features

### Trip Management

* Create trips
* View trip details
* Update trip information
* Delete trips

### Activity Management

* Add activities to trips
* View activity details
* Update activities
* Remove activities

### Itinerary Planning

* Create itinerary items
* Organize trip schedules
* Manage trip timelines

### Group Collaboration

* Trip members
* Notifications
* Polls
* Poll options
* Voting system

### Database Integration

* PostgreSQL database hosted on Supabase
* Relational database structure
* Foreign key relationships
* Row Level Security (RLS) policies
* REST API integration

---

## Technologies Used

### Frontend

* React
* Vite
* React Router
* JavaScript
* CSS

### Backend

* PostgreSQL
* Supabase

### API Testing

* Postman

### Development Tools

* Git
* GitHub
* VS Code

---

## Database Schema

The application uses a relational PostgreSQL database with the following primary entities:

* Trips
* Activities
* Itinerary Items
* Trip Members
* Notifications
* Polls
* Poll Options
* Votes

Relationships are implemented through foreign key constraints to ensure data integrity and support application functionality.

---

## Authentication & Security

The project uses Supabase Authentication and Row Level Security (RLS) policies.

Security implementation includes:

* Authenticated access controls
* Table-level security policies
* CRUD operation validation
* Authorization testing through Postman

---

## Project Structure

```text
travel-organization-app/
│
├── docs/
│   ├── week04-update.md
│   ├── week05-update.md
│   ├── week06-update.md
│   ├── week07-update.md
│   ├── week08-update.md
│   ├── week09-update.md
│   └── week10-update.md
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   └── package.json
│
├── screenshots/
│
├── sql/
│
└── README.md
```

---

## Application Pages

### Home Page

Displays application overview and dashboard information.

### Trips Page

Displays all available trips and trip management options.

### Trip Details Page

Displays detailed trip information including activities and itinerary items.

### Activities Page

Displays trip activities and activity management features.

### Itinerary Page

Displays itinerary items associated with trips.

---

## API Testing

API endpoints were tested using Postman.

Testing included:

* Create operations
* Read operations
* Update operations
* Delete operations
* Authentication validation
* RLS policy verification

Documentation and screenshots are included in the repository.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/PaulinaS123/travel-organization-app.git
```

### Navigate to Frontend

```bash
cd travel-organization-app/frontend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

---

## Testing

### Frontend Testing

```bash
npm install
npm run dev
```

Verify:

* Navigation works correctly
* Data loads from Supabase
* CRUD functionality operates correctly

### API Testing

Import the Postman collection and run requests against Supabase endpoints.

Verify:

* Successful API responses
* Proper authentication behavior
* CRUD operations
* Foreign key relationships

---

## Development Updates

Weekly development progress is documented in:

* Week 04 Update
* Week 05 Update
* Week 06 Update
* Week 07 Update
* Week 08 Update
* Week 09 Update
* Week 10 Update

Located in the `/docs` directory.

---

## Screenshots

Project screenshots and testing evidence are located in the `/screenshots` directory.

Examples include:

* Home Page
* Trips Page
* Trip Details Page
* Activities Page
* Itinerary Page
* Supabase Database Schema
* Postman API Testing Results

---

## Learning Outcomes

This project provided experience with:

* Relational database design
* PostgreSQL development
* Supabase integration
* API testing and validation
* React frontend development
* React Router navigation
* Authentication and security policies
* GitHub project management
* Technical documentation

---

## Author

**Paulina Salomon**

Application Development BAS Program

North Seattle College
