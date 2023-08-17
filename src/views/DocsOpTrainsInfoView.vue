<script setup lang="ts">
const responseExample = `{
  "data": [
    {
      "id": 980,
      "trainNumber": "12650",
      "trainName": "YPR SAMPARK KRT",
      "trainFullName": "Karnataka Sampark Kranti Express (Via Ballari) (PT)",
      "stationFrom": {
        "id": 744,
        "stationCode": "NZM",
        "stationName": "Hazrat Nizamuddin"
      },
      "stationTo": {
        "id": 993,
        "stationCode": "YPR",
        "stationName": "Yesvantpur Junction"
      },
      "departureTime": "08:20",
      "arrivalTime": "04:30",
      "duration": "44:10",
      "trainRunsOn": {
        "trainRunsOnSun": "Y",
        "trainRunsOnMon": "Y",
        "trainRunsOnTue": "Y",
        "trainRunsOnWed": "N",
        "trainRunsOnThu": "Y",
        "trainRunsOnFri": "N",
        "trainRunsOnSat": "Y"
      },
      "numberOfStops": 19,
      "trainTypeCode": "SKR",
      "distance": 2748,
      "availableClasses": "1A 2A 3A SL GN",
      "avgSpeed": 59,
      "hasPantry": true,
      "returnTrainNumber": "12649",
      "updatedAt": "2023-03-24T17:30:42.000Z"
    }
  ]
}`
</script>
<template>
  <h2>Operations</h2>

  <code class="code">BASE_URL = api.railwayapi.site</code>

  <h3>GET /trains/{trainNumbers}</h3>

  <section class="table">
    <div class="table-row">
      <h5 id="summary">Summary</h5>
      <p>Get train info for given train numbers(s)</p>
    </div>
    <div class="table-row">
      <h5 id="url">URL</h5>
      <p><code>/v1/trains/{trainNumbers}</code></p>
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
      <h5 id="usage-example">Usage Example:</h5>
      <ul>
        <li><code>BASE_URL/v1/trains/12650</code></li>
        <li><code>BASE_URL/v1/trains/12649,12650</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="possible-errors">Possible errors</h5>
      <ul>
        <li>NotFound : No trains found for given <code>trainNumbers</code></li>
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
      <p>List of train info</p>
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
