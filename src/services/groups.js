import { supabase } from '../supabaseClient';
import { map, get, filter, forEach } from 'lodash';

export async function getAllGroups() {
    let { data, status, error } = await supabase.from('groups').select('*');
    if(error){
        throw new Error(error)
    }
    return data
}

export async function createGroup(title) {
  let { data, status, error } = await supabase
    .from('groups')
    .insert({ title: title });
}


async function getLessonForStudentBySubjectId(student, subjectId) {
  const { data: lessons, error } = await supabase
    .from('lessons_students')
    .select('lesson:lessons(*, journal:journals!inner(subject_id) )')
    .eq('student_id', student.id)
    .eq('lesson.journal.subject_id', subjectId);

  return {
    ...student,
    lessons: map(lessons, 'lesson').filter(Boolean),
  };
}

function normalizeMarkForStudentPerLesson(studentId, lesson) {
  const { marks, ...restLesson } = lesson;

  const [mark] = filter(marks, ['student_id', studentId]);

  return {
    ...restLesson,
    mark,
  };
}

function removeNullableLessonsFromStudent(student) {
  const { lessons, ...restStudent } = student;

  const lessonsWithoutNull = map(lessons, 'lesson').filter(Boolean);

  return {
    ...restStudent,
    lessons: map(lessonsWithoutNull, lesson =>
      normalizeMarkForStudentPerLesson(student.id, lesson),
    ),
  };
}

export async function getGroupStudents(subjectId, groupId) {
  const { data: students, error } = await supabase
    .from('students')
    .select(
      `*, lessons:lessons_students!inner( lesson:lessons(
        *,
        journal:journals!inner( subject:subjects(name,id)  ),
        marks!inner(grade,id,student_id)    
        )  )`,
    )
    .eq('group_id', groupId)
    .eq('lessons.lesson.journal.subject_id', subjectId);
  const { data: group } = await supabase
    .from('groups')
    .select('*')
    .eq('id', groupId)
    .limit(1)
    .single();
  const { data: subject } = await supabase
    .from('subjects')
    .select('*')
    .eq('id', subjectId)
    .limit(1)
    .single();

  const response = {
    subject: subject,
    group: group,
    students: map(students, removeNullableLessonsFromStudent),
  };
  console.log('response', response);
  return response;
}
export async function getStudentsByGroupId(id) {
  // console.log(id)
  const { data } = await supabase
    .from('students')
    .select('id')
    .eq('group_id', id);
  return data;
}
export async function getLessonsByGroupId(id) {
  // console.log(id)
  const { data } = await supabase
    .from('journals')
    .select('lesson_id')
    .eq('subject_id', id);
  return data;
}
