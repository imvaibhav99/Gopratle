import { useRef } from 'react';

export default function StepHireType({ formData, updateFormData }) {
    const options = [
        { id: 'planner', title: 'Event Planner', icon: '📅', desc: 'Organize entire event' },
        { id: 'performer', title: 'Performer', icon: '🎤', desc: 'Singers, Bands, DJs' },
        { id: 'crew', title: 'Crew', icon: '🎥', desc: 'Tech, Sound, Lighting' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Who are you looking to hire?</h2>
            <p className="text-gray-500 mb-6">Select the category of professional you need.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {options.map((opt) => (
                    <div
                        key={opt.id}
                        onClick={() => updateFormData('hireType', opt.id)}
                        className={`
              relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group
              ${formData.hireType === opt.id
                                ? 'border-indigo-600 bg-indigo-50 shadow-md transform scale-105'
                                : 'border-gray-100 bg-white hover:border-indigo-200 hover:shadow-lg'}
            `}
                    >
                        <div className="text-4xl mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                            {opt.icon}
                        </div>
                        <h3 className={`text-lg font-bold mb-1 ${formData.hireType === opt.id ? 'text-indigo-900' : 'text-gray-800'}`}>
                            {opt.title}
                        </h3>
                        <p className="text-sm text-gray-500">{opt.desc}</p>

                        {formData.hireType === opt.id && (
                            <div className="absolute top-4 right-4 text-indigo-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
