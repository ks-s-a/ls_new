'use strict'

const app = require('koa')()
const router = require('koa-router')()
const utils = require('./lib/utils')
const views = require('co-views')
const render = views('templates', {
  map: {
    html: 'jade',
  },
})

const PORT = 3000

const routes = utils
  .getTemplates()
  .map(route => '/' + route)

router.get('/favicon.ico', function*() {
  this.body = ''
})

router.get(...routes, function* () {
  const templateName = this.path.slice(1) + '.jade'

  this.body = yield render(templateName, {})
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, () => 
    console.log(`The app was launched on ${PORT} port`))
