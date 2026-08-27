const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets');
const MAX_WIDTH = 1920;
const QUALITY = 80;

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function compressImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.relative(ASSETS_DIR, inputPath)} → ${path.relative(ASSETS_DIR, outputPath)}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)} KB → ${(compressedSize / 1024).toFixed(1)} KB (${savings}% smaller)`);
    return { originalSize, compressedSize };
  } catch (err) {
    console.error(`✗ Failed: ${inputPath}`, err.message);
    return null;
  }
}

async function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (supportedExtensions.includes(path.extname(file).toLowerCase())) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function main() {
  console.log('🔍 Scanning for images...\n');
  const imageFiles = await walkDir(ASSETS_DIR);

  if (imageFiles.length === 0) {
    console.log('No images found.');
    return;
  }

  console.log(`Found ${imageFiles.length} image(s). Starting compression...\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;

  for (const file of imageFiles) {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const dir = path.dirname(file);
    const outputPath = path.join(dir, `${baseName}.webp`);

    // Skip if WebP already exists and is newer
    if (fs.existsSync(outputPath)) {
      const srcStat = fs.statSync(file);
      const destStat = fs.statSync(outputPath);
      if (destStat.mtime >= srcStat.mtime) {
        console.log(`⏭ Skipped (up to date): ${path.relative(ASSETS_DIR, file)}`);
        continue;
      }
    }

    const result = await compressImage(file, outputPath);
    if (result) {
      totalOriginal += result.originalSize;
      totalCompressed += result.compressedSize;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`  Total original:  ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total compressed: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Savings: ${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%`);
  console.log('\n✅ Done! WebP files created alongside originals.');
}

main().catch(console.error);