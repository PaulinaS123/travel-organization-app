-- =========================================
-- SAMPLE TRIP DATA
-- =========================================

insert into trips (
    title,
    destination,
    description
)
values (
    'Barcelona Trip',
    'Barcelona',
    'Summer vacation planning'
);

-- =========================================
-- SAMPLE POLL DATA
-- =========================================

insert into polls (
    trip_id,
    title,
    category,
    description
)
values (
    1,
    'Best Beach Destination?',
    'Destination',
    'Vote for the best beach trip location'
);

-- =========================================
-- SAMPLE POLL OPTIONS
-- =========================================

insert into poll_options (
    poll_id,
    option_text
)
values
(1, 'Bali'),
(1, 'Maldives'),
(1, 'Barcelona');

-- =========================================
-- SAMPLE MESSAGE DATA
-- =========================================

insert into messages (
    trip_id,
    content
)
values (
    1,
    'Welcome everyone to the Barcelona trip!'
);

-- =========================================
-- SAMPLE ACTIVITIES
-- =========================================

insert into activities (
    trip_id,
    title,
    description,
    location
)
values (
    1,
    'Beach Day',
    'Relaxing beach activity',
    'Barceloneta Beach'
);

-- =========================================
-- SAMPLE ITINERARY
-- =========================================

insert into itinerary (
    trip_id,
    day_number,
    title,
    details
)
values (
    1,
    1,
    'Arrival Day',
    'Check into hotel and explore downtown'
);

-- =========================================
-- SELECT TESTS
-- =========================================

select * from trips;

select * from polls;

select * from poll_options;

select * from messages;

-- =========================================
-- DELETE TEST
-- =========================================

delete from poll_options
where option_text = 'Barcelona';

select * from poll_options;