import React from 'react'
import Header from '@/components/Header'
import MobileNavigation from '@/components/MobileNavigation'
import Sidebar from '@/components/Sidebar'
import { getcurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { Toaster } from "@/components/ui/toaster";
import "../globals.css";

export const dynamic = 'force-dynamic';

const layout = async({children}:{children: React.ReactNode}) => {
  const currentUser = await getcurrentUser();

  if(!currentUser) return redirect('/sign-in');
  return (
    <main className= "flex h-screen">
        <Sidebar {...currentUser}/>
        <section className="flex h-full flex-1 flex-col">
          <MobileNavigation {...currentUser} /> 
          <Header userId={currentUser.$id} accountId={currentUser.accountId} />
          <div className='main-content'>
            {children}
          </div>
        </section>

      <Toaster/>
    </main>
  )
}

export default layout