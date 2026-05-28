alter table profiles enable row level security;
alter table trips enable row level security;
alter table trip_members enable row level security;
alter table polls enable row level security;
alter table poll_options enable row level security;
alter table votes enable row level security;
alter table messages enable row level security;
alter table activities enable row level security;
alter table itinerary enable row level security;
alter table notifications enable row level security;

create policy "Anyone can view trips"
on trips
for select
using (true);

create policy "Authenticated users can create trips"
on trips
for insert
with check (auth.role() = 'authenticated');

create policy "Users can update their own trips"
on trips
for update
using (auth.uid() = created_by);

create policy "Users can delete their own trips"
on trips
for delete
using (auth.uid() = created_by);

create policy "Profiles are viewable by everyone"
on profiles
for select
using (true);

create policy "Users can insert their own profile"
on profiles
for insert
with check (auth.uid() = id);

create policy "Users can update their own profile"
on profiles
for update
using (auth.uid() = id);

create policy "Anyone can view polls"
on polls
for select
using (true);

create policy "Anyone can view poll options"
on poll_options
for select
using (true);

create policy "Authenticated users can create polls"
on polls
for insert
with check (auth.role() = 'authenticated');

create policy "Anyone can view votes"
on votes
for select
using (true);

create policy "Authenticated users can vote"
on votes
for insert
with check (auth.role() = 'authenticated');

create policy "Anyone can view messages"
on messages
for select
using (true);

create policy "Authenticated users can send messages"
on messages
for insert
with check (auth.role() = 'authenticated');