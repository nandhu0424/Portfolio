const fs = require('fs');
const path = require('path');

const pairs = [
    {
        src: path.join(__dirname, 'image.jpeg'),
        dest: path.join(__dirname, 'public', 'images', 'profile.jpg'),
    },
];

pairs.forEach(({ src, dest }) => {
    if (fs.existsSync(src)) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
        console.log(`✅ Copied: ${path.basename(src)} → ${path.relative(__dirname, dest)}`);
    } else {
        console.warn(`⚠️  Not found (skipped): ${src}`);
    }
});
