// console.log('var1');

const triggerSend = document.getElementById('trigger-send');
triggerSend.addEventListener('click', () => {
  const channelGuilId = 'login-bc13-4539-b4a5-077de485a2fd';
  const broadcast = new BroadcastChannel(channelGuilId);
  broadcast.postMessage({ id: 1, messsage: 'test' });
});

const triggerReceive = document.getElementById('trigger-receive');
triggerReceive.addEventListener('click', () => {
  const channelGuilId = 'login-bc13-4539-b4a5-077de485a2fd';
  const broadcast = new BroadcastChannel(channelGuilId);
  broadcast.addEventListener('message', (event) => {
    console.log('triggerReceive [EVENT]', event);
  });
});
