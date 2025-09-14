import { useState } from 'react';

const useFilter = (initialData = []) => {
  const [filter, setFilter] = useState('');
  const filteredData = initialData.filter(item =>
    Object.values(item).some(val =>
      val.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  return { filter, setFilter, filteredData };
};

export default useFilter;