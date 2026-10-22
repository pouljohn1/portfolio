// Sends www.pjanecze.xyz to the apex domain, keeping the path and query.
export default {
  fetch(request) {
    const url = new URL(request.url)
    url.hostname = "pjanecze.xyz"
    return Response.redirect(url.toString(), 301)
  },
}
