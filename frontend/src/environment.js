// # pass = y0mcFTd7RQtlTHxm 
// # username=pakhalisabiha 
// # string = mongodb+srv://<db_username>:<db_password>@cluster0.ozx0xce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

let IS_PROD = true; 
const server = IS_PROD ? 
"https://video-callbackend-662c.onrender.com" :
 "http://localhost:8000" 
 
 

export default server;