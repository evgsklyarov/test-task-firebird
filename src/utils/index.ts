export const filterArrayByKeys = <T extends object>(
  items: T[],
  searchQuery: string,
  keys: Array<keyof T>
): T[] => {
  if (!searchQuery.trim()) {
    return items;
  }

  const lowerCaseQuery = searchQuery.toLowerCase();

  return items.filter((item) =>
    keys.some((key) => {
      const value = item[key];

      if (typeof value === 'string' || typeof value === 'number') {
        return value.toString().toLowerCase().includes(lowerCaseQuery);
      }

      return false;
    })
  );
};
