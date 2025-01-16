import { FC } from 'react';
import { Loader } from '../ui/loader';

interface TextWithLoaderProps {
  text: string;
  loaderClassName?: string;
  isLoading: boolean;
}

export const TextWithLoader: FC<TextWithLoaderProps> = ({ loaderClassName, text, isLoading }) => {
  if (isLoading) {
    return <Loader className={loaderClassName} />;
  }

  return text;
};
