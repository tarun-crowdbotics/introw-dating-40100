import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LoginPayload, LoginResponse} from '../type';
import {getLoginData, storeLoginData} from './storageService';

// update BASE URL value according to your project apis
const BASE_URL = 'https://a0f5-14-102-19-94.ngrok-free.app/'; //'https://fancy-bonus-39307.botics.co/';
const LOGIN = 'modules/basic-auth/login/';
const LOGOUT = 'modules/basic-auth/logout/';

export const loginAPI = createApi({
  reducerPath: 'loginAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async headers => {
      const authData = await getLoginData();
      if (authData?.token) {
        headers.set('Authorization', `Token ${authData?.token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    // login API
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (params: LoginPayload) => {
        return {
          url: `${LOGIN}`,
          method: 'POST',
          body: params,
        };
      },
      transformResponse(rawResult: LoginResponse) {
        if (rawResult?.token) {
          storeLoginData(rawResult);
        }
        return rawResult;
      },
    }),
    // logout api
    logout: builder.mutation<void, void>({
      query: () => {
        return {
          url: `${LOGOUT}`,
          method: 'POST',
        };
      },
    }),
  }),
});

export const {useLoginMutation, useLogoutMutation} = loginAPI;
