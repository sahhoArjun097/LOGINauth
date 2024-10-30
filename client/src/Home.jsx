import React, { useContext } from 'react';
import { UserContext } from './context/contextapi'

function Home() {
  const { user } = useContext(UserContext); // Access the user data
console.log(user)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, {user?.name || 'Guest'}!</h1>
        <p className="text-lg text-gray-600">Email: {user?.email || 'Not available'}</p>
        <p className="text-lg text-gray-600">Role: {user?.role || 'Not available'}</p>
      </div> */}
      <div className='w-[100vw] h-[90vh] flex justify-center items-center bg-slate-600 '>
            <div className='w-[90%] h-[90%] bg-slate-100 rounded-xl flex justify-between'>
                
                <div className='w-[100%] h-[full] rounded-r-xl p-9'>
                    <div className='w-full h-full rounded-xl p-5'>
                        {/* img */}

                        <div className="flex justify-center items-center mb-5">
                            <div className="w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center overflow-hidden">
                                
                                <img src="/image.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                      
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-semibold">Welcome, {user?.name || 'Guest'}!</h2>
                            <span className="text-red-500">(ST0065)</span>
                        </div>

                        <div className="flex justify-around mb-6">

                            <div className="flex flex-col items-center w-32 bg-green-400 text-white rounded-lg p-4">
                                <span className="text-xl">Roll NO.</span>
                                <div className="text-3xl mb-2">1</div>
                            </div>

                            
                            <div className="flex flex-col items-center w-32 bg-teal-400 text-white rounded-lg p-4">
                                <div className="text-xl mb-2">D.O.B</div>
                                <span className="text-sm">2-4-2004</span>
                            </div>

                            {/* Exams */}
                            <div className="flex flex-col items-center w-32 bg-orange-400 text-white rounded-lg p-4">
                                <span className="text-xl">Exams</span>
                                <div className="text-3xl mb-2">28</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md">
                                Buy New Packages
                            </button>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </div>
    
    
  );
}

export default Home;
