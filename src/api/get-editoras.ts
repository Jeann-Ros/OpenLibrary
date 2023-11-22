import {url} from '../conts';

export const GetEditorasApi = async () => {
  const list = await fetch(`${url}/editora`, {
    method: 'get',
  })
    .then(response => response.json())
    .then((list: {id: number; nome: string}[]) => list);

  return list;
};
