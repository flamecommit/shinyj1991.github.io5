/** yaml 문법을 javascript Object로 변환 해주는 모듈 **/
import jsYaml from 'js-yaml';

export const parseMarkdown = (markdowns) => {
  return markdowns.map((md) => {
    const parts = md.split('---');
    const match = parts[1];
    const headers = jsYaml.load(match, 'utf-8');
    const index = md.indexOf(match) + match.length;
    const markdown = md.substring(index + 3, md.length).trim();

    return { headers, markdown }
  })
}