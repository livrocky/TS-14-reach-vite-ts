import axios from 'axios';
import Reminder from '../types/reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://dummyjson.com/',
  });

  async getReminders(): Promise<Reminder[]> {
    const resp = await this.http.get<Reminder[]>('todos');
    return resp.data;
  }
}

export default new ReminderService();
