const fs = require('fs');
const path = require('path');

const colorMap = {
  'text-gray-900': 'text-[#3A3937]',
  'text-gray-800': 'text-[#3A3937]',
  'text-gray-700': 'text-[#3A3937]/80',
  'text-gray-600': 'text-[#3A3937]/70',
  'text-gray-500': 'text-[#3A3937]/60',
  'border-gray-200': 'border-[#3A3937]/10',
  'border-gray-100': 'border-[#3A3937]/5',
  'bg-gray-50': 'bg-[#EAE8E4]/50',
  'bg-gray-100': 'bg-[#EAE8E4]',
  'bg-gray-200': 'bg-[#EAE8E4]',
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
    const regex = new RegExp(oldColor, 'g');
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
