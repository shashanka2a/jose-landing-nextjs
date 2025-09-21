# Menu Images Organization Guide

## Folder Structure
```
public/menu/
├── paellas/           # Paella dishes
├── tortillas/         # Spanish tortillas/omelets
├── tapas/            # Small plates and appetizers
├── postres/          # Desserts
├── platos-de-olla/   # Stews and hearty dishes
├── beverages/        # Drinks and sangria
├── sandwiches/       # Bocadillos and sandwiches
├── baked-goods/      # Pastries and breads
├── vegetables/       # Vegetable dishes
└── main-dishes/      # Main course dishes
```

## Image Requirements
- **Resolution**: Minimum 1080px width, 600px height
- **Format**: JPG or WebP
- **File Size**: Under 300KB per image
- **Aspect Ratio**: 16:9 (landscape) or 1:1 (square)
- **Quality**: High quality, well-lit, appetizing food photos

## Naming Convention
Use kebab-case with descriptive names:
- `paella-de-mar.jpg`
- `tortilla-espanola.jpg`
- `gazpacho-andaluz.jpg`
- `croquetas-de-jamon.jpg`

## Current Menu Items by Category

### Tortillas
- tortilla-de-patatas.jpg
- tortilla-espanola.jpg
- tortilla-del-huerto.jpg

### Paellas
- paella-mar-y-tierra.jpg
- paella-del-mar.jpg
- paella-de-verduras.jpg
- paella-de-pollo.jpg

### Tapas
- croquetas-de-jamon.jpg
- patatas-bravas.jpg
- gambas-al-ajillo.jpg
- pulpo-a-la-gallega.jpg
- pinchos-morunos.jpg

### Postres
- crema-catalana.jpg
- natillas.jpg
- flan-de-huevo.jpg
- tarta-de-santiago.jpg

### Platos de Olla
- cocido-madrileno.jpg
- fabada-asturiana.jpg
- lentejas-con-chorizo.jpg
- potaje-de-garbanzos.jpg

### Beverages
- sangria-roja.jpg
- sangria-blanco.jpg
- tinto-de-verano.jpg
- horchata-de-chufa.jpg

### Sandwiches
- bocadillo-de-jamon.jpg
- bocadillo-de-tortilla.jpg
- bocadillo-de-chorizo.jpg

### Baked Goods
- empanada-gallega.jpg
- hornazo.jpg
- pan-con-tomate.jpg

### Vegetables
- esparragos-con-pimientos.jpg
- pimientos-del-piquillo.jpg
- alcachofas-a-la-plancha.jpg

### Main Dishes
- pechuga-pollo-salsa-almendras.jpg
- costilla-de-res-con-arroz.jpg
- merluza-a-la-vasca.jpg

## Instructions for Image Processing
1. **Crop**: Remove text boxes, borders, and backgrounds
2. **Enhance**: Improve sharpness, brightness, and color balance
3. **Resize**: Standardize to 1080x600px (16:9 ratio)
4. **Optimize**: Compress for web while maintaining quality
5. **Organize**: Place in appropriate category folders

## Integration
Once images are processed and placed in the correct folders, update the `WeeklyMenu.tsx` component to use local image paths instead of Unsplash URLs:

```tsx
// Change from:
image: "https://images.unsplash.com/photo-..."

// To:
image: "/menu/tortillas/tortilla-de-patatas.jpg"
```
