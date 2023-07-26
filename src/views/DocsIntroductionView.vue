<template>
  <h2>Introduction</h2>
  <p>
    The Railway API is a REST API for getting train , schedules, station , trains between stations
    and other railway related informations. The API consists of several resources which support
    standard HTTP operation (GET) for accomplishing these tasks. Each supported resource-operation
    pair is documented in detail.
  </p>
  <h2>Resource Representations</h2>
  <p>For all methods which accept or return structured data, uses JSON format.</p>

  <h2>URLs</h2>
  <p>The URLs for the various resources use the following pattern:</p>
  <br />
  <span class="code">
    <code> https://api.railwayapi.site/api/v{version}/{operation-specific component}</code>
  </span>
  <p>The components of the URL are:</p>
  <ul>
    <li>
      <i>version</i> - the API <router-link to="/docs/versioning">version</router-link> . Currently
      there is only one version, "1", in operation
    </li>
    <li>
      <i>operation-specific component</i> - this identifies the actual operation you want to do, eg
      /trains for getting a list of trains
    </li>
  </ul>
  <h2>Libraries</h2>
  <p>
    We have an official wrapper for the Railway API for all operations described on these pages.
  </p>
  <ul>
    <li><a href="https://github.com/ZennoZenith/api-railway">NodeJS</a></li>
  </ul>

  <br />
  <br />
  <p>
    If you created your own library and would like it posted here,
    <a href="mailto:zennozenith@gmail.com">please let us know.</a>
  </p>
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
}
li {
  list-style: inside;
  font-size: larger;
  line-height: 2.5ch;
}
</style>
