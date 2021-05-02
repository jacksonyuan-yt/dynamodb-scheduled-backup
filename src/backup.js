const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB();

module.exports.handler = async () => {
  try {
    const date = new Date();
    const params = {
      BackupName: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      TableName: process.env.DYNAMODB_TABLE_NAME,
    };
    const backupRes = await dynamodb.createBackup(params).promise();
    console.log({ backupRes });
  } catch (e) {
    console.error(e);
  }

  return;
};
