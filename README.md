# SeaBank Mobile App 📱

## ✨ Overview

SeaBank Mobile App is a modern, responsive single-page application built with React, designed to provide a seamless and secure mobile banking experience. It features a comprehensive user authentication flow, multi-factor verification (OTP, email, facial recognition), a personalized dashboard, and interactive financial insights. This project showcases robust frontend development practices, state management, and an intuitive user interface.

## 🛠️ Installation

Follow these steps to set up the project locally:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/odafeumunu/bank-app.git
    ```
2.  **Navigate to Project Directory**:
    ```bash
    cd bank-app/my-app
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
    or if you prefer `yarn`:
    ```bash
    yarn install
    ```

## 🚀 Usage

To run the application in development mode:

```bash
npm run dev
```

This will start the development server, usually on `http://localhost:5173`.
The application will automatically reload if you make changes.

To build the application for production:

```bash
npm run build
```

This command bundles the React app into static files in the `dist` directory, ready for deployment.

## ✨ Features

*   **Secure User Authentication**:
    *   **Sign Up & Login**: Robust entry points for new and existing users.
    *   **Multi-step Onboarding**: A guided process for new user registration, collecting essential details like phone, email, personal information, and address.
*   **Advanced Verification Flows**:
    *   **OTP Verification**: Secure one-time password verification for mobile numbers.
    *   **Email Verification**: Ensures email address validity for account security.
    *   **Facial Recognition**: Optional biometric authentication for enhanced login security.
    *   **Transaction PIN Creation**: Sets up a secure four-digit PIN for transactions.
*   **Personalized Dashboard**:
    *   **Balance Overview**: Displays available balance, spent, and earned amounts.
    *   **Account Details**: Shows account number with a quick copy functionality.
    *   **Activity Section**: Provides quick access to key functionalities like Transfer, My Card, and Insights.
    *   **Verification Progress Tracker**: Guides users through profile completion with a visual progress bar.
    *   **News & Promotions**: Features dynamic content and referral program details.
*   **Smooth User Experience**:
    *   **Protected Routes**: Ensures only authenticated users can access sensitive areas like the dashboard.
    *   **Scroll-to-Top Navigation**: Automatically scrolls to the top on route changes for a consistent experience.
    *   **Toast Notifications**: Provides timely feedback for user actions (e.g., login success, errors).
    *   **Image Slider**: Engaging introductory slides on the homepage using Swiper.

## 💻 Technologies Used

| Technology         | Description                                       | Link                                                                  |
| :----------------- | :------------------------------------------------ | :-------------------------------------------------------------------- |
| **React**          | Frontend JavaScript library for building UIs.     | [React](https://react.dev/)                                           |
| **Vite**           | Next-generation frontend tooling.                 | [Vite](https://vitejs.dev/)                                           |
| **React Router**   | Declarative routing for React applications.       | [React Router](https://reactrouter.com/)                              |
| **React Icons**    | Collection of popular icons for React.            | [React Icons](https://react-icons.github.io/react-icons/)             |
| **React Toastify** | Easy to use React-Toastify for notifications.     | [React Toastify](https://fkhadra.github.io/react-toastify/)           |
| **Swiper**         | Modern touch slider for mobile websites and apps. | [Swiper](https://swiperjs.com/)                                       |
| **ESLint**         | Pluggable JavaScript linter for code quality.     | [ESLint](https://eslint.org/)                                         |

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to SeaBank Mobile App, please follow these steps:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature-name` or `git checkout -b bugfix-name`.
3.  **Make your changes** and ensure they adhere to the project's coding style.
4.  **Write clear, concise commit messages**.
5.  **Push your branch** to your forked repository.
6.  **Open a pull request** describing your changes in detail.

Please ensure your code passes all linting checks before submitting a pull request.


## 🏆 Badges

[![React.js](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![npm version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)