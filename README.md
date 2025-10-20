# Headless CMS

A basic headless CMS built with Node.js.

## Features

*   Content Management (Create, Read, Update, Delete)
*   Media Management (Upload, Retrieve)
*   Authentication (Registration, Login)
*   API Endpoints for Content and Media

## Technologies

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JWT (JSON Web Tokens)
*   Multer (for file uploads)

## Setup

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Configure the database connection in `config/database.js`.
4.  Run the server: `npm start`

## API Endpoints

### Authentication

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Login with an existing user.

### Content

*   `GET /api/content`: Get all content.
*   `GET /api/content/:id`: Get content by ID.
*   `POST /api/content`: Create new content (requires authentication).
*   `PUT /api/content/:id`: Update content by ID (requires authentication).
*   `DELETE /api/content/:id`: Delete content by ID (requires authentication).

### Media

*   `POST /api/media/upload`: Upload a media file (requires authentication).
*   `GET /api/media/:filename`: Retrieve a media file.
