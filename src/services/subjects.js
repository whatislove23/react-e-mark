import { supabase } from '../supabaseClient';
import { map, get } from 'lodash';

export async function getAllSubjects() {
  try {
    let { data, status, error } = await supabase.from('subjects').select('*');
    return { data: data, status: status, error: error };
  } catch (e) {}
}

export async function getGroupsBySubjectId(id) {
  let { data } = await supabase
    .from('enrollments')
    .select('groups(*), subjects!inner(*)')
    .eq('subjects.id', id);
  console.log('data', data);
  console.log('122', get(data));
  return data;
  return {
    subject: get(data, [0, 'subjects', 0]),
    groups: map(data, ({ subjects, ...group }) => group),
  };
}
