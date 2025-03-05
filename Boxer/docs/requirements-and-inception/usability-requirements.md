---
sidebar_position: 2
---

# Usability requirements

| Task | Success condition | Failure condition | Potential cause | Notes & Consideration |
|------|-------------------|-------------------|-----------------|-----------------------|
| Log in to MedPantry | User is successfully logged in to the webpage using given account and password from admin and gets directed to dashboard. | User able to log in with wrong/random credentials. User unable to log in with valid credentials. | Server being down. Credentials does not exist in database. Error in database | Failure will prompt the user to retry login |
| Dashboard display | Dashboard loads, showing relevant options (e.g., orders, number of free BaxterBoxes, stock updates) | Dashboard fails to load or displays incorrect information | Database error. Front end display error. | Dashboard should be customisable based on user roles (e.g., manager, volunteer) i.e., adjust visibility based on roles. |
| Add items to a container | The correct container is recommended for the incoming items. The quantity of items stocked is inputted into the system. The Shopify is updated to reflect the relavant updates | Packed stock fails to get added to the container in the system. Shopify does not get update correctly | There are no free containers. Shopify API call failed | The manager should receive a notification/log of everything that’s been added |
| View incoming orders | Volunteer can view a list of pending orders with accurate details | Pending orders list fails to load or shows incorrect data | Database error, server timeout, Shopify API call failure | Orders should be updated in real-time. Taken orders should be displayed on the manager log |
| Scan items | *Eagle* correctly identifies the item from the scan and the system displays which container to store the item in | Item is unable to be identified. Item is incorrectly identified | Label not clear in photo. Item not part of database. Item lacks a label | Users should be able to manually input the item name |