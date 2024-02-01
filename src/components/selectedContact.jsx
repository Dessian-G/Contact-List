// SelectedContact.jsx

import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // Create state variable for a single contact
  const [contact, setContact] = useState(null);

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    // Define the function to fetch the selected user data
    const fetchContact = async () => {
      try {
        // Fetch the data from the API based on the selectedContactId
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        
        // Set the contact state with the fetched data
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchContact function
    fetchContact();
  }, [selectedContactId]); // Run the effect whenever selectedContactId changes

  // Render the selected contact data
  return (
    <div>
      {/* Add a button to navigate back to the list view */}
      <button onClick={() => setSelectedContactId(null)}>Go Back to List</button>
      
      {/* Display the contact information */}
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          {/* Add additional properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
