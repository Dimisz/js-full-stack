import inquirer from 'inquirer';
import { image } from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{ 
    message: 'Type in your URL',
    name: 'URL'
  }])
  .then((answer) => {
   const url = answer.URL;
   const qr_svg = image(url);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((e) => {
    console.error(e.message);
  })