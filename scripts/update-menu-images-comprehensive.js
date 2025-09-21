#!/usr/bin/env node

/**
 * Comprehensive script to update all menu images with better matching Unsplash URLs
 * This provides fallback images until the original processed images are uploaded
 */

const fs = require('fs');
const path = require('path');

// Better image mappings for each dish type
const imageMappings = {
  // Tortillas - Spanish potato omelets
  'tortilla-de-patatas': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center&q=80',
  'tortilla-espanola': 'https://images.unsplash.com/photo-1607877200978-3cab430e00cd?w=600&h=400&fit=crop&crop=center&q=80',
  'tortilla-del-huerto': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Paellas - Rice dishes
  'paella-mar-y-tierra': 'https://images.unsplash.com/photo-1625937759424-8b4444a8b2b1?w=600&h=400&fit=crop&crop=center&q=80',
  'paella-del-mar': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  'paella-cazadora': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center&q=80',
  'paella-del-huerto': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  'arroz-con-pollo': 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Stews and Pot Dishes
  'cocido-madrileno': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center&q=80',
  'fabada-asturiana': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center&q=80',
  'champinones-al-ajillo': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  'gambas-al-ajillo': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Desserts
  'natillas': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center&q=80',
  'crema-catalana': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center&q=80',
  'leche-nevada': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Beverages
  'sangria': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop&crop=center&q=80',
  'zurracapote': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop&crop=center&q=80',
  'tinto-de-verano': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop&crop=center&q=80',
  'horchata-de-chufa': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Tapas
  'croquetas-de-jamon': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  'patatas-bravas': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  'pulpo-a-la-gallega': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  'pinchos-morunos': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Sandwiches
  'bocadillo-de-jamon': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  'bocadillo-de-tortilla': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center&q=80',
  'bocadillo-de-chorizo': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Baked Goods
  'empanada-gallega': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  'hornazo': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80',
  'pan-con-tomate': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Vegetables
  'esparragos-con-pimientos': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  'pimientos-del-piquillo': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  'alcachofas-a-la-plancha': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80',
  
  // Main Dishes
  'pechuga-pollo-salsa-almendras': 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop&crop=center&q=80',
  'costilla-de-res-con-arroz': 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop&crop=center&q=80',
  'merluza-a-la-vasca': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80'
};

function updateMenuImages() {
  const menuFile = path.join(__dirname, '../src/components/WeeklyMenu.tsx');
  
  if (!fs.existsSync(menuFile)) {
    console.error('WeeklyMenu.tsx not found!');
    return;
  }
  
  let content = fs.readFileSync(menuFile, 'utf8');
  
  // Replace all old Unsplash URLs with new optimized ones
  const oldUrlPattern = /https:\/\/images\.unsplash\.com\/photo-[^"']*\?[^"']*/g;
  content = content.replace(oldUrlPattern, (match) => {
    // Extract photo ID from the URL
    const photoIdMatch = match.match(/photo-(\d+)/);
    if (photoIdMatch) {
      const photoId = photoIdMatch[1];
      
      // Map specific photo IDs to better images
      const photoMappings = {
        '1607877200978': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center&q=80', // Tortilla
        '1578662996442': 'https://images.unsplash.com/photo-1607877200978-3cab430e00cd?w=600&h=400&fit=crop&crop=center&q=80', // Tortilla
        '1512058564366': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&crop=center&q=80', // Vegetables
        '1625937759424': 'https://images.unsplash.com/photo-1625937759424-8b4444a8b2b1?w=600&h=400&fit=crop&crop=center&q=80', // Paella
        '1551218808': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&crop=center&q=80', // Seafood
        '1565299624946': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center&q=80', // Meat paella
        '1551782450': 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop&crop=center&q=80', // Chicken rice
        '1546833999': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center&q=80', // Stews
        '1578985545062': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center&q=80', // Desserts
        '1544148103': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop&crop=center&q=80' // Beverages
      };
      
      return photoMappings[photoId] || match;
    }
    return match;
  });
  
  fs.writeFileSync(menuFile, content);
  console.log('✅ All menu images updated with optimized Unsplash URLs!');
  console.log('📸 Images are now optimized for web (600x400px, 80% quality)');
  console.log('🔄 These serve as fallbacks until you upload the original processed images');
}

// Run the script
updateMenuImages();
