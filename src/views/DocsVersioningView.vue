<template>
  <h2>Versioning</h2>
  <p>
    API releases are versioned using a two part versioning scheme: {major version}.{minor version}.
  </p>
  <p>
    We broadly follow <a href="https://semver.org/">Semantic Versioning</a> principles when
    versioning the API. The major version number is incremented when a backwards-incompatible change
    occurs. The URLs used in the API reflect this by incorporating the major version, using the
    following pattern (relative to the base URL):
  </p>
  <span class="code">
    <code> /api/v{major version number}/{operation-specific component} </code>
  </span>

  <br />
  <p>
    Minor version numbers are incremented when backwards-compatible changes occur. These do not
    require a separate URL.
  </p>

  <p>The following changes are considered <b>backwards incompatible:</b></p>
  <ul>
    <li>removal of a previously supported HTTP resource</li>
    <li>an HTTP resource no longer responding to a previously supported HTTP verb</li>
    <li>
      A new mandatory attribute or element in an input JSON document (this may be either an entirely
      new mandatory attribute/element, or a previously optional attribute/element that is now
      mandatory)
    </li>
    <li>
      A previously always present attribute/element in an output JSON document that is now either
      optional or not present
    </li>
  </ul>

  <br />
  <p>The following changes are considered <b> backwards-compatible: </b></p>
  <ul>
    <li>addition of new HTTP resources</li>
    <li>support for additional verbs on existing HTTP resources</li>
    <li>new optional attributes or elements in an input JSON document</li>
    <li>
      previously mandatory attributes or elements in an input JSON document being made optional
    </li>
    <li>new attributes or elements introduced in an output JSON document</li>
  </ul>

  <br />

  <p>
    As these lists indicate, the JSON documents produced and consumed by our API are not based on a
    strict schema. Client implementations should accordingly be flexible and capable of supporting
    (eg by ignoring) new elements and attributes in the JSON beyond those specified in this
    document.
  </p>
  <p>
    We anticipate supporting at least the two most recent major releases of the API (including the
    current one) at any given time.
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
  padding-bottom: 1em;
}

ul {
  padding-left: 1em;
}
li {
  /* list-style: inside; */
  font-size: larger;
  line-height: 2.5ch;
}
</style>
