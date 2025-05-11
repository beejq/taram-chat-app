# TARAM-CHAT-APP

Credits to Codesistency for the Tutorial: https://www.youtube.com/watch?v=ntKkVrQqBYY

![image](https://github.com/user-attachments/assets/2c964216-e9a7-4eee-9da9-20291d266cde)


# SET UP PROJECT LOCALLY

Step-by-Step Guide:

1. Clone the Repository:

        git clone https://github.com/beejq/taram-chat-app

2. Install Dependencies:
  - Navigate to the frontend and backend folders separately and run:

        npm install

3. Set Environment Variables:
  - Create a .env file in the backend folder and add:
    
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        CLOUDINARY_CLOUD_NAME=your_cloud_name
        CLOUDINARY_API_KEY=your_api_key
        CLOUDINARY_API_SECRET=your_api_secret

4. Run the Application:
  - Go to Backend Folder and:

        npm run dev

  - Go to Frontend Folder and:

        npm run dev
