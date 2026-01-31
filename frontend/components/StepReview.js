export default function StepReview({ formData }) {
    const { eventDetails, hireType, requirementDetails } = formData;

    const Section = ({ title, data }) => (
        <div className="mb-6 last:mb-0">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {Object.entries(data).map(([key, value]) => {
                    if (!value) return null;
                    return (
                        <div key={key} className="flex flex-col">
                            <span className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="font-medium text-gray-800">{value}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Review & Submit</h2>
            <p className="text-gray-500 mb-6">Double check your requirement details.</p>

            <div className="bg-white border border-gray-100 rounded-xl p-1">
                <Section title="Event Details" data={eventDetails} />

                <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Hire Category</h3>
                    <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-3 rounded-lg font-medium capitalize inline-block">
                        {hireType}
                    </div>
                </div>

                <Section title="Specific Requirements" data={requirementDetails} />
            </div>
        </div>
    );
}
