import json
import boto3
import os

sns_client = boto3.client('sns')

def lambda_handler(event, context):
    headers = {
        "Access-Control-Allow-Origin": "https://genstack.solutions",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Content-Type": "application/json"
    }

    # Handle preflight OPTIONS request
    if event['requestContext']['http']['method'] == 'OPTIONS':
        return {
            "statusCode": 200,
            "headers": headers,
            "body": ""
        }

    # Handle POST request
    try:
        body = json.loads(event['body'])
        name = body.get('name')
        email = body.get('email')
        message = body.get('message')

        sns_message = f"New contact form submission:\nName: {name}\nEmail: {email}\nMessage: {message}"

        sns_client.publish(
            TopicArn=os.environ['SNS_TOPIC_ARN'],
            Message=sns_message,
            Subject="New Portfolio Contact"
        )

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({'message': 'Message sent successfully'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }
