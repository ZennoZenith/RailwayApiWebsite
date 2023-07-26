<template>
  <main>
    <section class="intro-section">
      <h2>Unofficial Indian Railway API</h2>
      <p>A RESTful API to get up to date <br />railway information.</p>
      <button class="start-buiding" @click="$router.push({ name: 'docs' })">START BUILDING</button>
    </section>
    <section>
      <h2>Why Use Railway API</h2>
      <div class="grid">
        <div>
          <img alt="speed icon" class="icon" src="@/assets/lightning-2-svgrepo-com.svg" />
          <h3>Speed</h3>
          <ul>
            <li>Less than 100ms for a request</li>
          </ul>
        </div>
        <div>
          <img alt="accuracy icon" class="icon" src="@/assets/circle-check-svgrepo-com.svg" />
          <h3>Accuracy</h3>
          <ul>
            <li>information frequently updated</li>
          </ul>
        </div>
        <div>
          <img alt="Money icon" class="icon" src="@/assets/money-svgrepo-com.svg" />
          <h3>Free</h3>
          <ul>
            <li>No usage cost</li>
          </ul>
        </div>
        <div>
          <img alt="Ease of use icon" class="icon" src="@/assets/rocket-filled-svgrepo-com.svg" />
          <h3>Ease of Use</h3>
          <ul>
            <li>No sign in required</li>
            <li>No API key for basic plan</li>
            <li>Well documented API</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="info-section">
      <h3>Authentication</h3>
      <p>
        <b> You do not need to authenticate in order to explore the RailwayAPI data. </b> However,
        if you will be intensively using the APIs to, say, support a mobile application, then you
        should sign up for a RailwayAPI developer key.
      </p>
      <h3>Web Service Rate Limits</h3>
      <p>
        Limits are placed on the number of API requests you may make using your API key. Rate limits
        may vary by service, but the defaults are: Hourly Limit: 1,000 requests per hour For each
        API key, these limits are applied across all
        <span style="color: magenta">api.railwayapi.site</span> API requests. Exceeding these limits
        will lead to your API key being temporarily blocked from making further requests. The block
        will automatically be lifted by waiting an hour. If you need higher rate limits,
        <a href="mailto:zennozenith@gmail.com">contact us</a>.
      </p>
      <h3>DEMO_KEY Rate Limits</h3>
      <p>
        In documentation examples, the special DEMO_KEY api key is used. This API key can be used
        for initially exploring APIs prior to signing up, but it has much lower rate limits, so
        you’re encouraged to signup for your own API key if you plan to use the API (signup is quick
        and easy). The rate limits for the DEMO_KEY are:
      </p>
      <ul>
        <li>Hourly Limit: 600 requests per IP address per hour</li>
        <li>Daily Limit: 1000 requests per IP address per day</li>
      </ul>
      <h3>How Do I See My Current Usage?</h3>
      <p>
        Your can check your current rate limit and usage details by inspecting the RateLimit-Limit
        and RateLimit-Remaining HTTP headers that are returned on every API response. For example,
        if an API has the default hourly limit of 1,000 request, after making 2 requests, you will
        receive this HTTP header in the response of the second request:
        <br />
        <br />
        <i> RateLimit-Remaining: 998 </i>

        <br />
        <br />
        <b> The hourly counters for your API key reset on a rolling basis. </b>

        <br />
        <br />
        Example: If you made 500 requests at 10:15AM and 500 requests at 10:25AM, your API key would
        become temporarily blocked. This temporary block of your API key would cease at 11:15AM, at
        which point you could make 500 requests. At 11:25AM, you could then make another 500
        requests. Anyone can register for an api.nasa.gov key, which can be used to access data
        across federal agencies.
      </p>
    </section>

    <section class="footer">
      <h4>Official sites</h4>
      <ul>
        <li><a href="https://www.irctc.co.in/nget/">IRCTC</a></li>
        <li>
          <a href="https://enquiry.indianrail.gov.in/ntes/">
            Indian Rail - National Train Enquiry System - Indian Railways
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
section {
  padding: 5em 10vw 5em 10vw;
  text-align: center;
  min-height: 40vw;
}

section:nth-child(2n) {
  color: white;
  background-color: rgb(18, 15, 25);
}
section:nth-child(2n) h2 {
  color: inherit;
}

h2 {
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  font-size: 3em;
  letter-spacing: 1px;
  /* font-weight: bolder; */
  margin-bottom: 1em;
}
.intro-section p {
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    sans-serif;
  font-size: 1.5em;
  margin-bottom: 3em;
}

.start-buiding {
  letter-spacing: 2px;
  font-weight: 550;
  padding: 1em 1.5em;
  font-family: 'Rubik', sans-serif;
  font-size: 1.2em;
  background-color: #eb5c28;
  color: white;
  outline: none;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
}
.start-buiding:hover {
  outline: none;
  background: #c94d20;
  border: 1px solid transparent;
}
.start-buiding:focus {
  outline: none;
  background: #c94d20;
  border: 1px solid transparent;
}

.start-buiding:active {
  outline: none;
  border: 1px solid grey;
}

.grid {
  display: grid;
  gap: 2em;
  justify-content: space-between;
  font-family: 'Rubik', sans-serif;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  /* list-style-position: inside; */
}
.grid h3 {
  font-size: x-large;
}

.icon {
  width: 2em;
}
ul {
  padding-left: 1em;
}

.info-section h3 {
  text-align: left;
  color: rgb(46, 26, 105);
  font-family: 'Raleway', sans-serif;
  font-size: 2.5em;
  letter-spacing: 1px;
  margin-top: 1.5em;
}
.info-section p {
  text-align: left;
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    sans-serif;
  font-size: 1.7em;
}
.info-section ul {
  text-align: left;
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    sans-serif;
  font-size: 1.7em;
}

.footer {
  text-align: left;
  height: fit-content;
  min-height: 0;
}

@media (width <= 50em) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
