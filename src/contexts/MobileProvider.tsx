import { createContext, memo, ReactNode, useEffect, useState } from "react";

export const MobileContext = createContext<{ isMobile: boolean }>({
  isMobile: false,
});

const BaseMobileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isMobile, setMobile] = useState<boolean>(
    (window.visualViewport?.width ?? 0) < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setMobile((window.visualViewport?.width ?? 0) < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial state
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile: isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const MobileProvider = memo(BaseMobileProvider);
