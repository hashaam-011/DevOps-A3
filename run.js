import satellite from './src/satellite.js'
import iridium from './src/iridium.js'


const location = [39.9042, 116.4074, '%E5%8C%97%E4%BA%AC%E5%B8%82', 52, 'ChST']

satellite.getTable({
  target: 25544, // Example satellite ID for ISS
  pages: 4, // Number of pages to fetch
  root: './public/data/' // Directory to store data
})


