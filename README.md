Here's a detailed `README.md` file for your Restyy™ API application:

---

# Restyy™ API Client

Restyy™ is a simplified API testing client built with Next.js, TypeScript, React, Tailwind CSS, and Axios. It allows users to easily make HTTP requests (GET, POST, PUT, DELETE) and view the results with syntax-highlighted JSON responses. This project mimics the core functionality of popular API clients like Thunder Client, providing a minimalistic interface for testing and interacting with APIs.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **HTTP Methods:** Supports GET, POST, PUT, and DELETE methods for making requests.
- **Dynamic Request Body:** For POST, PUT, and DELETE methods, you can input JSON data in the request body.
- **API URL Input:** Enter the API endpoint directly into the URL input field.
- **Syntax Highlighting:** Displays JSON responses with beautiful syntax highlighting using `react-syntax-highlighter`.
- **Responsive Design:** Built with Tailwind CSS, the app is fully responsive across devices.
- **Footer with Links:** A customizable footer with links to common sections like Privacy Policy and Contact.
- **Custom Font:** Integrates a custom font named "happy" using `@font-face`.

## Technologies

- **Next.js:** A React framework for building server-rendered applications.
- **TypeScript:** Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **React:** A JavaScript library for building user interfaces.
- **Axios:** Promise-based HTTP client for making requests.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **React-Syntax-Highlighter:** Library to display formatted code with syntax highlighting.
- **@headlessui/react:** Utility components for building accessible UI components.
- **@heroicons/react:** Icons for UI elements.

## Installation

To run the project locally, follow these steps:

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn (>= 1.x)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/restyy-api-client.git
   cd restyy-api-client
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Select an HTTP Method:**
   Use the dropdown to select one of the available HTTP methods (GET, POST, PUT, DELETE).

2. **Enter API URL:**
   Input the desired API endpoint in the text field.

3. **Request Body (Optional):**
   For POST, PUT, and DELETE methods, you can enter a request body in JSON format.

4. **Send Request:**
   Click the "Send" button to make the request. The response will be displayed with syntax highlighting below the input fields.

5. **Response:**
   If successful, the JSON response from the API will be shown in a formatted and highlighted manner. If there's an error, it will display an error message.

### Example Usage:

- **GET Request:**
   Enter `https://jsonplaceholder.typicode.com/posts` and select GET to retrieve posts from the API.

- **POST Request:**
   Enter `https://jsonplaceholder.typicode.com/posts`, select POST, and enter a request body like:
   ```json
   {
     "title": "foo",
     "body": "bar",
     "userId": 1
   }
   ```
   Click "Send" to create a new post.

## Folder Structure

```plaintext
.
├── components
│   ├── Dropdown.tsx            # Dropdown component for selecting HTTP methods
│   ├── Footer.tsx              # Footer component at the bottom of the page
├── pages
│   ├── index.tsx               # Main page of the application
├── public
│   ├── fonts                   # Custom fonts directory
├── styles
│   ├── globals.css             # Global CSS, including custom fonts and Tailwind utilities
├── tailwind.config.js          # Tailwind configuration file
├── README.md                   # Project documentation
└── package.json                # Dependencies and scripts
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/restyy-api-client/issues) to see if you can help with any open issues.

### Steps to Contribute:

1. Fork this repository.
2. Create a new branch with your feature or bug fix (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request to this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Feel free to modify the template as needed! Make sure to update the relevant sections with your GitHub links or project details.
