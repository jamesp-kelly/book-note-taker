export const loadMockData = () => {
  return {
    "books": [
      {
        "id": "fee6d8a7-0c42-4f9f-80da-f97f0c771ac1",
        "title": "Harry Potter" 
      },
      {
        "id": "ee4434ec-6f96-4e2a-81c2-b89182a5d328",
        "title": "The Hobbit" 
      }
    ],
    "notes": [
      {
        "id": "9eef2a4b-b322-414b-bc7c-e9debf8de6a5",
        "title": "Beorn",
        "description": "Bear guy",
        "book-id": "ee4434ec-6f96-4e2a-81c2-b89182a5d328"
      },
      {
        "id": "7ecd13e1-d8fa-4b7a-80cc-0ae80012a809",
        "title": "Gandalf",
        "description": "Wizard",
        "book-id": "ee4434ec-6f96-4e2a-81c2-b89182a5d328"
      }
    ],
    "ui": {
      "display-book-form": false,
      "selected-book-id": null,
      "display-note-form": false,
      "selected-note-id": null
    }
  };
}