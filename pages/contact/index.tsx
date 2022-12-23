import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'

export default function ContactPage() {
  return (
   <MainLayout> 
    <h1 className={'title'}>
      {/* Ir a <a href="/about">About</a> */}
      Ir a <Link href="/">Home</Link>
    </h1>

    <p className={'description'}>
      CONTACT PAGE{' '}
      <code className={'code'}>pages/contact.jsx</code>
    </p>
  </MainLayout>
  )
}
