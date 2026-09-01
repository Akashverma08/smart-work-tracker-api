import { Provider } from '@nestjs/common';

export const databaseProvider: Provider = {
  provide: 'ASYNC_CONNECTION',

  useFactory: async () => {
    console.log('Connecting to database...');


    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log('Database connected!');

    return {
      connected: true,
      database: 'MyDatabase',
    };
  },
};