// build.js - Simple script to copy extension files
import fs from 'fs';
import process from 'node:process';

console.log('Starting the build process for the Chrome extension...');

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
  
  // Copy icons from public/icons
  if (fs.existsSync('public/icons')) {
    console.log('Copying icons from public/icons directory...');
    if (!fs.existsSync('dist/icons')) {
      fs.mkdirSync('dist/icons', { recursive: true });
    }
    
    const iconFiles = fs.readdirSync('public/icons');
    iconFiles.forEach(file => {
      console.log(`  Copying icon: ${file}`);
      fs.copyFileSync(`public/icons/${file}`, `dist/icons/${file}`);
    });
  } else {
    console.log('No icons found in public/icons directory');
    console.log('Creating empty icons directory in dist anyway...');
    if (!fs.existsSync('dist/icons')) {
      fs.mkdirSync('dist/icons', { recursive: true });
    }
  }
  
  console.log('Extension files copied successfully!');
} catch (error) {
  console.error('Error during the build process:', error);
  process.exit(1);
}