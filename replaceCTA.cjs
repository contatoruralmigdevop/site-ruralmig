const fs = require('fs');

const colorMap = {
  '#AB7859': '#DDA121', // Terracotta to Mustard Yellow
  '#8C5F45': '#B68218'  // Darker hover counterpart
};

// Only applying to these specific CTA instances
const targets = [
  'bg-[#AB7859]',
  'text-[#AB7859]',
  'border-[#AB7859]',
  'hover:text-[#AB7859]'
];

// Instead of applying string replace directly, we can manually replace it in the Hero file.
