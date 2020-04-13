module.exports = {
  name: 'ping',
  description: 'It, like, pings then pongs',
  execute(message, args) {
    message.channel.send("Pong!");
  },
};