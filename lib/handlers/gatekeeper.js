module.exports = keepTheGate

function keepTheGate(opts, io, nextHandler) {
  if(!opts.localonly) {
    return nextHandler
  }

  return handle

  function handle(server, req, resp, parsed) {
    // Only permit requests from/to localhost. All others will get 404.
    var remoteOk = req.socket.remoteAddress === '127.0.0.1'
      , localOk = req.socket.localAddress === '127.0.0.1' 

    if(localOk && remoteOk) {
      return nextHandler(server, req, resp, parsed)
    }

    resp.writeHead(404, {'content-type': 'text/plain'})
    resp.end('not found ):')
  }
}

