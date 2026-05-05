export interface Launch {
    id: string;
    name: string;
    date_utc: string;
    rocket: string;
    links:{
        patch:{
            small:string
            large:string
        }
    };
    crew:{
        crew:string,
        role:string,
    };
    success:string;
    flight_number:number;
    launch_site:string;
    details:string;
}

async function getData(): Promise<Launch> {
  //ultimos lançamentos
  const res = await fetch('https://api.spacexdata.com/v5/launches/latest');
  const data: Launch = await res.json();

  //log dos dados para verificar se estão corretos
  console.log(data);

  //return é necessário para que os dados sejam acessíveis fora da função
  return data;
}
export { getData };

async function getPastData(): Promise<Launch[]> {
    const res = await fetch('https://api.spacexdata.com/v5/launches/past');
    const data: Launch[] = await res.json();
    console.log(data);
    return data;
}
export { getPastData };

//basicamente voce faz a api, depois faz a interface para dizer pro typescript o que ele vai receber