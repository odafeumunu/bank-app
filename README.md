# SeaBank Mobile Banking App 💰

## Overview
This project is a modern, responsive React frontend application simulating a secure mobile banking experience. It features a comprehensive user authentication flow, facial verification for enhanced security, and a functional dashboard with fund transfer capabilities, demonstrating a robust client-side architecture.

## Features
*   **User Authentication & Onboarding**: Seamless sign-up, login, OTP verification, email verification, and a multi-step user details collection process.
*   **Facial Recognition Integration**: Advanced biometric verification for secure login, enhancing user account protection.
*   **Transaction PIN Management**: Secure creation and validation of a 4-digit transaction PIN for financial operations.
*   **Interactive Dashboard**: Provides a clear overview of account balance, spending, and earnings, along with quick access to key banking activities.
*   **Fund Transfer System**: Allows users to initiate transfers to both same-bank and other-bank accounts with account verification simulation.
*   **Dynamic UI Elements**: Features like collapsible sidebars, modals for PIN entry, and confirmation screens provide a smooth user experience.
*   **Responsive Design**: Built to offer a consistent experience across various mobile devices.
*   **Toast Notifications**: Provides real-time feedback for user actions and system alerts using `react-toastify`.

## Getting Started
To get this project up and running on your local machine, follow these steps.

### Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/odafeumunu/bank-app.git
    ```
2.  **Navigate to Project Directory**:
    ```bash
    cd bank-app/my-app
    ```
3.  **Install Dependencies**:
    Install all required packages using npm:
    ```bash
    npm install
    ```

### Environment Variables
This project primarily runs client-side and does not explicitly require external environment variables for basic functionality. However, for a production environment, you would typically configure API endpoints, authentication keys, and other sensitive information.

### Running the Application
To start the development server:
```bash
npm run dev
```
The application will typically be accessible at `http://localhost:5173/` (or another port if 5173 is in use).

## Usage
Once the application is running, you can interact with it as follows:

### Authentication Flow
1.  **Home Page**: You'll land on the home page with options to `Login` or `Create an account`.
2.  **Sign Up**:
    *   Click `Create an account`.
    *   Enter a mobile number (step 1/9). Click `Proceed`.
    *   **OTP Verification**: Enter any 4 digits (e.g., `1234`) for OTP verification (step 2/9). It will automatically proceed.
    *   **Email Verification**: Enter an email (e.g., `test@example.com`) for email verification (step 3/9). Click `Proceed`.
    *   **Email OTP**: Enter any 4 digits (e.g., `1234`) for email OTP (step 4/9). It will automatically proceed.
    *   **User Details (Part 1)**: Fill in personal details like first name, last name, DOB, and gender (step 5/9). Click `Proceed`.
    *   **User Details (Part 2)**: Simulate facial recognition (tap "Tap to scan face"), provide residential address, state, LGA, and residency type (step 6/9). Click `Proceed`.
    *   **User Details (Part 3)**: Create and confirm a password, enable fingerprint/Face ID (optional), and agree to terms (step 7/9). Click `Proceed`.
    *   **Create Transaction PIN**: Enter a 4-digit PIN (e.g., `1234`) using the keypad (step 8/9). This will complete the sign-up process and redirect to login.
3.  **Login**:
    *   Use the credentials:
        *   **Email**: `test@gmail.com`
        *   **Password**: `Testing_123`
    *   Upon successful login, you'll be prompted to `Enable Facial Verification`.
    *   Click `Enable Now` to proceed to face verification.
    *   **Face Verification**: Click `Start Scan`. A simulated scan will occur. Upon success, you will be redirected to the Dashboard.

### Dashboard Functionality
*   **Balance Overview**: View your available balance, total spent, and total earned. You can toggle balance visibility using the eye icon.
*   **Account Number**: Copy your account number to the clipboard.
*   **Top Up**: Click `Top up` to simulate adding funds to your account.
*   **Activity Section**:
    *   **Transfer**: Click `Transfer` to open the transfer hub.
        *   Choose between `Send to Other Banks` or `Send with my SecBank Account`.
        *   **Bank Transfer**: Enter a 10-digit account number and select a bank. The account name "Michael Johnson" will be mocked for verification.
        *   Click `Proceed`.
        *   **Amount Entry**: Enter an amount using the keypad (e.g., `1000`). Add an optional narration.
        *   Click `Send Money`.
        *   **Confirm Payment**: Review transaction details and click `Confirm Payment`.
        *   **Enter Transaction PIN**: Input your 4-digit transaction PIN (default `1234`).
        *   Upon successful PIN entry, a success message appears. Click `Close` to return to the dashboard.
*   **Sidebars**: Access the main menu (hamburger icon) or profile details (profile image).


## Technologies Used
| Technology         | Description                                        | Link                                                                        |
| :----------------- | :------------------------------------------------- | :-------------------------------------------------------------------------- |
| **React**          | JavaScript library for building user interfaces    | [https://react.dev/](https://react.dev/)                                    |
| **Vite**           | Next-generation frontend tooling                   | [https://vitejs.dev/](https://vitejs.dev/)                                  |
| **React Router**   | Declarative routing for React                      | [https://reactrouter.com/](https://reactrouter.com/)                        |
| **React Icons**    | Customizable React icons                           | [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/) |
| **React Toastify** | Notification library for React                     | [https://fkhadra.github.io/react-toastify/](https://fkhadra.github.io/react-toastify/) |
| **Swiper**         | Modern touch slider                                | [https://swiperjs.com/](https://swiperjs.com/)                              |
| **ESLint**         | Pluggable JavaScript linter                        | [https://eslint.org/](https://eslint.org/)                                  |

## Contributing
We welcome contributions to the SeaBank Mobile Banking App! If you have suggestions for improvements, new features, or bug fixes, please follow these guidelines:

*   **Fork the repository** 🍴.
*   **Create a new branch** for your feature or fix: `git checkout -b feature/your-feature-name` or `fix/bug-description` 🚀.
*   **Make your changes** and ensure they align with the existing code style.
*   **Write clear, concise commit messages** describing your changes.
*   **Test your changes** thoroughly to avoid introducing new issues.
*   **Push your branch** to your forked repository.
*   **Open a Pull Request** against the `main` branch of this repository 🤝.
*   Provide a detailed description of your changes in the pull request.

## License
This project is currently unlicensed. Please contact the author for licensing information.