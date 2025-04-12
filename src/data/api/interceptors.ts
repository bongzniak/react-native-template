import { AxiosInstance, AxiosRequestHeaders } from 'axios';

import env from '@/config/env';

async function getDefaultHeaders(): Promise<Record<string, string>> {
  // 기본 헤더
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  return headers;
}

export const applyInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    async config => {
      const headers = await getDefaultHeaders();
      config.headers = {
        ...(config.headers ?? {}),
        ...(headers as Record<string, any>),
      } as AxiosRequestHeaders;

      if (['dev', 'qa'].includes(env.APP_ENV)) {
        console.log('[API REQUEST]');
        console.log(
          JSON.stringify(
            {
              method: config.method,
              url: `${config.baseURL}${config.url}`,
              params: config.params,
              data: config.data,
              headers: config.headers,
            },
            null,
            2,
          ),
        );
      }

      return config;
    },
    error => {
      if (['dev', 'qa'].includes(env.APP_ENV)) {
        console.log('[API REQUEST ERROR]');
        console.log(JSON.stringify(error, null, 2));
      }
      return Promise.reject(error);
    },
  );

  client.interceptors.response.use(
    response => {
      if (['dev', 'qa'].includes(env.APP_ENV)) {
        console.log('[API RESPONSE]');
        console.log(
          JSON.stringify(
            {
              url: `${response.config.baseURL}${response.config.url}`,
              status: response.status,
              data: response.data,
            },
            null,
            2,
          ),
        );
      }
      return response;
    },
    error => {
      if (['dev', 'qa'].includes(env.APP_ENV)) {
        console.log('[API RESPONSE ERROR]');
        console.log(
          JSON.stringify(
            {
              url: error?.config?.url,
              message: error.message,
              response: error.response,
            },
            null,
            2,
          ),
        );
      }
      return Promise.reject(error);
    },
  );
};
