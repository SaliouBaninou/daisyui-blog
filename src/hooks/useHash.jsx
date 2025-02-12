import { useEffect, useState } from "react";

export function useHash() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const hashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", hashChange);
    return () => {
      window.removeEventListener("hashchange", hashChange);
    };
  }, []);

  return {
    page: hash.replace("#", "").toLowerCase() || "home",
  };
}
