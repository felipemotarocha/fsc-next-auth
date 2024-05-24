import { SessionProvider as _SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const SessionProvider = ({ children }: { children: ReactNode }) => {
  return <_SessionProvider>{children}</_SessionProvider>;
};

export default SessionProvider;
