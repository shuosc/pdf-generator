import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
app.use(bodyParser());

const PdfPrinter = require("pdfmake");
const fonts = {
    SourceHanSans: {
        normal: 'fonts/SourceHanSans-Medium.ttf',
        bold: 'fonts/SourceHanSans-Bold.ttf',
        light: 'fonts/SourceHanSans-Light.ttf'
    }
};

const printer = new PdfPrinter(fonts);

router.get('/ping', async (ctx) => {
    ctx.body = 'pong';
});
router.post('/*', async (ctx) => {
    let pdfDoc = printer.createPdfKitDocument(ctx.request.body, {});
    ctx.body = ctx.req.pipe(pdfDoc);
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
