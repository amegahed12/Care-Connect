/**
 * Purpose: A powerful, reusable table for displaying and managing users.
 * Props:
    users: An array of user data to display.
    columns: An array defining the table headers (e.g., ['Name', 'Speciality', 'Status', 'Actions']).
    onStatusChange: A function that gets called when a toggle is clicked, passing the user's ID and the new status.
 * Internal State: It will manage the state of the toggles. When a user clicks a toggle, the UI should update immediately, but the change is only "finalized" when the "Save Changes" button is clicked.
*/