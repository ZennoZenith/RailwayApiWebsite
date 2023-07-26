<script setup lang="ts">
const responseExample = `{
  "data": {
    "trainsInfo": [
      {
        "id": 564,
        "trainNumber": "12176",
        "trainName": "CHAMBAL EXPRESS",
        "trainFullName": "Gwalior - Howrah Chambal Express",
        "trainRunsOn": {
          "trainRunsOnSun": "N",
          "trainRunsOnMon": "N",
          "trainRunsOnTue": "Y",
          "trainRunsOnWed": "N",
          "trainRunsOnThu": "N",
          "trainRunsOnFri": "N",
          "trainRunsOnSat": "Y"
        },
        "availableClasses": [
          "2A",
          "3A",
          "SL",
          "GN"
        ],
        "hasPantry": false,
        "trainType": "SF",
        "returnTrainNumber": "12175",
        "stationFrom": {
          "id": 736,
          "srNo": 1,
          "arrivalTime": null,
          "departureTime": "07:40:00",
          "haltTime": null,
          "platform": "1",
          "dayCount": 1,
          "distance": "0.0",
          "speed": "0.0",
          "boardingDisabled": 0,
          "updatedAt": "2023-03-24T12:00:43.000Z",
          "stationCode": "GWL",
          "stationName": "Gwalior Junction"
        },
        "stationTo": {
          "id": 1,
          "srNo": 30,
          "arrivalTime": "06:55:00",
          "departureTime": null,
          "haltTime": null,
          "platform": "12,14",
          "dayCount": 2,
          "distance": "1286.2",
          "speed": "62.8",
          "boardingDisabled": 0,
          "updatedAt": "2023-03-24T12:00:43.000Z",
          "stationCode": "HWH",
          "stationName": "Howrah Junction"
        },
        "updatedAt": "2023-03-24T12:00:42.000Z",
        "distance": 1286,
        "duration": "23h 15m"
      }
    ],
    "stationsInfo": [
      {
        "id": 736,
        "stationCode": "GWL",
        "stationName": "Gwalior Junction",
        "stateName": "Madhya Pradesh",
        "zoneCode": "NCR",
        "stationType": "Junction",
        "hindiStationName": "ग्वालियर जंक्शन"
      },
      {
        "id": 1,
        "stationCode": "HWH",
        "stationName": "Howrah Junction",
        "stateName": "West Bengal",
        "zoneCode": "ER",
        "stationType": "Terminus",
        "hindiStationName": "हावड़ा जंक्शन"
      }
    ]
  }
}`
</script>
<template>
  <h2>Operations</h2>

  <code class="code">BASE_URL = api.railwayapi.site</code>

  <h3>GET /trainsBtwStations</h3>

  <section class="table">
    <div class="table-row">
      <h5 id="summary">Summary</h5>
      <p>Get trains between stations</p>
    </div>
    <div class="table-row">
      <h5 id="url">URL</h5>
      <p>
        <code>/v1/trainsBtwStations?fromStation=NZM&amp;toStation=GWL&amp;allTrains=true</code>
      </p>
    </div>
    <div class="table-row">
      <h5 id="request-query-parameters">Request Query Parameters:</h5>
      <ul>
        <li>
          fromStation (<strong>required</strong>): Train running from <code>stationCode</code>
        </li>
        <li>toStation (<strong>required</strong>): Train running to <code>stationCode</code></li>
        <li>
          allTrains (optional, default=false): include local train and some not currently running
          trains also.
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
        <li>
          BadRequest : Some query parameters are not provided or not stations matched give query
          parameters
        </li>
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
      <p>List of trains running between given station and list of station info</p>
    </div>
    <div class="table-row">
      <h5 id="sample-response">Sample response</h5>
      <CodeBlock
        :code="responseExample"
        :highlightjs="true"
        lang="json"
        theme="neon-bunny"
        class="min-width" />
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
  font-size: 2.3em;
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

.table-row > * {
  padding: 5px;
  /* white-space: pre; */
}

.table-row > :first-child {
  background-color: rgb(244, 245, 246);
}

.table .table-row:nth-child(n + 2) {
  border-top: 1px rgba(151, 151, 149, 0.304) solid;
}

.table .table-row {
  display: grid;
  grid-template-columns: 1fr 5fr;
}
</style>
