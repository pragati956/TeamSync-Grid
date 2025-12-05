import React, { useState } from 'react';
import { Power, LogIn, UserPlus } from 'lucide-react';
import { STAGE_MAP } from '../utils/constants.js';

/**
* The user login/sign up view (Simulated).
*/
export const AuthPage = ({ setView, login }) => {
const [isLogin, setIsLogin] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setError('');
setLoading(true);
setTimeout(() => {
if (email.includes('@') && password.length >= 6) {
// Success: Log in and proceed to ranger selection
login();
setView('ranger_selection');
} else {
setError('Simulated Authentication Failed. Use a valid format to proceed.');
}
setLoading(false);
}, 500);
};

return (
<div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
<div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-
[0_0_50px_rgba(255,0,0,0.5)] border-2 border-red-600 transform transition duration-500
hover:scale-[1.01] hover:shadow-[0_0_70px_rgba(255,255,0,0.7)]">

<h1 className="text-4xl font-extrabold text-red-500 text-center uppercase tracking-
widest flex items-center justify-center">

<Power className="w-8 h-8 mr-2 text-yellow-400 animate-pulse" /> TeamSync Grid
</h1>
<h2 className="text-xl font-semibold text-gray-300 text-center flex items-center
justify-center">

{isLogin
? <><LogIn className="w-5 h-5 mr-2" /> It's Morphin Time! (Sign In)</>
: <><UserPlus className="w-5 h-5 mr-2" /> New Ranger Enrollment (Sign Up)</>}
</h2>
<form onSubmit={handleSubmit} className="space-y-4">
<div>
<input
type="email"
placeholder="Ranger Email (e.g., ranger@zords.com)"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700

text-gray-200 focus:ring-red-500 focus:border-red-500 shadow-inner"

/>
</div>
<div>
<input
type="password"
placeholder="Secret Password (6+ chars)"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700

text-gray-200 focus:ring-red-500 focus:border-red-500 shadow-inner"

/>
</div>

{error && <p className="text-sm text-yellow-400 text-center font-
bold">{error}</p>}

<button
type="submit"
disabled={loading}
className={`w-full py-3 rounded-lg font-bold text-lg uppercase transition
duration-300 transform ${STAGE_MAP.progress.color} ${STAGE_MAP.progress.text}
hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.03] disabled:opacity-50`}

>
{loading ? 'Powering Up...' : (isLogin ? 'Morph In' : 'Join the Zords')}
</button>
</form>
<button
onClick={() => setIsLogin(!isLogin)}
className="w-full text-sm text-gray-400 hover:text-red-500 transition duration-300"
>
{isLogin ? 'Need an account? Enlist now.' : 'Already a Ranger? Log In.'}
</button>
<div className="mt-4 flex justify-center">
<button
onClick={() => setView('home')}
className="text-sm text-gray-500 hover:text-gray-300 transition duration-300

underline"
>
&larr; Back to Command Center
</button>
</div>

</div>
</div>
);
};