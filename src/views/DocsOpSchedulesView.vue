<script setup lang="ts">
const responseExample = `{
  "data": [
    {
      "id": 980,
      "trainNumber": "12650",
      "trainName": "YPR SAMPARK KRT",
      "schedule": [
        {
          "srNo": "1",
          "stationId": 744,
          "stationName": "Hazrat Nizamuddin",
          "stationCode": "NZM",
          "arrivalTime": null,
          "departureTime": "08:20",
          "distance": "0.0",
          "haltTime": null,
          "dayCount": 1,
          "platform": "7",
          "boardingDisabled": false,
          "speed": "0.0"
        },
        {
          "srNo": "2",
          "stationId": 736,
          "stationName": "Gwalior Junction",
          "stationCode": "GWL",
          "arrivalTime": "11:43",
          "departureTime": "11:45",
          "distance": "305.9",
          "haltTime": "00:02",
          "dayCount": 1,
          "platform": "1",
          "boardingDisabled": false,
          "speed": "90.4"
        }
      ]
    }
  ]
}`
</script>
<template>
  <h2>Operations</h2>

  <code class="code">BASE_URL = api.railwayapi.site</code>

  <h3>GET /schedules/{trainNumbers}</h3>

  <section class="table">
    <div class="table-row">
      <h5 id="summary">Summary</h5>
      <p>Get schedule for given train numbers(s)</p>
    </div>
    <div class="table-row">
      <h5 id="url">URL</h5>
      <p><code>/v1/trains/{trainNumbers}?
          fullSchedule=false</code></p>
    </div>
    <div class="table-row">
      <h5 id="request-parameters">Request Parameters:</h5>
      <ul>
        <li>
          trainNumbers: one or more train number seperate by ','<br />
          <em>Note: Maximum train number limit is 10.</em>
        </li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="request-query-parameters">Request Query Parameters:</h5>
      <ul>
        <li>
          <code>
            fullSchedule (optional, default=false): include intermediate stations also. Will be
            applied to all train if multiple train numbers are given in request parameters
          </code>
        </li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="usage-example">Usage Example:</h5>
      <ul>
        <li><code>BASE_URL/v1/schedules/12650</code></li>
        <li><code>BASE_URL/v1/schedules/12650?fullSchedule=true</code></li>
        <li><code>BASE_URL/v1/schedules/12649,12650</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="possible-errors">Possible errors</h5>
      <ul>
        <li>NotFound : No schedule found for given <code>trainNumber</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response">Response</h5>
      <ul>
        <li>On success, 200</li>
        <li>On not found, 404</li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response-body">Response Body</h5>
      <p>List of schedules</p>
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
  /* white-space: pre; */
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
