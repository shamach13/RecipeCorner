# Recipe Corner  

Recipe Corner is a mobile-friendly recipe management app built using React Native and Expo. It allows users to explore categorized recipes, view detailed instructions and ingredients, search recipes, and manage favorites.  

## Features  

- **Categorized Recipes**: Browse recipes by category such as Breakfast, Lunch, Dinner, and more.  
- **Search Functionality**: Easily search for recipes within each category.  
- **Detailed Views**: Access detailed instructions, ingredients, and images for each recipe.  
- **Favorites Management**: Save your favorite recipes for quick access.  
- **Offline Support**: Cached data ensures functionality even without internet access.  

## Tech Stack  

- **Frontend**: React Native with Expo  
- **API**: Spoonacular Recipe API (or an alternative API) for fetching recipe data  
- **State Management**: React Hooks  
- **Storage**: AsyncStorage for managing cached and favorite recipes  

## Installation  

1. Clone this repository:  
   ```bash  
   git clone https://github.com/your-username/recipe-corner.git  
   cd recipe-corner  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Start the development server:  
   ```bash  
   npm start  
   ```  
4. Run on a simulator or physical device using Expo Go.  

## Folder Structure  

```
Recipe-Corner/
├── app/
│   ├── index.js                  # Home screen
│   ├── recipes/[category].js     # Recipe list by category
│   ├── recipe/[id].js            # Recipe details
│   ├── recipes/favourites.js     # Favorites list
├── components/
│   ├── AppBar.js                 # App bar for navigation
├── package.json                  # Project metadata
```

## Usage  

- Launch the app using Expo.  
- Navigate through categories and select recipes to view details.  
- Use the search bar to find specific recipes.  
- Mark recipes as favorites for quick access later.  

## API Key Setup  

Replace the placeholder API key in the code with your Spoonacular API key or an alternative recipe API.  

```js  
apiKey: 'your-api-key-here'  
```  

## License  

This project is licensed under the MIT License.  

--- 
