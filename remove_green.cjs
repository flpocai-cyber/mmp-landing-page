const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const targets = ['3.png', '4.png', '5 1.png', '9.png', '10.png', 'foto.png'];

async function processImages() {
  for (const file of targets) {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath)) continue;
    try {
      const image = await Jimp.read(filePath);
      const width = image.bitmap.width;
      const height = image.bitmap.height;
      
      console.log(`Processando: ${file}`);
      
      image.scan(0, 0, width, height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        
        // Verifica se é chroma key (tons de verde vibrante)
        if (g > 120 && g > r * 1.2 && g > b * 1.2) {
          this.bitmap.data[idx + 3] = 0; 
        }
      });
      
      await image.writeAsync(filePath);
      console.log(`Salvo: ${file} (sem fundo)`);
    } catch (e) {
      console.log(`Erro em ${file}: ${e.message}`);
    }
  }
}
processImages();
