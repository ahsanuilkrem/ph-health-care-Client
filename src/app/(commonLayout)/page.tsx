
import DoctorGrid from "@/components/modules/Consultation/DoctorGrid";
import { Hero } from "@/components/modules/Home/Hero";
import Specialities from "@/components/modules/Home/Specialties";
import Steps from "@/components/modules/Home/Steps";
import Testimonials from "@/components/modules/Home/Testimonials";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getDoctors } from "@/services/admin/doctorManagement";
import Head from "next/head";
import { Suspense } from "react";



export default async function Home ()  {

   const [doctorsResponse] = await Promise.all([
      getDoctors(),
    
    ]);
  
    const doctors = doctorsResponse?.data || [];

  return (
    <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Specialities />
        {/* <TopRatedDoctors /> */}
      
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<TableSkeleton columns={3} />}>
          <DoctorGrid doctors={doctors} />
        </Suspense>
        </div>
        <Steps />
        <Testimonials />
      </main>
    </>
  );
}
