
import Robosectiontext from "./Robosectiontext"
const Robosection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black 
    flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24
     px-10 relative overflow-hidden ">

        {/* left text section */}
        <Robosectiontext/>
       
     </section>
  )
}

export default Robosection