import {url} from '../conts';

export const GetCategoriasApi = async () => {
  const list = await fetch(`${url}/categoria`, {
    method: 'get',
  })
    .then(response => response.json())
    .then((list: {id: number; nome: string}[]) => {
      console.log(list);
      return list;
    });


  return list;
};
