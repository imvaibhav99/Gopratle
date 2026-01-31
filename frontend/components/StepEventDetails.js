export default function StepEventDetails({ formData, updateFormData }) {
    const handleChange = (e) => {
        updateFormData('eventDetails', { ...formData.eventDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your event</h2>
            <p className="text-gray-500 mb-6">Start with the basic details of your upcoming event.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium text-gray-700">Event Name</label>
                    <input
                        type="text"
                        name="eventName"
                        value={formData.eventDetails.eventName || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                        placeholder="e.g. Annual Tech Conference 2024"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Event Type</label>
                    <select
                        name="eventType"
                        value={formData.eventDetails.eventType || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-white"
                    >
                        <option value="">Select Type</option>
                        <option value="corporate">Corporate</option>
                        <option value="wedding">Wedding</option>
                        <option value="concert">Concert</option>
                        <option value="party">Private Party</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Venue (Optional)</label>
                    <input
                        type="text"
                        name="venue"
                        value={formData.eventDetails.venue || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                        placeholder="e.g. Grand Hall"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.eventDetails.startDate || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.eventDetails.endDate || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    />
                </div>

                <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.eventDetails.location || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                        placeholder="City, State or Full Address"
                    />
                </div>
            </div>
        </div>
    );
}
