<script setup lang="ts">
const codeErrorExample = `{
  "errors": [
    {
      "httpCode": 404,
      "code": "ERR-0003",
      "type": "NotFound",
      "title": "Resource not found",
      "description": "No resource found for given parameters.",
      "href": "https://railwayapi.site/docs/errorcodes#NotFound",
      "path": ""
    }
  ]
}`
</script>

<template>
  <h2>Response Codes</h2>
  <p>
    We use standard HTTP codes to denote successful execution or indicate when errors occur. For
    some errors, the response will include additional information about the error, including an
    application error code and human readable error description.
  </p>
  <p>As of now there is not authentication required to use our API</p>
  <h3>Successful execution</h3>
  <p>
    Operations that execute successfully will return 2xx codes, and, where appropriate, will return
    the information requested directly in the response body. The table below shows the typical
    response codes, entities and headers used for the various HTTP verbs supported by the API:
  </p>
  <br />
  <section class="table table-success-response">
    <div class="table-row">
      <span class="table-header">Operation Verb</span>
      <span class="table-header">HTTP Response code</span>
      <span class="table-header">Notes</span>
      <span class="table-header">Response body</span>
      <span class="table-header">Response headers</span>
    </div>
    <div class="table-row">
      <span>GET</span>
      <span>200</span>
      <span></span>
      <span>The requested data as JSON</span>
      <span></span>
    </div>
  </section>

  <h3>Error Handling</h3>
  <p>
    Operations that result in an error due to a problem on the client's part (eg invalid input) will
    standard 4xx codes. Operations that result in an error due to a problem in the Rev server will
    return 5xx codes.
  </p>
  <br />
  <p>
    Appropriate HTTP response code will be used, example: 401 (Not Authorized) or 404 (Not Found),
    the response body will include an error entity that gives further details about the error,
    including an application error code and a human readable error description. The format of this
    error entity is below:
  </p>
  <br />
  <CodeBlock :code="codeErrorExample" :highlightjs="true" lang="json" theme="neon-bunny" />

  <br />
  <p>
    The table below shows the HTTP response codes and entities used for some common error
    conditions:
  </p>
  <section class="table table-error-response">
    <div class="table-row">
      <span class="table-header">HTTP Response code</span>
      <span class="table-header">Error Condition</span>
    </div>
    <div class="table-row">
      <span class="table-header">400</span>
      <span class="table-header"
        >The submitted data or query parameter was invalid in some way</span
      >
    </div>
    <div class="table-row">
      <span class="table-header">401</span>
      <span class="table-header">The user API keys were not specified, or were not valid</span>
    </div>
    <div class="table-row">
      <span class="table-header">404</span>
      <span class="table-header">Requested item (eg order, document) does not exist</span>
    </div>
    <div class="table-row">
      <span class="table-header">429</span>
      <span class="table-header">Requested item (eg order, document) does not exist</span>
    </div>
    <div class="table-row">
      <span class="table-header">500</span>
      <span class="table-header">There was an unexpected error in the RailwayAPI code</span>
    </div>
    <div class="table-row">
      <span class="table-header">503</span>
      <span class="table-header">The RailwayAPI is down for maintenance</span>
    </div>
  </section>
</template>

<style scoped>
.code {
  width: 100%;
  display: block;
  padding: 8px;
  border-radius: 5px;
  border: solid 1px gray;
  text-align: center;
  background-color: rgb(245, 245, 245);
}

h2 {
  grid-area: Heading;
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  font-size: 1.7rem;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

h2:nth-child(n + 2) {
  margin-top: 1em;
}

p {
  font-size: larger;
  line-height: 2.5ch;
}

h3 {
  grid-area: Heading;
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  font-size: 1.3em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

h3:nth-child(n + 2) {
  margin-top: 1em;
}

.table {
  border: 1px rgba(151, 151, 149, 0.304) solid;
  text-align: left;
}

.table span {
  padding: 5px;
  overflow-x: scroll;
}

.table > .table-row:first-child {
  background-color: rgb(244, 245, 246);
}

.table .table-row:nth-child(n + 2) {
  border-top: 1px rgba(151, 151, 149, 0.304) solid;
}

.table-success-response .table-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 3fr 2fr 2fr;
  column-gap: 10px;
}

.table-error-response .table-row {
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 10px;
}
</style>
