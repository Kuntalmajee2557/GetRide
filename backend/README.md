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


#### **Response**

**Success (201)**  
Returns the created user's details and a JWT token.

**Error (400)**  
Validation errors or invalid input.

---


## **2. `/users/login` Endpoint**

#### **Description**  
Authenticates a user with their email and password. If successful, it generates a JWT token.

#### **HTTP Method**  
`POST`

#### **Request Body**  
The request body should be in JSON format and include the following fields:

| **Field**   | **Type** | **Required** | **Description**                               |
|-------------|----------|--------------|-----------------------------------------------|
| `email`     | String   | Yes          | User's registered email address (valid format). |
| `password`  | String   | Yes          | User's password (minimum 6 characters).         |

#### **Response**

**Success (200)**  
Returns a JSON object containing the JWT token and user details.

**Error (400)**  
Validation errors.

**Error (400)**  
Invalid email or password.

---