import { useCallback, useState } from "react";

export const useAxios = <F extends (...args: any[]) => Promise<any>>(
  apiCall: F,
  parameters: Parameters<F>
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | undefined>();
  const [data, setData] = useState<Awaited<ReturnType<F>>>();
  const trigger = useCallback(
    async (runtimeParms?: Parameters<F>) => {
      setLoading(true);
      setData(undefined);
      try {
        if (runtimeParms) {
          const response = await apiCall(...runtimeParms);
          setData(response);
          setError(undefined);
        } else {
          const response = await apiCall(...parameters);
          setData(response);
          setError(undefined);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [apiCall, ...parameters]
  );

  return [loading, error, data, trigger] as const;
};
