import Header from '@/components/shared/header';
import Footer from '@/components/shared/header/footer';


export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-col flex-1'>{children}</main>
      <Footer />
    </div>
  )
}