import { useCallback } from 'react';

function debounce(fn: Function) {
	let timer: any = null;
	return (...rest: any[]) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(null, rest);
		}, 500);
	};
}

export function useDebounce(fn: Function) {
	const f = useCallback(debounce(fn), []);
	return f;
}
