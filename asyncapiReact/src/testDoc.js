export const specMock = `
{
  "asyncapi": "2.2.0",
  "info": {
    "title": "Account Service",
    "version": "1.0.0",
    "description": "This service is in charge of processing user signups"
  },
  "channels": {
    "user/signedup": {
      "subscribe": {
        "message": {
          "$ref": "#/components/messages/UserSignedUp"
        }
      }
    }
  },
  "components": {
    "messages": {
      "UserSignedUp": {
        "payload": {
          "type": "object",
          "properties": {
            "displayName": {
              "type": "string",
              "description": "Name of the user"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Email of the user"
            }
          }
        }
      }
    }
  }
}
`;
