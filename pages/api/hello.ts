// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

//Esto puede ser de type o bien usando interface, el data se le asignan y definen los tipos de datos para poder usarlos en la respuesta  
type Data = {
  name:string; 
}

//uso data como definicion del tipo que será la respuesta en este caso es un objeto
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  res.status(200).json({ name: 'John Doe' })

}
