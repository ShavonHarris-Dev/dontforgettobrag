// build.js - Copy necessary files for Chrome extension
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('Starting the build process for the Chrome extension...');

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  console.log('Creating dist directory...');
  fs.mkdirSync('dist');
}

try {
  // Copy manifest to dist
  console.log('Copying manifest.json to dist folder...');
  fs.copyFileSync('manifest.json', 'dist/manifest.json');
  
  // Copy service worker to dist
  console.log('Copying service-worker.js to dist folder...');
  fs.copyFileSync('service-worker.js', 'dist/service-worker.js');
  
  // If you have a popup.html file, copy it too
  if (fs.existsSync('popup.html')) {
    console.log('Copying popup.html to dist folder...');
    fs.copyFileSync('popup.html', 'dist/popup.html');
  }
  
  // If you have a popup.js file, copy it too
  if (fs.existsSync('popup.js')) {
    console.log('Copying popup.js to dist folder...');
    fs.copyFileSync('popup.js', 'dist/popup.js');
  }
  
  // Copy any icons if they exist
  // First check if there's an icons directory
  if (fs.existsSync('icons')) {
    console.log('Copying icons...');
    if (!fs.existsSync('dist/icons')) {
      fs.mkdirSync('dist/icons', { recursive: true });
    }
    
    const iconFiles = fs.readdirSync('icons');
    iconFiles.forEach(file => {
      fs.copyFileSync(`icons/${file}`, `dist/icons/${file}`);
    });
  } else if (fs.existsSync('public/icons')) {
    console.log('Copying icons from public directory...');
    if (!fs.existsSync('dist/icons')) {
      fs.mkdirSync('dist/icons', { recursive: true });
    }
    
    const iconFiles = fs.readdirSync('public/icons');
    iconFiles.forEach(file => {
      fs.copyFileSync(`public/icons/${file}`, `dist/icons/${file}`);
    });
  }
  
  console.log('Extension files copied successfully!');
} catch (error) {
  console.error('Error during the build process:', error);
  process.exit(1);
}