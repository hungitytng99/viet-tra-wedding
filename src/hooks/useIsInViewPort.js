import { useEffect, useMemo, useState } from "react";

function useIsInViewport(ref, isOnceTime) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  useEffect(() => {
    if (isIntersecting && isOnceTime) {
      observer.disconnect();
    }
  }, [isIntersecting]);

  return isIntersecting;
}
export default useIsInViewport;
