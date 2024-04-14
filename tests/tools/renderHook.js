import React, { useEffect, useState } from 'react';

import { render, waitFor, act as actBase } from '@testing-library/react';

var result;

const TestComponent = ({
    hook,
    initialHookConfig,
    isRerendering,
}) => {
    result = hook(initialHookConfig);
    const state = result[0];

    const [ isReady, setIsReady ] = useState(false);
    const [ isOnActionReady, setIsOnActionReady ] = useState(false);
    const [ initialState, setInitialState ] = useState(initialHookConfig.initialState);

    useEffect(() => {
        if (!isReady && !!state && JSON.stringify(state) != JSON.stringify(initialHookConfig.initialState)) {
            setInitialState(state);
            setIsReady(true);
        }
        else if (isRerendering == true && JSON.stringify(state) != JSON.stringify(initialState)) {
            setIsOnActionReady(true);
        }
    }, [state, isRerendering]);

    const divProps = {};
    if (isReady) {
        divProps["data-testid"] = "hook" + (isOnActionReady ? "OnAction" : "");
    }

    return (
        <div {...divProps}>
            {JSON.stringify(state)}
        </div>
    );
};

const renderHook = async hookConfig => {
    const {
        rerender: rerenderBase,
        getByTestId
    } = render(<TestComponent {...hookConfig} />);

    await waitFor(() => getByTestId("hook"));

    const act = async callback => {
        if (callback.constructor.name == "AsyncFunction") {
            await actBase(callback);
        }
        else {
            actBase(callback);
        }

        rerenderBase(<TestComponent {...hookConfig} isRerendering={true} />);
        await waitFor(() => getByTestId("hookOnAction"));
        
        return result[0];
    };
    const rerender = async props => {
        const rerenderHookConfig = Object.assign(
            hookConfig,
            {
                initialHookConfig: { 
                    props,
                },
            }
        );

        rerenderBase(<TestComponent {...rerenderHookConfig} isRerendering={true} />);

        await waitFor(() => getByTestId("hookOnAction"));
        return result[0];
    };

    return {
        act,
        rerender,
        state: result[0],
        functions: result[1],
    };
};

export default renderHook;
