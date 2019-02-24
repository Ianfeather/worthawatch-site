const s3 = require('s3');
const _ = require('lodash');

const ONE_YEAR = 31536000;

function uploadToS3() {
  return new Promise((resolve, reject) => {
    const accessKeyId = process.env.MY_AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.MY_AWS_SECRET_ACCESS_KEY;
    const region = 'us-east-1';
    const bucket = 'worthawatch';
    const localDir = './build';
    const prefix = '';

    console.log(`Uploading assets to S3 at ${region}/${bucket}`);

    const client = s3.createClient({
      s3Options: { accessKeyId, secretAccessKey, region }
    });

    // var uploader = client.uploadFile({
    const uploader = client.uploadDir({
      localDir,
      s3Params: {
        Bucket: bucket,
        CacheControl: `max-age=${ONE_YEAR},immutable`,
        Prefix: prefix // root directory by default
      }
    });

    uploader.on('error', reject);
    uploader.on('end', resolve);
  });
};

uploadToS3()
.then(() => {
  console.log('Upload to S3 complete!');
}).catch(e => {
  console.log('Upload to S3 failed');
  console.log(e);
  process.exit(1); // Ensure the build fails
});
