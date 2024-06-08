# The Dragon News

The Dragon News is a comprehensive news website where users can view all news articles on the homepage and filter them by category. The platform includes authentication features using Firebase for login and registration, with options for Google and GitHub logins. Additionally, users can read detailed news articles and see related news within the same category.

## Live Website

[The Dragon News](https://the-dragon-news24.netlify.app/)

## Repositories

- Client Site: [GitHub Repository](https://github.com/mafizul247/the-dragon-news-client.git)
- Server Site: [GitHub Repository](https://github.com/mafizul247/the-dragon-news-server.git)

## Features

### Client Side

- **Home Page:** Displays all news articles.
- **Category Filtering:** Users can filter news by category using the left navigation bar.
- **Read More:** Clicking the "Read More" button redirects to a detailed news page.
- **Related News:** The detailed news page shows related news articles from the same category.
- **Authentication:** 
  - Login and registration using Firebase.
  - Google and GitHub login integration.
  - User Context API for managing user state.
- **Private Route:** Ensures only authenticated users can access certain routes. After login, users are redirected to the targeted page.
- **Date Formatting:** Utilizes Moment.js for date formatting.
- **Text Animation:** Uses Marquee for animated text.
- **Rating System:** Integrates React Rating for article ratings.
- **Styling:** Uses Bootstrap for responsive design and styling.

### Server Side

- **Express.js:** Serves as the backend framework.
- **Middleware:** Uses CORS for handling Cross-Origin Resource Sharing.

## Getting Started

### Prerequisites

- Node.js
- Firebase account
- Git

### Installation

1. **Clone the repositories:**

   ```bash
   git clone https://github.com/mafizul247/the-dragon-news-client.git
   git clone https://github.com/mafizul247/the-dragon-news-server.git
