<template>
  <main>
    <h1>API Wrapper</h1>
    <p>
      For your real-life application, it is best if you use an API wrapper. Below is a list of open
      source API wrappers you may use:
    </p>
    <ol>
      <li>
        <strong>NodeJS</strong>
        <p>
          We developed a comprehensible wrapper for the Javascript language.
          <br />
          To use it, first install the api-railway package from npm:
        </p>
        <code class="code"> npm install api-railway</code>
        <p>
          Please visit
          <a href="https://github.com/ZennoZenith/api-railway">
            https://github.com/ZennoZenith/api-railway
          </a>
          for further documnetation
        </p>
      </li>
    </ol>

    <h2>Are there wrappers you wish we had?</h2>
    <p>
      Drop us a line and we can consider developing them.
      <a href="mailto:zennozenith@gmail.com">zennozenith@gmail.com</a>.
    </p>
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
