#!/usr/bin/env node

/**
 * Script to update menu images from Unsplash URLs to local paths
 * Run this after processing and organizing the menu images
 */

const fs = require('fs');
const path = require('path');

// Mapping of current menu items to their local image paths
const imageMapping = {
  // Tortillas
  'tortilla-de-patatas': '/menu/tortillas/tortilla-de-patatas.jpg',
  'tortilla-espanola': '/menu/tortillas/tortilla-espanola.jpg',
  'tortilla-del-huerto': '/menu/tortillas/tortilla-del-huerto.jpg',
  
  // Paellas
  'paella-mar-y-tierra': '/menu/paellas/paella-mar-y-tierra.jpg',
  'paella-del-mar': '/menu/paellas/paella-del-mar.jpg',
  'paella-de-verduras': '/menu/paellas/paella-de-verduras.jpg',
  'paella-de-pollo': '/menu/paellas/paella-de-pollo.jpg',
  
  // Tapas
  'croquetas-de-jamon': '/menu/tapas/croquetas-de-jamon.jpg',
  'patatas-bravas': '/menu/tapas/patatas-bravas.jpg',
  'gambas-al-ajillo': '/menu/tapas/gambas-al-ajillo.jpg',
  'pulpo-a-la-gallega': '/menu/tapas/pulpo-a-la-gallega.jpg',
  'pinchos-morunos': '/menu/tapas/pinchos-morunos.jpg',
  
  // Postres
  'crema-catalana': '/menu/postres/crema-catalana.jpg',
  'natillas': '/menu/postres/natillas.jpg',
  'flan-de-huevo': '/menu/postres/flan-de-huevo.jpg',
  'tarta-de-santiago': '/menu/postres/tarta-de-santiago.jpg',
  
  // Platos de Olla
  'cocido-madrileno': '/menu/platos-de-olla/cocido-madrileno.jpg',
  'fabada-asturiana': '/menu/platos-de-olla/fabada-asturiana.jpg',
  'lentejas-con-chorizo': '/menu/platos-de-olla/lentejas-con-chorizo.jpg',
  'potaje-de-garbanzos': '/menu/platos-de-olla/potaje-de-garbanzos.jpg',
  
  // Beverages
  'sangria-roja': '/menu/beverages/sangria-roja.jpg',
  'sangria-blanco': '/menu/beverages/sangria-blanco.jpg',
  'tinto-de-verano': '/menu/beverages/tinto-de-verano.jpg',
  'horchata-de-chufa': '/menu/beverages/horchata-de-chufa.jpg',
  
  // Sandwiches
  'bocadillo-de-jamon': '/menu/sandwiches/bocadillo-de-jamon.jpg',
  'bocadillo-de-tortilla': '/menu/sandwiches/bocadillo-de-tortilla.jpg',
  'bocadillo-de-chorizo': '/menu/sandwiches/bocadillo-de-chorizo.jpg',
  
  // Baked Goods
  'empanada-gallega': '/menu/baked-goods/empanada-gallega.jpg',
  'hornazo': '/menu/baked-goods/hornazo.jpg',
  'pan-con-tomate': '/menu/baked-goods/pan-con-tomate.jpg',
  
  // Vegetables
  'esparragos-con-pimientos': '/menu/vegetables/esparragos-con-pimientos.jpg',
  'pimientos-del-piquillo': '/menu/vegetables/pimientos-del-piquillo.jpg',
  'alcachofas-a-la-plancha': '/menu/vegetables/alcachofas-a-la-plancha.jpg',
  
  // Main Dishes
  'pechuga-pollo-salsa-almendras': '/menu/main-dishes/pechuga-pollo-salsa-almendras.jpg',
  'costilla-de-res-con-arroz': '/menu/main-dishes/costilla-de-res-con-arroz.jpg',
  'merluza-a-la-vasca': '/menu/main-dishes/merluza-a-la-vasca.jpg'
};

function updateMenuImages() {
  const menuFile = path.join(__dirname, '../src/components/WeeklyMenu.tsx');
  
  if (!fs.existsSync(menuFile)) {
    console.error('WeeklyMenu.tsx not found!');
    return;
  }
  
  let content = fs.readFileSync(menuFile, 'utf8');
  
  // Replace Unsplash URLs with local paths
  Object.entries(imageMapping).forEach(([key, localPath]) => {
    const unsplashPattern = new RegExp(`https://images\\.unsplash\\.com/[^"']*${key}[^"']*`, 'g');
    content = content.replace(unsplashPattern, localPath);
  });
  
  fs.writeFileSync(menuFile, content);
  console.log('✅ Menu images updated successfully!');
  console.log('📁 Make sure to place the processed images in the correct folders:');
  console.log('   - /public/menu/tortillas/');
  console.log('   - /public/menu/paellas/');
  console.log('   - /public/menu/tapas/');
  console.log('   - /public/menu/postres/');
  console.log('   - /public/menu/platos-de-olla/');
  console.log('   - /public/menu/beverages/');
  console.log('   - /public/menu/sandwiches/');
  console.log('   - /public/menu/baked-goods/');
  console.log('   - /public/menu/vegetables/');
  console.log('   - /public/menu/main-dishes/');
}

// Run the script
updateMenuImages();
