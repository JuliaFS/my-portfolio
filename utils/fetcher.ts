export const fetchDeveloperData = async () => {
  const res = await fetch('/mock/data.json');
  if (!res.ok) throw new Error('Failed to fetch developer data');
  return res.json();
};
