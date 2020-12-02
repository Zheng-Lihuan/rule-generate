var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
var templateStr = require('./data.js');
var fs = require('fs');
var path = require('path')

// 设置文件名称
const RULE_FILE_NAME = 'mother_mp_gcw'

let json = {
    details: templateStr,
    status: "success"
}
let distFolder = path.join(__dirname, 'dist')
if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder)
}
var file = path.join(__dirname, 'dist/' + RULE_FILE_NAME + '.json');
fs.writeFile(file, JSON.stringify(json), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功，地址：' + file);
});
var config = {
    user: "tangdouapp/tangdouapp",
    // Password optional, prompted if none given
    password: "tangdouapp#123",
    host: "v0.ftp.upyun.com",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/cdn/activity/rules",
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ["*.json"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};

// use with promises
ftpDeploy
    .deploy(config)
    .then(res => {
        console.log("Upload Complete : https://aimg.tangdou.com/cdn/activity/rules/" + RULE_FILE_NAME + '.json')
    })
    .catch(err => console.log(err));