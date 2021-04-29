import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load({
  // Get a token at https://dashboard.fingerprintjs.com
  // Wait a couple of seconds before a result appears
  token: 'sample_docs_token',
  // region: 'eu',
  // endpoint: 'https://fp.your.com',
})

;(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise
  const result = await fp.get(
    /* { linkedId: 'your-linked-id', tag: { yourTag: 123456 } } */
  )

  const visitorId = result.visitorId
  console.log('Your visitorId:', visitorId)
})()