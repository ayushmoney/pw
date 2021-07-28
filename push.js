var push = require('web-push');
let vapidKeys = {
    publicKey: 'BKI4BR8Rjq8no3enn4NkDLWWuEghgRBRKCudP_cLzblVZWZXygz8w_ws7Ws61IHZ6v4-RmJvNnhGXkgqOtDV_0E',
    privateKey: 'saSaoYzjdcpQ_XTi75dcY3D2cXDLXnmcM6YyjosFvWE'
  }
  push.setVapidDetails('mailto:test@code.in',vapidKeys.publicKey,vapidKeys.privateKey)
  let sub ={};
  push.sendNotification(sub,'test message')