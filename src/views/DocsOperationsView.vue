<template>
  <h2>Operations</h2>
  <p>
    The API includes operations for uploading source files, placing orders, retrieving information
    about orders and files, and downloading finished documents (transcripts or captions) or source
    files for an order.
  </p>
  <p>
    Below is a summary of each operation, along with a link to a page with detailed specifications
    for it.
  </p>

  <section class="table table-operations">
    <div class="table-row">
      <span class="table-header">Operation</span>
      <span class="table-header">HTTP Resource/verb</span>
      <span class="table-header">Remarks</span>
    </div>
    <div class="table-row">
      <span>Get list of trains</span>
      <span> GET /trains</span>
      <span>Retruns list of trains with where train number is maching query parameter {q}</span>
    </div>
    <div class="table-row">
      <span>Get train info</span>
      <span>GET /trains/{trainNumbers}</span>
      <span>Retruns list of train info having train number = {trainNumbers}</span>
    </div>
    <div class="table-row">
      <span>Get list of stations</span>
      <span>GET /stations</span>
      <span>Get list of stations for given query string </span>
    </div>
    <div class="table-row">
      <span>Get station info</span>
      <span>GET /stations/{stationCodes}</span>
      <span>Get station info for given station code(s) </span>
    </div>
    <div class="table-row">
      <span>Get schedule for given train numbers(s) </span>
      <span>GET /schedules/{trainNumbers} </span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get trains between stations </span>
      <span>GET /trainsBtwStations </span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get list of states</span>
      <span>GET /states</span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get all states</span>
      <span>GET /states/all</span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get list of zones</span>
      <span>GET /zones</span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get all zones</span>
      <span>GET /zones/all</span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get list of train types</span>
      <span>GET /trainTypes</span>
      <span></span>
    </div>
    <div class="table-row">
      <span>Get all train types</span>
      <span>GET /trainTypes/all</span>
      <span></span>
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
  font-size: 2.3em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

h2:nth-child(n + 2) {
  margin-top: 1em;
}

p {
  font-size: larger;
  line-height: 2.5ch;
  padding-bottom: 1em;
}

.table {
  border: 1px rgba(151, 151, 149, 0.304) solid;
}

.table span {
  padding: 5px;
}

.table > .table-row:first-child {
  background-color: rgb(244, 245, 246);
}

.table .table-row:nth-child(n + 2) {
  border-top: 1px rgba(151, 151, 149, 0.304) solid;
}

.table-operations .table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  column-gap: 10px;
}
</style>
