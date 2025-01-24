import { FC, ReactNode } from 'react';

import { Loader } from '../ui/loader';

interface ContentWithLoaderProps {
  content: ReactNode;
  loaderClassName?: string;
  isLoading: boolean;
}

export const ContentWithLoader: FC<ContentWithLoaderProps> = ({ loaderClassName, content, isLoading }) => {
  if (isLoading) {
    return <Loader className={loaderClassName} />;
  }

  return content;
};
