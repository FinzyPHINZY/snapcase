# SnapCase

SnapCase is a web application that allows users to import a picture and order a custom phone case with the picture as the case cover. I built this to showcase my mastery in building industry standard web applications with beautiful user interfaces and writing high quality code as well as my expertise with TypeScript.

**Link to project:** https://snapcase-one.vercel.app

![alt tag](http://placecorgi.com/1200/650)

## How I Built This

### Tools and Libraries used in this project includes:

shadcn, clsx, auth with Kinde, React Animation Library, uploadthing, zod, neon, sharp, PostgreSQL, Prisma, HTML Canvas Element, TanStack Query, useMutation, Stripe, Webhook Events, React Confetti, React-Email, Button Loading State, Meta Data

### Features

- **File Upload**: Users can upload a picture to be used on their custom phone case.
- **Order Processing**: The application handles order submissions, processing, and confirmation.
- **Admin Dashboard**: Displays sales data and weekly sales goals for admin users.
- **Secure Authentication**: Uses Kinde for secure user authentication.
- **Payment Integration**: Stripe is used to handle all payment transactions securely.
- **Real-Time Updates**: Uses webhooks to provide real-time updates on order status.
- **Visual Feedback**: Button loading states and confetti effects provide users with interactive feedback.
- **Secure Admin Page**: Only available to admin users, containing sales data and weekly sales goals. Redirects to the home page if the user is not an admin.

## Optimizations

To ensure that SnapCase performs efficiently and provides a seamless user experience, several optimization techniques and tools were implemented:

- React Query: Utilized for advanced data fetching, caching, and synchronization, ensuring that the application state is always up-to-date without redundant network requests.
- Zod: Employed as a TypeScript-first schema declaration and validation library to maintain robust data integrity and validation throughout the application.
- Sharp: Leveraged for high-performance image processing, enabling quick and efficient manipulation of images uploaded by users.
- TanStack Query: Integrated for efficient fetching, caching, synchronizing, and updating of server state, ensuring that the client-side data is always consistent with the server.
- Webhook Events: Implemented to handle real-time updates from Stripe, ensuring that users receive immediate feedback on payment and order status changes.
- Button Loading States: Added for visual feedback during operations, improving the user experience by clearly indicating ongoing processes.
- Detailed Metadata: Managed metadata for SEO and social media sharing to enhance the application's visibility and user engagement across different platforms.
- Uploadthing: Used to handle file uploads, providing a smooth and reliable upload experience for users when they submit their custom images.
  these tools and techniques ensures a high-performance, reliable, and user-friendly experience.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FinzyPHINZY/snapcase.git
   ```

2. Navigate to the project directory:
   ```bash
   cd SnapCase
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add your environment variables: [KINDE_CLIENT_ID , KINDE_CLIENT_SECRET , KINDE_ISSUER_URL , KINDE_SITE_URL , KINDE_POST_LOGOUT_REDIRECT_URL , KINDE_POST_LOGIN_REDIRECT_URL , ADMIN_EMAIL , UPLOADTHING_SECRET , UPLOADTHING_APP_ID , DATABASE_URL , STRIPE_SECRET_KEY , NEXT_PUBLIC_SERVER_URL , STRIPE_WEBHOOK_SECRET , RESEND_API_KEY]

5. Start the development server:
   ```bash
   npm run dev
   ```

### Usage

1. **Upload an Image**: Users can upload an image to see a preview of their custom phone case.
2. **Place an Order**: Fill in the necessary details and complete the payment process using Stripe.
3. **Admin Dashboard**: Admin users can access the dashboard to view sales data and track weekly sales goals.

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

### Contact

If you have any questions, feedback or suggestions for improvements, please contact me at [finzyphinzyy@proton.me].
