module.exports = async message => {
  const panel = await message.channel.send(
    new Embed()
     .setDescription('Obtaining webhooks...'+emojis.loading)
  );
  const fetched = new Collection();
  await message.mentions.channels.forEach(
    async channel => {
      const hook = (await channel.fetchWebhooks());
      fetched.concat(hook);
    }
  );
  const hooks = [...fetched?.values()];
  if (!hooks?.first()) return panel.edit(
    new Embed()
     .setTitle('Not found')
     .setDescription('Cannot obtained webhooks!')
  );
}
