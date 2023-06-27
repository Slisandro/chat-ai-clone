import React, { useEffect } from "react";

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref = React.useRef<HTMLDivElement>();

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dep])
    // @ts-expect-error
    return ref;
};

export default useChatScroll;