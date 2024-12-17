# **Backend API Documentation**

## **1. `/users/register` Endpoint**

### **Description**  
Registers a new user by creating a user account with the provided information. It securely hashes the password and generates a JWT token for authentication.

---

### **HTTP Method**  
`POST`

---

### **Request Body**  
The request body should be in JSON format and include the following fields:

| **Field**                   | **Type**   | **Required** | **Description**                        |
|-----------------------------|------------|--------------|----------------------------------------|
| `fullname`                 | Object     | Yes          | Contains the user's first and last name. |
| `fullname.firstname`       | String     | Yes          | User's first name (minimum 3 characters). |
| `fullname.lastname`        | String     | Optional     | User's last name (minimum 3 characters). |
| `email`                    | String     | Yes          | User's email address (valid email format). |
| `password`                 | String     | Yes          | User's password (minimum 6 characters). |

---
