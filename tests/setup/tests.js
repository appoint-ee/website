import { setupServer } from 'msw/node';
import { rest } from 'msw';

import { cleanup } from '@testing-library/react';

export const setupTests = ({ 
    endpoints,
    before = {},
    after = {},
}) => {
    const server = !!endpoints ? setupServer(...endpoints) : undefined;
    
    beforeAll(() => {  
        if (!!server) {
            server.listen();
        }  

        if (!!before.all) {
            before.all();
        }
    });

    beforeEach(async () => {
        
        if (!!before.each) {
            if (before.each.constructor.name === "AsyncFunction") {
                await before.each();
            }
            else {
                before.each();
            }
        }
    });
    
    afterEach(() => {
        if (!!server) {
            server.resetHandlers();
        }

        cleanup();

        if (!!after.each) {
            after.each();
        }
    });
    afterAll(() => {
        if (!!server) {
            server.close();
        }

        if (!!after.all) {
            after.all();
        }
    });

    return {
        server,
    };
};

export const setupAPIEndpoints = api => {
    return Object
        .keys(api)
        .map(endpointKey => {
            const endpoint = api[endpointKey];
            return rest.post(endpoint.url, (req, res, ctx) => res(ctx.json(endpoint.result)));
        });
};
