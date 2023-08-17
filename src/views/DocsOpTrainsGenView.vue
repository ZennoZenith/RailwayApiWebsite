<script setup lang="ts">
const responseExample = `{
  "data": [
    {
      "id": 980,
      "trainNumber": "12650",
      "trainName": "YPR SAMPARK KRT"
    },
    {
      "id": 988,
      "trainNumber": "12658",
      "trainName": "CHENNAI MAIL"
    },
    {
      "id": 989,
      "trainNumber": "12659",
      "trainName": "GURUDEV EXPRESS"
    }
  ]
}`
</script>
<template>
  <h2>Operations</h2>

  <code class="code">BASE_URL = api.railwayapi.site</code>

  <h3>GET /trains</h3>

  <section class="table">
    <div class="table-row">
      <h5>Summary</h5>
      <p>Get list of trains for given query string</p>
    </div>
    <div class="table-row">
      <h5>URL</h5>
      <code>/v1/trains?q={queryStiring}&amp;limit={limit}</code>
    </div>
    <div class="table-row">
      <h5>Request Query Parameters:</h5>
      <ul>
        <li>q (<strong>required</strong>): query string to find like train number</li>
        <li>limit (optional, default=10, max=100): limit number of trains</li>
      </ul>
    </div>
    <div class="table-row">
      <h5>Usage Example:</h5>
      <ul>
        <li><code>BASE_URL/v1/trains?q=126</code></li>
        <li><code>BASE_URL/v1/trains?q=12&amp;limit=50</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="possible-errors">Possible errors</h5>
      <ul>
        <li>NotFound : No trains found for given <code>queryString</code></li>
        <li>QueryStringUnspecified : Query string is not specified</li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response">Response</h5>
      <ul>
        <li>On success, 200</li>
        <li>On not found, 404</li>
        <li>On bad request, 400</li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response-body">Response Body</h5>
      <p>List of trains</p>
    </div>
    <div class="table-row">
      <h5 id="sample-response">Sample response</h5>
      <CodeBlock :code="responseExample" :highlightjs="true" lang="json" theme="neon-bunny" class="min-width" />
    </div>
  </section>
</template>

<style scoped>
.min-width {
  min-width: 0;
}

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
  font-size: 1.8em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

h2:nth-child(n + 2) {
  margin-top: 1em;
}

h3 {
  grid-area: Heading;
  color: rgb(46, 26, 105);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

h3:nth-child(n + 2) {
  margin-top: 1em;
}

li {
  padding-left: 10px;
  list-style: inside;
}

.table {
  border: 1px rgba(151, 151, 149, 0.304) solid;
}

.table-row>* {
  padding: 5px;
}

.table-row> :first-child {
  background-color: rgb(244, 245, 246);
}

.table .table-row:nth-child(n + 2) {
  border-top: 1px rgba(151, 151, 149, 0.304) solid;
}

.table .table-row {
  display: grid;
  grid-template-columns: 7em 1fr;
}
</style>
