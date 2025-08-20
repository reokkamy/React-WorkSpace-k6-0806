// src/lib/usePromise.jsx
import { useEffect, useState } from "react";

export default function usePromise(promiseCreator, deps) {
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let alive = true;
        const run = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await promiseCreator();
                if (alive) setResolved(result);
            } catch (e) {
                if (alive) setError(e);
            } finally {
                if (alive) setLoading(false);
            }
        };
        run();
        return () => { alive = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [loading, resolved, error];
}
