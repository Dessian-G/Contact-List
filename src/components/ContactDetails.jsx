import React from "react";

export default function ContactDetails({detailedContact}) {

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
                </tr>
                <tr>
            <td>{detailedContact.name}</td>
            <td>{detailedContact.username}</td>
            <td>{detailedContact.email}</td>
            <td>{detailedContact.phone}</td>
          </tr>
            </tbody>
        </table>
    )
}