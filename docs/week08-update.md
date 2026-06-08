# Development Update – Week 08

## Total Hours

Total Hours: 4.0 hours

## Task Breakdown

- Configured and refined Supabase Row Level Security (RLS) policies across project tables – 1.0 hour
- Created and tested API requests for Activities and Itinerary endpoints – 0.75 hour
- Created and tested API requests for Poll Options and Votes endpoints – 0.75 hour
- Created and tested API requests for Trip Members and Notifications endpoints – 0.75 hour
- Debugged authorization, policy, and endpoint issues while validating API functionality – 0.75 hour

---

## Assigned Issue(s) Update

### Issue #3 – Configure Supabase Authentication and RLS Policies

#### Progress Summary

Configured and validated Row Level Security policies for multiple project tables. Resolved authorization issues encountered during API testing and ensured that CRUD operations function correctly according to project requirements.

#### Key Learnings

- Learned how Supabase RLS policies impact API access.
- Improved understanding of authenticated versus anonymous requests.
- Gained experience troubleshooting authorization and permission-related errors.

#### Additional Information

Several policy adjustments were required while testing endpoints. These updates improved consistency across tables and allowed successful CRUD validation.

---

### Issue #5 – Implement Postman API Testing for Supabase Endpoints

#### Progress Summary

Expanded API testing coverage beyond the initial CRUD validation completed previously. Added and tested requests for Activities, Itinerary, Poll Options, Votes, Trip Members, and Notifications. Verified endpoint functionality and corrected request configurations when issues were discovered.

#### Key Learnings

- Improved understanding of REST endpoint structures in Supabase.
- Learned how foreign key relationships affect API requests.
- Developed stronger troubleshooting skills for API and database integration.

#### Additional Information

The Postman collection now covers the majority of project entities and provides a repeatable testing workflow for future development.

---

### Issue #8 – Implement Database Schema

#### Progress Summary

Verified relationships between newly tested tables and confirmed that schema design supports application functionality. Additional validation was performed while testing interconnected entities such as Polls, Poll Options, Votes, Trips, Activities, and Trip Members.

#### Key Learnings

- Strengthened understanding of relational database design.
- Improved ability to validate foreign key relationships through API testing.
- Learned how schema structure impacts backend functionality.

#### Additional Information

The schema remains stable and supports continued frontend development.

---

## Branch Link(s)

Feature Branch:
feature/database-schema

GitHub Branch:
https://github.com/PaulinaS123/travel-organization-app/tree/feature/database-schema

---

## Draft Pull Request(s) and Pull Request(s) Update

### Pull Request #1

#### Progress Summary

Continued development and testing work associated with database implementation and API validation. Added endpoint coverage for additional project tables and resolved multiple authorization and policy issues discovered during testing.

#### Key Learnings

- Improved Git workflow management.
- Learned how to iteratively test and refine backend functionality.
- Gained experience managing development progress through GitHub Issues and Pull Requests.

#### Additional Information

Next steps include closing completed backend issues and beginning frontend implementation with React and Vite.

---

## Wiki Documentation Check & Update

### Wiki Check

Yes. Updates to RLS policies, API endpoints, and testing procedures affected project documentation.

### Updates Made

- Updated API testing notes.
- Added documentation regarding RLS configuration and troubleshooting.
- Updated endpoint coverage information for newly tested tables.

---

## Pull Request Review

### Summary

Reviewed project changes related to API testing, policy configuration, and backend validation. Verified endpoint functionality and ensured consistency across project entities.

### Learnings

- Improved understanding of backend testing strategies.
- Learned practical techniques for debugging API authorization errors.
- Gained additional experience working with Supabase security policies and REST APIs.
