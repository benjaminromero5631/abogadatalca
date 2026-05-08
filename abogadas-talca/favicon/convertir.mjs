import sharp from 'sharp'

await sharp('favicon/logoabogada.jpg')
  .resize(32, 32)
  .toFile('app/favicon.ico')

await sharp('favicon/logoabogada.jpg')
  .resize(180, 180)
  .toFile('app/apple-icon.png')

await sharp('favicon/logoabogada.jpg')
  .resize(192, 192)
  .toFile('public/icon-192.png')
