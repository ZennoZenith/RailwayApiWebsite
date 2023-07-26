<script setup lang="ts">
import { StatusCodes } from 'http-status-codes'

const BASE_PATH = 'https://railwayapi.site/docs'

const errorCodes = [
  {
    httpCode: StatusCodes.FAILED_DEPENDENCY,
    code: 'ERR-0001',
    type: 'UnDocumentedError',
    title: 'Undocumented error',
    description: 'Undocumented error has occured. Developers have been notofied.',
    href: `${BASE_PATH}/errorcodes#UnDocumentedError`,
    path: '',
  },

  {
    httpCode: StatusCodes.TOO_MANY_REQUESTS,
    code: 'ERR-0002',
    type: 'TooManyReqeust',
    title: 'Too many request',
    description: 'Too many request. Check Ratelimit-Reset header for reset rate limit time.',
    href: `${BASE_PATH}/errorcodes#TooManyReqeust`,
    path: '',
  },

  {
    httpCode: StatusCodes.NOT_FOUND,
    code: 'ERR-0003',
    type: 'NotFound',
    title: 'Resource not found',
    description: 'No resource found for given parameters.',
    href: `${BASE_PATH}/errorcodes#NotFound`,
    path: '',
  },

  {
    httpCode: StatusCodes.NOT_FOUND,
    code: 'ERR-0004',
    type: 'RouteNotExist',
    title: 'Route does not exist',
    description: 'Route does not exist',
    href: `${BASE_PATH}/errorcodes#RouteNotExist`,
    path: '',
  },

  {
    httpCode: StatusCodes.UNAUTHORIZED,
    code: 'ERR-0005',
    type: 'Unauthorized',
    title: 'Unauthorized',
    description: 'Unauthorized API key. Contact developer.',
    href: `${BASE_PATH}/errorcodes#Unauthorized`,
    path: '',
  },

  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0006',
    type: 'QueryStringUnspecified',
    title: 'Query string undpecified',
    description: 'Query parameter (q) is unspecified. See current route docs for more details.',
    href: `${BASE_PATH}/errorcodes#QueryStringUnspecified`,
    path: '',
  },

  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0007',
    type: 'ParamStationCodeUnspecified',
    title: 'Param unspecified',
    description: 'Station codes param unspecified',
    href: `${BASE_PATH}/errorcodes#ParamStationCodeUnspecified`,
    path: '',
  },

  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0008',
    type: 'QueryFromStationUnspecified',
    title: 'Query from station code undpecified',
    description: 'Query form station code is unspecified.',
    href: `${BASE_PATH}/errorcodes#QueryFromStationUnspecified`,
    path: '',
  },

  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0009',
    type: 'QueryToStationUnspecified',
    title: 'Query to station code undpecified',
    description: 'Query to station code is unspecified.',
    href: `${BASE_PATH}/errorcodes#QueryToStationUnspecified`,
    path: '',
  },

  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0010',
    type: 'ParamTrainNumberUnspecified',
    title: 'Param train number unspecified',
    description: 'Param trainNumber is unspecified in URI',
    href: `${BASE_PATH}/errorcodes#ParamTrainNumberUnspecified`,
    path: '',
  },
]
</script>

<template>
  <h2>Error Codes</h2>

  <section class="table table-error-codes">
    <div class="table-row">
      <span class="table-header">Error Code</span>
      <span class="table-header">HTTP status code</span>
      <span class="table-header">Description</span>
      <span class="table-header">Type</span>
    </div>

    <div
      v-for="error in errorCodes"
      :key="error.code"
      class="table-row"
      :class="{ highlight: $route.hash === `#${error.type}` }">
      <span :id="error.type" class="min-width">{{ error.code }}</span>
      <span class="min-width">{{ error.httpCode }}</span>
      <span class="min-width">{{ error.description }}</span>
      <span class="min-width">{{ error.type }}</span>
    </div>
  </section>
</template>

<style scoped>
.highlight {
  background-color: blueviolet;
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
}

h2:nth-child(n + 2) {
  margin-top: 1em;
}

p {
  font-size: larger;
  line-height: 2.5ch;
}

.min-width {
  min-width: 0;
  overflow: hidden;
  text-overflow: clip;
}
.min-width:hover {
  overflow: auto;
}
.table {
  border: 1px rgba(151, 151, 149, 0.304) solid;
  text-align: left;
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

.table-error-codes .table-row {
  display: grid;
  grid-template-columns: 1fr 0.5fr 4fr 1.6fr;
  column-gap: 10px;
}
</style>
