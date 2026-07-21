import { useEffect } from 'react';

const BASE = 'plato';
const DEFAULT_TITLE = 'plato — Harness Workforce Powers';

// Sets document.title for the current route (client-side, for this SPA).
// Pass a page-specific title like "For Employers" to get "plato — For Employers";
// pass nothing (home) to restore the default marketing title. Restores the
// default on unmount so a route without a title never inherits a stale one.
export function usePageTitle(title?: string) {
    useEffect(() => {
        document.title = title ? `${BASE} — ${title}` : DEFAULT_TITLE;
        return () => {
            document.title = DEFAULT_TITLE;
        };
    }, [title]);
}
