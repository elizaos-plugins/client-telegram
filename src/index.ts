import { TelegramClientInterface } from './client';

const telegramPlugin = {
  name: 'telegram',
  description: 'Telegram client plugin',
  clients: [TelegramClientInterface],
};
export default telegramPlugin;
