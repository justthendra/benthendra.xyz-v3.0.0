import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Repos from "./components/Repos";
import Technologies from "./components/Tech";

export default function Home() {

  return (
    <>

      <body>
        <head>
          <title>heythendra</title>
        </head>
        <main>
          <Navbar />
          <div class="flex flex-col items-center justify-center py-44">
            <h1 className="text-gray-400 font-[oceanwide] font-bold tracking-[2px] text-center text-6xl">Hi there 👋🏻,<br/>
            I&apos;m <span id="headerr" className="text-[#006af9] italic">Thendra</span>.</h1>
            <p className="font-[galano] text-[18px] text-gray-300 text-center">I&apos;m Hasan and 18 years old. I&apos;m a Full-stack Developer,<br/> I have been working with software for about 7 years.<br/>I&apos;m trying to go further by learning new languages.</p>
          </div>
        <Repos/>
          <Technologies/>
          <Footer/>
        </main>
      </body>
    </>
  )
  
}
