import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

const PdfPrinter = require("pdfmake");
const fonts = {
    SourceHanSans: {
        normal: 'fonts/SourceHanSans-Medium.ttf',
        bold: 'fonts/SourceHanSans-Bold.ttf',
        light: 'fonts/SourceHanSans-Light.ttf'
    }
};

const printer = new PdfPrinter(fonts);

// your code goes here
// now it is a simple example for pdfmake
// please read doc of PdfMake here
// https://pdfmake.github.io/docs/
router.get('/*', async (ctx) => {
    let pdfData = {
        defaultStyle: {
            font: 'SourceHanSans'
        },
        content: [
            {text: '电子档案', style: 'header'}
        ]
    };
    let options = {};
    let pdfDoc = printer.createPdfKitDocument(pdfData, options);
    ctx.body = ctx.req.pipe(pdfDoc);
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
