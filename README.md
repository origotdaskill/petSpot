# PetSpot

## Introduction

Welcome to PetSpot, a social media app for pet lovers! Share photos and connect with other pet enthusiasts. Whether you have a cat, dog, bird, or any other pet, PetSpot is the place for you. 

[Check out the live app here](https://petspot-frontend-theta.vercel.app/)  
[Read our final project blog article](https://origotdaskill.substack.com/p/building-petspot-my-journey-of-creating)  
[Connect with the authors on LinkedIn](https://www.linkedin.com/in/walid-horri-9ty/)

![PetSpot Screenshot](https://raw.githubusercontent.com/origotdaskill/petSpot/main/client/public/assets/hero-01.png)

### Inspiration

PetSpot was inspired by my love for pets and the joy they bring to our lives. I wanted to create a platform where pet owners can share their experiences, tips, and stories, creating a supportive and engaging community.

### Challenges and Learnings

Building PetSpot presented several technical challenges. Optimizing the performance for image uploads were particularly tough. However, these challenges provided invaluable learning experiences. One major hurdle was ensuring the scalability of the app to handle a large number of users and posts.

### Future Vision

In the next iteration, I plan to add features such as direct messaging, pet-related events, and enhanced search functionality. The goal is to make PetSpot a comprehensive platform for all pet-related activities.


## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps

1. Clone the repo:
   ```sh
   git clone https://github.com/origotdaskill/petSpot.git
   ```
2. Navigate to the project directory:
   ```sh
   cd PetSpot/server 
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=your_port
   ```

5. Start the server:
   ```sh
   npm run dev
   ```

## Usage

1. Register a new account or log in with an existing one.
2. Create a profile for your pet(s).
3. Start posting photos and stories.
4. Interact with other pet lovers by liking and commenting on their posts.

## Contributing

We welcome contributions to PetSpot! Here's how you can help:

1. Fork the project.
2. Create your feature branch:
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a pull request.

## Related Projects

Here are a few projects related to PetSpot:

- [PetFinder](https://www.petfinder.com/) - Find adoptable pets near you.
- [PetSocial](https://github.com/shivmangalsing97/petsocial.git) - Another social media platform for pets.

## License

Distributed under the MIT License. See `LICENSE` for more information.










