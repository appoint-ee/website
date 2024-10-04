import { setupWorker } from 'msw/browser';

import { handlers as userNameHandlers } from './api/people/userName/handlers';
 
export const worker = setupWorker(
    ...userNameHandlers,
    
);
