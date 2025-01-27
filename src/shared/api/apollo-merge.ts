import { FieldFunctionOptions } from '@apollo/client';

export function mergeWithPagination<TData, TArgs extends Record<string, any>>(
  existing: TData[],
  incoming: TData[],
  { args }: FieldFunctionOptions<TArgs>,
) {
  const merged = existing ? existing.slice(0) : [];
  const typedArgs = args!;

  for (let i = 0; i < incoming.length; i += 1) {
    merged[typedArgs.skip + i] = incoming[i];
  }

  return merged;
}
