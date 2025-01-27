import { createDynamicLibrariesContext } from '@/shared/lib/hooks/use-dynamic-libraries';

type DateFns = {
  DateFns: typeof import('date-fns');
}

export const DateFnsLoader = {
  DateFns: () => import('date-fns'),
};

export const {
  DynamicLoaderProvider: DateFnsProvider,
  useDynamicLibraries: useDateFns,
} = createDynamicLibrariesContext<DateFns>();
