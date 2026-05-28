-- =========================================
-- PROFILES TABLE
-- Stores extra information about users
-- =========================================

create table profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    full_name text not null,
    username text unique,
    avatar_url text,
    bio text,
    created_at timestamp with time zone default now()
);

-- =========================================
-- TRIPS TABLE
-- Main trip information
-- =========================================

create table trips (
  id bigint generated always as identity primary key,
  title text not null,
  destination text,
  start_date date,
  end_date date,
  created_by uuid references auth.users(id),
  created_at timestamp default now()
);

-- =========================================
-- TRIP MEMBERS TABLE
-- Many-to-many relationship between users and trips
-- =========================================

create table trip_members (
    id bigint generated always as identity primary key,
    trip_id bigint references trips(id) on delete cascade,
    user_id uuid references auth.users(id) on delete cascade,
    role text default 'member',
    joined_at timestamp with time zone default now(),

    unique(trip_id, user_id)
);

-- =========================================
-- POLLS TABLE
-- Stores polls created for a trip
-- =========================================

create table polls (
    id bigint generated always as identity primary key,
    trip_id bigint references trips(id) on delete cascade,
    title text not null,
    category text,
    description text,
    allow_multiple_votes boolean default false,
    anonymous_voting boolean default false,
    deadline timestamp,
    created_by uuid references auth.users(id) on delete set null,
    created_at timestamp with time zone default now()
);

-- =========================================
-- POLL OPTIONS TABLE
-- Stores options inside a poll
-- Example: Bali, Paris, Maldives
-- =========================================

create table poll_options (
    id bigint generated always as identity primary key,
    poll_id bigint references polls(id) on delete cascade,
    option_text text not null,
    created_at timestamp with time zone default now()
);

-- =========================================
-- VOTES TABLE
-- Stores votes for poll options
-- =========================================

create table votes (
    id bigint generated always as identity primary key,
    poll_option_id bigint references poll_options(id) on delete cascade,
    user_id uuid references auth.users(id) on delete cascade,
    created_at timestamp with time zone default now(),

    unique(poll_option_id, user_id)
);

-- =========================================
-- MESSAGES TABLE
-- Group chat/messages for trips
-- =========================================

create table messages (
    id bigint generated always as identity primary key,
    trip_id bigint references trips(id) on delete cascade,
    sender_id uuid references auth.users(id) on delete set null,
    content text not null,
    created_at timestamp with time zone default now()
);

-- =========================================
-- ACTIVITIES TABLE
-- Activities/events inside a trip
-- =========================================

create table activities (
    id bigint generated always as identity primary key,
    trip_id bigint references trips(id) on delete cascade,
    title text not null,
    description text,
    activity_date timestamp,
    location text,
    created_by uuid references auth.users(id) on delete set null,
    created_at timestamp with time zone default now()
);

-- =========================================
-- ITINERARY TABLE
-- Daily plans for the trip
-- =========================================

create table itinerary (
    id bigint generated always as identity primary key,
    trip_id bigint references trips(id) on delete cascade,
    day_number integer,
    title text,
    details text,
    scheduled_time timestamp,
    created_at timestamp with time zone default now()
);

-- =========================================
-- NOTIFICATIONS TABLE
-- Notifications for users
-- =========================================

create table notifications (
    id bigint generated always as identity primary key,
    user_id uuid references auth.users(id) on delete cascade,
    message text not null,
    is_read boolean default false,
    created_at timestamp with time zone default now()
);