import { useState } from 'react';

export function usePromise(promise) {
  const [state, setState] = useState({ result: null, error: null, pending: false });

  async function fire() {
    if (!state.pending) {
      setState({ result: null, error: null, pending: true });
      let result;

      try {
        result = await promise();
      } catch (e) {
        setState({ result: null, error: e, pending: false });
      }

      setState({ result, error: null, pending: false });
    }
  }

  return {
    fire,
    result: state.result,
    error: state.error,
    pending: state.pending
  };
}