import toDoListImg from "../Assets/to-do-list.png";
import weatherAppImg from "../Assets/weather-app.png";
import itemListApp from "../Assets/item-list-app.png";
import cvAppImg from "../Assets/cv-app.png";
import restaurantAppImg from "../Assets/restaurant-app.png";
import clothingApp from "../Assets/clothing-app.png";

const projects = [
  {
    id: 1,
    title: "Simple Todo List App",
    description:
      "A basic todo list application built using HTML, CSS, and JavaScript. Users can add, edit, and delete tasks.",
    image: toDoListImg,
    link: "https://github.com/Eliina0/To-do-list-project",
    category: "front-end",
    details:
      "This application features a user-friendly interface where users can manage their tasks efficiently. Implemented local storage to persist tasks between sessions and utilized JavaScript for DOM manipulation.",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather application built with HTML, CSS, and JavaScript, which fetches real-time weather data using the OpenWeather API.",
    image: weatherAppImg,
    link: "https://github.com/Eliina0/Weather-app",
    category: "front-end",
    details:
      "The app allows users to search for weather information by city. It includes features like temperature display in Celsius and Fahrenheit, dynamic background changes based on weather conditions, and error handling for invalid inputs.",
  },
  {
    id: 3,
    title: "Item List App",
    description:
      "A full-stack application built with React and PHP that allows users to add items to a list, as well as delete multiple items at once.",
    image: itemListApp,
    link: "https://github.com/Eliina0/scandiwebProject",
    category: "full-stack",
    details:
      "This application utilizes a RESTful API for managing items and incorporates user authentication. It features a responsive design and implements state management using React hooks, ensuring a seamless user experience.",
  },
  {
    id: 4,
    title: "CV Builder App",
    description:
      "A web application that allows users to create and customize their CVs. Built using React for the frontend and PHP for backend processing.",
    image: cvAppImg,
    link: "#",
    category: "full-stack",
    details:
      "The CV Builder App provides templates and customization options for users to create professional CVs. Users can download their CVs in PDF format and the application uses form validation to ensure completeness.",
  },
  {
    id: 5,
    title: "BiteBuzz - Restaurant Reservation & Food Ordering App",
    description:
      "An app that allows users to reserve a table at a restaurant or order food for delivery. Built using React for the frontend and PHP for the backend.",
    image: restaurantAppImg,
    link: "#",
    category: "full-stack",
    details:
      "BiteBuzz includes features for searching restaurants, viewing menus, and placing orders. It also offers user authentication and a dashboard for restaurant owners to manage reservations and orders.",
  },
  {
    id: 6,
    title: "StyleHub - Clothing & Accessories E-commerce App",
    description:
      "An e-commerce platform for buying clothes and accessories, built using React for the frontend and Express.js for the backend.",
    image: clothingApp,
    link: "#",
    category: "full-stack",
    details:
      "StyleHub provides a comprehensive shopping experience with product filtering, user reviews, and a secure checkout process. The app implements Redux for state management and includes payment integration for a seamless transaction experience.",
  },
];

export default projects;
