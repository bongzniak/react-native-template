import { z } from 'zod';

const schema = z.object({
  APP_SCHEME: z.string(),
  APP_NAME: z.string(),
  APP_ENV: z.enum(['dev', 'qa', 'real']),
  APP_BUNDLE_ID: z.string(),
});

const Env = schema.parse({
  APP_SCHEME: process.env.APP_SCHEME,
  APP_NAME: process.env.APP_NAME,
  APP_ENV: process.env.APP_ENV,
  APP_BUNDLE_ID: process.env.APP_BUNDLE_ID,
});

export default Env;
