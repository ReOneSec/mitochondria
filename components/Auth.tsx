import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowLeft, ArrowRight, Smartphone, MessageCircle, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Reveal } from './Reveal';

interface AuthProps {
  onBack: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col font-sans">
      {/* Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none animate-drift"></div>
      <div className="absolute bottom-[0%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none animate-drift-slow"></div>
      <div className="absolute inset-0 texture-membrane opacity-60 pointer-events-none"></div>
      
      {/* Back Button */}
      <div className="p-6 md:p-12 relative z-20">
        <button 
          onClick={onBack}
          aria-label="Go back to home"
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors uppercase text-xs font-bold tracking-widest group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 hover:border-emerald-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Silence
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 my-8">
        <Reveal width="100%">
          <div className="max-w-md w-full mx-auto bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 border border-white/50 relative overflow-hidden ring-1 ring-slate-100">
             {/* Bio-scanner line effect at top */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-pulse"></div>

            <div className="flex justify-center mb-10 scale-90 md:scale-100 origin-bottom">
              <Logo height={48} />
            </div>
            
            {/* Toggle Switch */}
            <div className="flex mb-10 bg-slate-100/50 p-1.5 rounded-2xl relative" role="tablist">
              {/* Sliding background */}
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm border border-slate-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isLogin ? 'left-1.5' : 'left-[calc(50%+3px)]'}`}></div>
              
              <button 
                onClick={() => setIsLogin(true)}
                role="tab"
                aria-selected={isLogin}
                className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors relative z-10 focus:outline-none ${isLogin ? 'text-emerald-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Resident Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                role="tab"
                aria-selected={!isLogin}
                className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors relative z-10 focus:outline-none ${!isLogin ? 'text-emerald-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                New Applicant
              </button>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <>
                  <div className="space-y-1.5 group">
                    <label htmlFor="fullname" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Full Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                        <User size={16} />
                      </div>
                      <input 
                        id="fullname"
                        type="text" 
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm placeholder:text-slate-300 font-medium"
                        placeholder="IDENTIFICATION"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 group">
                      <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Phone</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                          <Smartphone size={16} />
                        </div>
                        <input 
                          id="phone"
                          type="tel" 
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm placeholder:text-slate-300 font-medium"
                          placeholder="+91"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5 group">
                      <label htmlFor="whatsapp" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">WhatsApp</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                          <MessageCircle size={16} />
                        </div>
                        <input 
                          id="whatsapp"
                          type="tel" 
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm placeholder:text-slate-300 font-medium"
                          placeholder="+91"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              <div className="space-y-1.5 group">
                <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-emerald-600 transition-colors">Email Coordinates</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                    <Mail size={16} />
                  </div>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm placeholder:text-slate-300 font-medium"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5 group">
                <div className="flex justify-between items-center ml-1">
                  <label htmlFor="password" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors">Access Key</label>
                  {isLogin && (
                    <a href="#" className="text-[10px] text-slate-400 hover:text-emerald-600 font-bold transition-colors focus:outline-none focus:text-emerald-600">Forgot?</a>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                    <Lock size={16} />
                  </div>
                  <input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-11 pr-12 py-3.5 text-slate-900 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm placeholder:text-slate-300 font-medium tracking-widest"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-emerald-600 transition-colors focus:outline-none focus:text-emerald-600 p-2 rounded-full hover:bg-slate-100"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-emerald-950 hover:to-slate-900 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 group mt-6 shadow-lg shadow-slate-900/20 hover:shadow-emerald-900/30 border border-slate-800 hover:border-emerald-500/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/20">
                <span>{isLogin ? 'Authenticate' : 'Submit Application'}</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest">Or</span>
                <div className="flex-grow border-t border-slate-100"></div>
              </div>

              <button type="button" className="w-full bg-white border border-slate-200 text-slate-600 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-slate-200">
                <svg className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google logo">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Google Protocol</span>
              </button>
            </form>

            <p className="mt-8 text-center text-xs text-slate-400">
              {isLogin ? "No biometric record? " : "Already authenticated? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors uppercase tracking-wide focus:outline-none focus:underline">
                {isLogin ? "Apply for Admission" : "Access Terminal"}
              </button>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};