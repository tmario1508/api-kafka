import fs from 'fs';
import AWS from 'aws-sdk';

const s3: any = new AWS.S3({
    accessKeyId: process.env.AWS_API_KEY,
    secretAccessKey: process.env.AWS_ACCESS_KEY
});

// Read File
const file: any = fs.readFileSync('./attachments/BackEnd-01.png');

// Settings S3 Bucket
const settings: any = {
    Bucket: 'mtwydm',
    Key: 'backend/Backend-01.png',
    Body: file,
    ServerSideEndcryption: 'AES256'
};

s3.putObject(settings, (err: any, data: any) => {
    if(err){
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});