<template>
  <main>
    <h1>NOT FOUND</h1>
    <p>{{ $route.fullPath }} does not exist</p>
  </main>
</template>

<style scoped>
.code {
  width: 100%;
  display: block;
  padding: 8px;
  border-radius: 5px;
  border: solid 1px gray;
  background-color: rgb(245, 245, 245);
}
main {
  margin: 2em 2em;
  padding-left: max(12vw, 1em);
  padding-right: max(24vw, 1em);
}

h1 {
  grid-area: Heading;
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  font-size: 3em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
}

p {
  font-size: 1em;
}

ol {
  font-size: 1em;
  padding-left: 1em;
}

h2 {
  margin-top: 1em;
}
</style>
