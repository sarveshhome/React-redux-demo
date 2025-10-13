import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export default function useStudentStats() {
  const students = useSelector((state) => state.student.students);

  const stats = useMemo(() => {
    return {
      count: students.length,
      sorted: [...students].sort((a, b) => a.name.localeCompare(b.name)),
    };
  }, [students]);

  return stats;
}
