export default function Stepper({ currentStep }) {
    const steps = [
        { number: 1, label: "Event Details" },
        { number: 2, label: "Hire Type" },
        { number: 3, label: "Requirements" },
        { number: 4, label: "Review" }
    ];

    return (
        <div className="w-full py-6 mb-8">
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 -z-10 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>

                {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center bg-gray-50 px-2">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300
                ${currentStep >= step.number
                                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg scale-110"
                                    : "bg-white border-gray-300 text-gray-400 group-hover:border-gray-400"
                                }`}
                        >
                            {currentStep > step.number ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : step.number}
                        </div>
                        <span className={`mt-2 text-xs font-semibold uppercase tracking-wider ${currentStep >= step.number ? "text-indigo-600" : "text-gray-400"}`}>
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
