import { http, HttpResponse } from 'msw';

import { url } from '../../../../constants/environment';

import data from './data.json';

export const handlers = [
  http.get(
    url.appointeeApi + "/users/:userName", ({ params }) => {
      const { userName } = params;
      return HttpResponse.json(data[userName]);
    }
  ),
];
