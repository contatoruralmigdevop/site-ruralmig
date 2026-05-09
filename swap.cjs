const fs = require('fs');
const path = require('path');

const colorMap = {
  '#263F31': '#34453D',
  '#F0EBE1': '#EAE8E4',
  '#D4C3A3': '#AA7259',
  '#E06A2F': '#AA7259',
  '#C55A25': '#8A5A46', // Slightly darker version of #AA7259 for hover states
  '#232522': '#3A3937'
};

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
    if (regex.test(content)) {
      content = content.replace(regex, newColor);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
