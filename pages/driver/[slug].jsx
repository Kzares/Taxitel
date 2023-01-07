'use client'
import { useRouter } from "next/router";
import { Footer, Navbar } from "../../components"
import { Driver } from "../../sections"
import { getProfile, getPaths } from "../../utils/services"
import { useState, useEffect } from "react";
import  Loader  from "../../components/Loader";

function Drivers({ }) {

  const [driver, setDriver] = useState(null);
  const router = useRouter()
  

  useEffect(() => {
    const fetching = async () => {
      if(router.query?.slug) await getProfile(router.query.slug)
      .then(data => setDriver(data.drivers[0]))
    }
    fetching()
  }, [router.query.slug]);
  console.log(driver)

  
  if (!driver) return <Loader />

  return (
    <div className="home overflow-hidden w-full min-h-screen">


      <Navbar />
      <Driver driver={driver} />

      <Footer />


    </div>
  )
}

export default Drivers
//
/* 
export async function getStaticProps({params}){
  const data = await getProfile(params.slug)
  
  return {
    props: { driver: data}
  }
}
export async function getStaticPaths(){
  const data = await getPaths()

  return{
      paths: data.drivers.map(({ slug }) => ({params: {slug}})),
      fallback:true
  }
}

*/
