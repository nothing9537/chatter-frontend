/* eslint-disable react/destructuring-assignment */
export const BuildComponentsTree = <Components extends readonly React.ElementType[]>(
  components: Components,
  propsArray: { [K in keyof Components]: Components[K] extends React.ElementType ? React.ComponentProps<Components[K]> : never },
  currentIndex = 0,
): React.ReactElement | null => {
  if (currentIndex === components.length) {
    return null;
  }

  const CurrentComponent = components[currentIndex];
  const currentProps = propsArray[currentIndex];

  return (
    <CurrentComponent {...currentProps}>
      {BuildComponentsTree(components, propsArray, currentIndex + 1)}
    </CurrentComponent>
  );
};
