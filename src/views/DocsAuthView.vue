<template>
  <h2>Authentication</h2>
  <p>All operations must be executed over HTTPS.</p>
  <p>As of now there is not authentication required to use our API</p>
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
</style>
