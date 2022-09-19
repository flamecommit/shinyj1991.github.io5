/** yaml 문법을 javascript Object로 변환 해주는 모듈 **/
import jsYaml from 'js-yaml';

export const parseMarkdown = (markdown) => {
  const parts = markdown.split('---');
  const match = parts[1];
  const headers = jsYaml.load(match, 'utf-8');
  const index = markdown.indexOf(match) + match.length;
  const body = markdown.substring(index + 3, markdown.length).trim();

  console.log(headers, body);

  return { headers, body }
}