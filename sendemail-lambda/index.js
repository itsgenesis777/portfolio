const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'ap-southeast-1' });

exports.handler = async (event) => {
  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing required fields." }),
      };
    }

    const params = {
      Source: 'tapispisan21@gmail.com',
      Destination: { ToAddresses: ['tapispisan21@gmail.com'] },
      Message: {
        Subject: { Data: `Contact Form Submission from ${name}` },
        Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` } },
      },
      ReplyToAddresses: [email],
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
