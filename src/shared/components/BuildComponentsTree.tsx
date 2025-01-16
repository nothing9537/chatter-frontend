/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BuildComponentsTree = (components: any[], currentIndex = 0) => {
  if (currentIndex === components.length) {
    return <></>;
  }

  const CurrentComponent = components[currentIndex];

  return (
    <CurrentComponent>
      {BuildComponentsTree(components, currentIndex + 1)}
    </CurrentComponent>
  );
};
