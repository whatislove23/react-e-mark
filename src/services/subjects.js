import { supabase } from '../supabaseClient';
import { map, get } from 'lodash';

export async function getAllSubjects() {
  try {
    let { data, status, error } = await supabase.from('subjects').select('*');

    if (error) {
      throw new Error(error);
    }
    return { data: data, status: status, error: error };
  } catch (e) {}
}



export async function getGroupsBySubjectId(id) {
  let { data, status, error } = await supabase
    .from('groups')
    .select('*, subjects!inner(*)')
    .eq('subjects.id', id);
  if (error) {
    throw new Error(error);
  }
  return {
    subject: get(data, [0, 'subjects', 0]),
    groups: map(data, ({ subjects, ...group }) => group),
  };
}
