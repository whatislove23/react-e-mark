import { supabase } from '../supabaseClient';
import { map, get } from 'lodash';

export async function getAllSubjects() {
  try {
    let { data, status, error } = await supabase.from('subjects').select('*');
    return { data: data, status: status, error: error };
  } catch (e) {}
}



export async function getGroupsBySubjectId(id) {
  let { data} = await supabase
    .from('groups')
    .select('*, subjects!inner(*)')
    .eq('subjects.id', id);
  return {
    subject: get(data, [0, 'subjects', 0]),
    groups: map(data, ({ subjects, ...group }) => group),
  };
}
