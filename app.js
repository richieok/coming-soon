const http = require('http');
const PORT = 5010;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://kit.fontawesome.com/54966bd5b5.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            color: white;
            margin: 0px;
            padding: 0px;
        }

        body {
            width: 100%;
            height: 100vh;
            background-color: black;
        }

        h1 {
            margin-top: 10px;
        }

        div {
            display: grid;
            place-items: center;
            height: inherit;
        }

        div img {
            max-width: 500px;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <div>
        <h1>Coming Soon</h1>
        <img src="https://addienaconcepts.s3.eu-west-2.amazonaws.com/product-samples/addiena-banner.JPG" alt="addiena banner">
        <p><i class="far fa-envelope fa-xs">&nbsp;&nbsp;</i> info@addienaconcepts.com</p>
        <p>Facebook: @addienaconcepts</p>
        <p>Twitter: @addienaconcepts</p>
        <p>Instagram: @addienaliving @addiena.rtw @styledbyaddiena</p>
    </div> 
</body>
</html>`)
});

server.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});