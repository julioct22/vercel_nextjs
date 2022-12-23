import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { DarkLayout } from '../layouts/DarkLayout'
export default function AboutPage() {
  return (
    <>
     
        <h1 className={'title'}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>

        </h1>

        <p className={'description'}>
          ACERCA DE NOSOTROS{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
     
    </>


  )
}



AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
      </MainLayout>
  )
}
