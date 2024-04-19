// ES6 import statements
import satellite from './src/satellite.js';
import iridium from './src/iridium.js';

// It appears that 'location' is declared but not used anywhere within this file.
// If 'location' is not used, it should be removed or commented out unless it's for future use.
const location = [39.9042, 116.4074, '%E5%8C%97%E4%BA%AC%E5%B8%82', 52, 'ChST'];

// Uncomment this if 'names' will be used later or remove it if it's not needed.
// const names = ["ISS", "IridiumFlares"];

// Running the getTable function for the satellite module
satellite.getTable({
  target: 25544,  // Example satellite ID for ISS
  pages: 4,       // Number of pages to fetch
  root: './public/data/'  // Directory to store data
});

// Uncomment the below code to run the getTable function for the iridium module if needed
/*
iridium.getTable({
  pages: 4,       // Number of pages to fetch
  root: "./public/data/"  // Directory to store data
});
*/

// Note: Ensure that the `satellite` and `iridium` modules are properly exporting a `getTable` function.
