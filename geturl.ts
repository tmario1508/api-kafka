import AWS from 'aws-sdk';

const s3: any = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const S3_BUCKET: string = 'mtwydm';
const settings: any = {
    Bucket: S3_BUCKET,
    Key: 'backennd/GraphQL-01.jpg',
    Expires: 15
};

s3.getSignedUrl('getObject', settings, (err: any, data: any) => {
    if(err){
        console.log(err, err.stack);
    } else {
        const result: any = {
            signedRequest: data,
            msg: 'URL Prefirmada generada de forma correcta'
        }
        console.log(result);
    }
});