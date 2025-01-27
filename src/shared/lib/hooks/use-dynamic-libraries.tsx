import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type LibraryLoader<T extends Record<string, any>> = {
  [K in keyof T]: () => Promise<T[K]>;
};

interface DynamicLoaderContextPayload<T> {
  libraries: T | null;
  isLoaded: boolean;
}

interface DynamicLoaderProviderProps<T extends Record<string, any>> {
  children: ReactNode;
  loaders: LibraryLoader<T>;
}

export const createDynamicLibrariesContext = <T extends Record<string, any>>() => {
  const Context = createContext<DynamicLoaderContextPayload<T>>({
    libraries: null,
    isLoaded: false,
  });

  const useDynamicLibraries = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useDynamicLibraries must be used within a DynamicLoaderProvider');
    }
    return context;
  };

  const DynamicLoaderProvider: FC<DynamicLoaderProviderProps<T>> = ({ children, loaders }) => {
    const [libraries, setLibraries] = useState<T | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const loadLibraries = async () => {
        const entries = await Promise.all(
          Object.entries(loaders).map(async ([key, loader]) => [key, await loader()]),
        );
        setLibraries(Object.fromEntries(entries) as T);
        setIsLoaded(true);
      };

      loadLibraries();
    }, [loaders]);

    const value = useMemo(
      () => ({
        libraries,
        isLoaded,
      }),
      [libraries, isLoaded],
    );

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { DynamicLoaderProvider, useDynamicLibraries };
};
