export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // This will be an object representation of the html template.
    console.log(html)
    html.head.push(`<link rel="preconnect" href="https://fonts.googleapis.com">`)
    html.head.push(`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`)
    html.head.push(`<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">`)
  })
  // You can also intercept the response here.
  nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
})
