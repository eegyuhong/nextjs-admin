let collapsed = true;

export function useCollapsed() {
  const getCollapsed = collapsed;

  const toggleCollapsed = () => {
    collapsed = !collapsed;
  };

  return {
    getCollapsed,
    toggleCollapsed,
  };
}
