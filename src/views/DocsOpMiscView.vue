<script setup lang="ts">
const responseExample = `{
  "data": [
    {
      "stateName": "Andhra Pradesh"
    },
    {
      "stateName": "Arunachal Pradesh"
    },
    {
      "stateName": "Himachal Pradesh"
    },
    {
      "stateName": "Madhya Pradesh"
    },
    {
      "stateName": "Uttar Pradesh"
    }
  ]
}`

const responseExample2 = `{
  "data": [
    {
      "zoneName": "North Central Railway",
      "zoneCode": "NCR"
    },
    {
      "zoneName": "North Eastern Railway",
      "zoneCode": "NER"
    },
    {
      "zoneName": "North Western Railway",
      "zoneCode": "NWR"
    },
    {
      "zoneName": "Northeast Frontier Railway",
      "zoneCode": "NFR"
    },
    {
      "zoneName": "Northern Railway",
      "zoneCode": "NR"
    }
  ]
}`

const responseExample3 = `{
  "data": [
    {
      "trainTypeCode": "EXP",
      "trainTypeName": "Mail/Express"
    }
  ]
}`
</script>
<template>
  <h2>Operations</h2>

  <code class="code">BASE_URL = api.railwayapi.site</code>

  <h3>GET /states</h3>

  <section class="table">
    <div class="table-row">
      <h5 id="summary">Summary</h5>
      <p>Get states</p>
    </div>
    <div class="table-row">
      <h5 id="url">URL</h5>
      <p>
        <code>/v1/states?q={queryString}</code><br />
        <code>/v1/states/all</code>
        <em><code>/all</code> will give all states</em>
      </p>
    </div>
    <div class="table-row">
      <h5 id="request-query-parameters">Request Query Parameters:</h5>
      <ul>
        <li>q (<strong>required</strong>): find states like <code>queryString</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="usage-example">Usage Example:</h5>
      <ul>
        <li><code>BASE_URL/v1/states/all</code></li>
        <li><code>BASE_URL/v1/states?q=prad</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="possible-errors">Possible errors</h5>
      <ul>
        <li>NotFound : No state found for given <code>queryString</code></li>
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
      <p>List of states</p>
    </div>
    <div class="table-row">
      <h5 id="sample-response">Sample response</h5>
      <CodeBlock :code="responseExample" :highlightjs="true" lang="json" theme="neon-bunny" class="min-width" />
    </div>
  </section>

  <h3>GET /zones</h3>
  <section class="table">
    <div class="table-row">
      <h5 id="summary-1">Summary</h5>
      <p>Get zones</p>
    </div>
    <div class="table-row">
      <h5 id="url-1">URL</h5>
      <p>
        <code>/v1/zones?q={queryString}</code><br />
        <code>/v1/zones/all</code>
        <em><code>/all</code> will give all zones</em>
      </p>
    </div>
    <div class="table-row">
      <h5 id="request-query-parameters-1">Request Query Parameters:</h5>
      <ul>
        <li>q (<strong>required</strong>): find zones like <code>queryString</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="usage-example-1">Usage Example:</h5>
      <ul>
        <li><code>BASE_URL/v1/zones/all</code></li>
        <li><code>BASE_URL/v1/zones?q=nor</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="possible-errors-1">Possible errors</h5>
      <ul>
        <li>NotFound : No zones found for given <code>queryString</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response-1">Response</h5>
      <ul>
        <li>On success, 200</li>
        <li>On not found, 404</li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response-body-1">Response Body</h5>
      <p>List of zones</p>
    </div>
    <div class="table-row">
      <h5 id="sample-response">Sample response</h5>
      <CodeBlock :code="responseExample2" :highlightjs="true" lang="json" theme="neon-bunny" class="min-width" />
    </div>
  </section>

  <h3>GET /trainTypes</h3>
  <section class="table">
    <div class="table-row">
      <h5 id="summary-2">Summary</h5>
      <p>Get train types</p>
    </div>
    <div class="table-row">
      <h5 id="url-2">URL</h5>
      <p>
        <code>/v1/trainTypes?q={queryString}</code><br />
        <code>/v1/trainTypes/all</code>
        <em><code>/all</code> will give all trainTypes</em>
      </p>
    </div>
    <div class="table-row">
      <h5 id="request-query-parameters-2">Request Query Parameters:</h5>
      <ul>
        <li>q (<strong>required</strong>): find states like <code>queryString</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="usage-example-2">Usage Example:</h5>
      <ul>
        <li><code>BASE_URL/v1/trainTypes/all</code></li>
        <li><code>BASE_URL/v1/trainTypes?q=ex</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="possible-errors-2">Possible errors</h5>
      <ul>
        <li>NotFound : No train type found for given <code>queryString</code></li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response-2">Response</h5>
      <ul>
        <li>On success, 200</li>
        <li>On not found, 404</li>
      </ul>
    </div>
    <div class="table-row">
      <h5 id="response-body-2">Response Body</h5>
      <p>List of train types</p>
    </div>
    <div class="table-row">
      <h5 id="sample-response">Sample response</h5>
      <CodeBlock :code="responseExample3" :highlightjs="true" lang="json" theme="neon-bunny" class="min-width" />
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

.table-row {
  min-width: 0;
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
