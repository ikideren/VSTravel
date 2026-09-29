# VSTravel

VSTravel is a static travel-agency website prototype for exploring Indonesian destinations and trying sample contact and booking flows. It was created as a Human-Computer Interaction project.

## Pages

- `index.html` - Home page with featured destinations and an introduction to VSTravel.
- `destination.html` - Destination listings with filters for Bali, Java, Sumatra, and Sulawesi.
- `about.html` - Company story, mission, and values.
- `contact.html` - Office details and a validated contact form.
- `travel-now.html` - Booking form, travel benefits, and FAQs.

## Features

- Responsive navigation with a mobile menu.
- Client-side destination filtering and expandable FAQ items.
- Contact and booking form validation, including conditional input for another destination.
- Shared styling and local image and icon assets.

> This is a front-end prototype. Forms validate in the browser and show a confirmation message; they do not send or store data, process payments, or create real bookings.

## Run Locally

The site uses plain HTML, CSS, and JavaScript; there is no build step. To serve it locally, install [Node.js](https://nodejs.org/) and run this from the project root:

npx --yes http-server . -p 8000 -c-1

Open <http://localhost:8000> in your browser. Press `Ctrl+C` in the terminal to stop the server. You can also open `index.html` directly, though a local server is recommended.

## Project Structure


.
├── index.html
├── destination.html
├── about.html
├── contact.html
├── travel-now.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
	├── icons/
	└── images/

