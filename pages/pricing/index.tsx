import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'


export default function PricingPage() {
  return (
   <MainLayout> 
    <h1 className={'title'}>
      {/* Ir a <a href="/about">About</a> */}
      Ir a <Link href="/">Home Page</Link>
    </h1>

    <p className={'description'}>
      PRICING PAGE{' '}
      <code className={'code'}>pages/pricing/pricing.jsx</code>
    </p>
  </MainLayout>
  )
}
