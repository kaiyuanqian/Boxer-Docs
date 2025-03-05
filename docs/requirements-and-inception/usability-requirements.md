---
sidebar_position: 2
---

# Usability requirements

| Task | Success condition | Failure condition | Potential cause | Notes & Consideration |
|------|-------------------|-------------------|-----------------|-----------------------|
| Log in to MedPantry | User is successfully logged in to the webpage using given account and password from admin and gets directed to dashboard. | User able to log in with wrong/random credentials. User unable to log in with valid credentials. | Server being down. Credentials does not exist in database. Error in database | Failure will prompt the user to retry login |