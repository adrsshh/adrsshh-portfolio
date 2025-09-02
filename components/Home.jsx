import React from 'react'

const Home = () => {
 function HandleClick2(){
  
     window.open('https://www.linkedin.com/in/adharsh-kumar-singh-jeet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','noopener','noreferer')

 }
  function HandleClick1(){
  alert("Will be Updated Shortly😊")
     
 }
 function HandleClick3(){
  window.open('https://www.instagram.com/adrsshh/')
     
 }
 function HandleClick4(){
  window.open('https://github.com/adrsshh')
     
 }
 function HandleClick5(){
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=singh.adarsh2003@gmail.com')
     
 }

  
  return (
    <>
      <div className='text-amber-50 mx-4 md:mx-10 p-2 mt-10  min-w-fit max-w-full h-fit flex flex-col md:flex-row justify-between items-center '>
        <div className='text-center md:text-left'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl md:ml-14'>I am</h1>
          <h5 className='text-6xl sm:text-7xl md:text-8xl xl:text-9xl mt-2 md:ml-8 text-amber-300 font-extrabold '>
            Adharsh
          </h5>
          <h3 className='text-3xl sm:text-4xl md:text-5xl mt-2 md:ml-9'>KUMAR SINGH</h3>
        </div>
        <img
          className='w-40 h-40 sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-100 lg:h-100 rounded-[200px] shadow-lg shadow-amber-400 mt-6 md:mt-0 md:mr-14 object-cover border-2 hover:border-8 border-red-100 hover:border-x-blue-400 ...'
          src='/assets/JEETAI.jpg'
          alt='photo'
        />
      </div>

      <div className='grid grid-cols-5 gap-2 sm:gap-7  text-amber-50 mx-4 md:mx-10 mt-15 md:ml-14'>
        <button onClick={HandleClick1} className='w-10 hidden sm:inline  sm:w-full border-2 p-3 transition delay-1 duration-200  ease-in-out rounded-3xl border-amber-300 hover:cursor-pointer hover:opacity-25 hover:-translate-y-1 hover:scale-110'>
          My Resume 
        </button>
        <button onClick={HandleClick2}  className='w-10 hidden sm:inline  sm:w-full border-2 p-3 transition delay-1 duration-200  ease-in-out rounded-3xl border-red-600 hover:bg-red-600 hover:cursor-pointer hover:opacity-25 hover:-translate-y-1 hover:scale-110'>
          My Linkedin
        </button>
       <button onClick={HandleClick3}  className='w-10 hidden sm:inline  sm:w-full border-2 p-3 transition delay-1 duration-200  ease-in-out rounded-3xl border-red-600 hover:bg-red-600 hover:cursor-pointer hover:opacity-25 hover:-translate-y-1 hover:scale-110'>
          My Instagram
        </button>
        <button onClick={HandleClick4}  className='w-10 hidden sm:inline sm:w-full  border-2 p-3 transition delay-1 duration-200  ease-in-out rounded-3xl border-red-600 hover:bg-red-600 hover:cursor-pointer hover:opacity-25 hover:-translate-y-1 hover:scale-110'>
          My Github
        </button>
        <button onClick={HandleClick5}  className='w-10 hidden sm:inline  sm:w-full border-2 p-3 transition delay-1 duration-200  ease-in-out rounded-3xl border-red-600 hover:bg-red-600 hover:cursor-pointer hover:opacity-25 hover:-translate-y-1 hover:scale-110'>
          My Email
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2 ml-5 mt-0 sm:hidden  ">
        <img onClick={HandleClick1} src="/assets/cv.png" alt="CV" className="size-6 active:border-b-2 border-amber-50 ..." />
        <img onClick={HandleClick2} src="/assets/linkedin.png" alt="LINKEDIN" className="size-6 active:border-b-2 border-amber-50 ..." />
        <img onClick={HandleClick3} src="/assets/instagram.png" alt="INSTAGRAM" className="size-6 active:border-b-2 border-amber-50 ..." />
        <img onClick={HandleClick4} src="/assets/github.png" alt="GITHUB" className="size-6 active:border-b-2 border-amber-50 ..." />
        <img onClick={HandleClick5} src="/assets/gmail.png" alt="EMAIL" className="size-6 active:border-b-2 border-amber-50 ..." />

      </div>
    </>
  )
}

export default Home
