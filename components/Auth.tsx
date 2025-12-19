import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowLeft, ArrowRight, Smartphone, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

interface AuthProps {
  onBack: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col">
      {/* Background Elements similar to Hero */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none animate-drift"></div>
      <div className="absolute bottom-[0%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none animate-drift-slow"></div>
      
      {/* Back Button */}
      <div className="p-6 md:p-12 relative z-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors uppercase text-xs font-bold tracking-widest group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Silence
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 my-8">
        <Reveal width="100%">
          <div className="max-w-md w-full mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-emerald-900/5 border border-slate-100 relative overflow-hidden">
             {/* Subtle top accent */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>

            <div className="flex justify-center mb-10">
              <Logo height={40} />
            </div>
            
            <div className="flex mb-8 border-b border-slate-100">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${isLogin ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Login
                {isLogin && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"></span>}
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${!isLogin ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Register
                {!isLogin && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"></span>}
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm placeholder:text-slate-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Smartphone size={10} /> Phone
                      </label>
                      <input 
                        type="tel" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm placeholder:text-slate-300"
                        placeholder="+91..."
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <MessageCircle size={10} /> WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm placeholder:text-slate-300"
                        placeholder="+91..."
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm placeholder:text-slate-300"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  {isLogin && (
                    <a href="#" className="text-[10px] text-emerald-600 hover:text-emerald-500 font-medium">Forgot?</a>
                  )}
                </div>
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all text-sm placeholder:text-slate-300"
                  placeholder="••••••••"
                />
              </div>

              <button className="w-full bg-slate-900 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all duration-300 flex items-center justify-center gap-2 group mt-6 shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 hover:scale-[1.02] active:scale-[0.98]">
                {isLogin ? 'Enter Space' : 'Apply for Seat'}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Social Login Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest">Or</span>
                <div className="flex-grow border-t border-slate-100"></div>
              </div>

              {/* Google Button */}
              <button className="w-full bg-white border border-slate-200 text-slate-600 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-3 group">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Continue with Google</span>
              </button>
            </form>

            <p className="mt-8 text-center text-xs text-slate-400">
              {isLogin ? "Don't have a seat yet? " : "Already have a seat? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors">
                {isLogin ? "Apply now" : "Login"}
              </button>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};