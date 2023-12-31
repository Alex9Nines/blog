module.exports ={
    "name": "Backend API GraphQL Schema",
  "schemaPath": "api-app.graphql",
  "projects": {
    "api": {
      "includes": [
        "./users/*.graphql",
        "./auth/*.graphql"
      ]
    }
  },
  "extensions": {
    "endpoints": {
      "Default GraphQL Endpoint": {
        "url": "http://localhost:3333/graphql",
        "headers": {
          "user-agent": "JS GraphQL"
        },
        "introspect": false
      }
    }
}
}
