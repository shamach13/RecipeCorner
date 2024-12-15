Recipe Corner

Recipe Corner is a mobile-friendly recipe management app built using React Native and Expo. It allows users to browse recipes by categories, search for specific dishes, view detailed recipe information, and save their favorite recipes. The app uses API integration to fetch real-time recipe data and provides a seamless user experience.

Features

Recipe Categories: Browse recipes by categories such as Breakfast, Lunch, Dinner, etc.

Search Functionality: Search for recipes by name with a responsive search bar.

Detailed Recipe View: Access detailed information about ingredients and instructions for each recipe.

Favorites Management: Save favorite recipes and view them in a dedicated section.

Mobile Optimization: Fully responsive design, optimized for mobile devices.

Offline Caching: Cached recipe data for offline viewing.

Technologies Used

React Native: For building the app's front-end.

Expo: To streamline development and deployment.

Axios: For API integration to fetch recipes.

AsyncStorage: For caching data locally and managing favorites.

React Navigation: For seamless in-app navigation.

Spoonacular API: To fetch real-time recipe data.

Screens

Home Screen: Displays recipe categories.

Recipe List Screen: Shows a list of recipes for a selected category.

Recipe Detail Screen: Provides detailed recipe instructions and ingredients.

Favorites Screen: Lists all saved favorite recipes.

Installation

Clone the repository:

git clone https://github.com/yourusername/recipe-corner.git

Navigate to the project directory:

cd recipe-corner

Install dependencies:

npm install

Start the development server:

expo start

How to Use

Launch the app on your device or emulator.

Navigate through recipe categories from the Home Screen.

Search for recipes using the search bar on the Recipe List Screen.

View detailed instructions and ingredients on the Recipe Detail Screen.

Save your favorite recipes for quick access in the Favorites Screen.

API Key Setup

This project uses the Spoonacular API to fetch recipe data. To use the app, you need to obtain a free API key from Spoonacular and replace the placeholder in the code:

apiKey: 'your-api-key-here'

Future Enhancements

Add user authentication for personalized recipe management.

Implement advanced filtering and sorting options.

Enable social sharing of recipes.

License

This project is licensed under the MIT License.

Acknowledgments

Spoonacular API for providing recipe data.

Inspiration from modern recipe apps and community feedback.

