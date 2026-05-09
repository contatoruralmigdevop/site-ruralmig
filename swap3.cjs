const fs = require('fs');
const path = require('path');

const colorMap = {
  '#EAE8E4': '#EDEAe5', // Light Beige
  '#AA7259': '#AB7859', // Terracotta
  '#3A3937': '#20221F', // Dark Charcoal
  '#34453D': '#143A2D', // Dark Green
  '#8A5A46': '#8A5A46', // Hover state for Terracotta (leaving as is or slightly adjusting)
};

// We will also update the hover state for the new terracotta
// #AB7859 -> #8C5F45 (approx 15% darker)
colorMap['#8A5A46'] = '#8C5F45';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    const regex = new RegExp(oldColor, 'gi');
    const newContent = content.replace(regex, newColor);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
