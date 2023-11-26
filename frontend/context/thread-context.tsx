import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/dummyData";

export interface Reload {
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
}

export const ThreadsContext = createContext<Thread[]>([]);
export const ReloadContext = createContext<Reload>({} as Reload);

export const ThreadsProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setThreads(generateThreads());
  }, []);

  useEffect(() => {
    if (reload && count < 5) {
      const newThreads = generateThreads();
      setThreads([...newThreads, ...threads]);
      setCount(count + 1);
      setReload(false);
    } else if (reload && count >= 5) {
      setThreads(generateThreads());
      setCount(0);
    }
  }, [reload]);

  return (
    <ThreadsContext.Provider value={threads}>
      <ReloadContext.Provider value={{ reload, setReload }}>
        {children}
      </ReloadContext.Provider>
    </ThreadsContext.Provider>
  );
};
