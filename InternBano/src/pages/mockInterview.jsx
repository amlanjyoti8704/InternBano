import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

function MockInterview() {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col justify-between">
            <div>
                <Navbar />
                
                <div className="container px-4 2xl:px-20 mx-auto my-12">
                    {/* Hero Showcase Section */}
                    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-8 md:p-16 shadow-2xl">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none"></div>
                        
                        <div className="relative z-10 max-w-3xl flex flex-col items-start">
                            <span className="bg-white/20 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                                Powered by Gemini API
                            </span>
                            
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                                Master Your Next Interview with AI Mock Practice
                            </h1>
                            
                            <p className="text-lg md:text-xl text-blue-100 font-medium mb-8 max-w-2xl leading-relaxed">
                                Get real-time interview practice tailored to your dream job. Practice role-specific questions, receive instant feedback, and refine your skills before the real call.
                            </p>
                            
                            <a 
                                href="https://mockly-gamma.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-2xl shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-3 text-lg group"
                            >
                                Launch Mock AI Interview
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Features/Vision Grid */}
                    <div className="my-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
                            How AI Mock Interview Works
                        </h2>
                        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto mb-12">
                            Our advanced AI companion replicates actual interview settings to help you land your job with high confidence.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Role-Specific Questions</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Generate questions targeted directly at your target job roles, matching real technical, behavioral, and domain questions.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Immersive Practice</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Speak or type your responses. Experience realistic timers and follow-ups simulating professional technical panel questions.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant AI Feedback</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Leverage Gemini API to evaluate answer content, receive detailed corrections, score tracking, and constructive feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default MockInterview
