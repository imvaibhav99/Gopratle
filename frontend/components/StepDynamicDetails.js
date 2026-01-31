export default function StepDynamicDetails({ formData, updateFormData }) {
    const hireType = formData.hireType;

    const handleChange = (e) => {
        updateFormData('requirementDetails', { ...formData.requirementDetails, [e.target.name]: e.target.value });
    };

    const renderFields = () => {
        switch (hireType) {
            case 'planner':
                return (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Planning Type</label>
                            <select name="planningType" onChange={handleChange} value={formData.requirementDetails.planningType || ''} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none">
                                <option value="">Select...</option>
                                <option value="Full Service">Full Service</option>
                                <option value="Partial">Partial / Coordination</option>
                                <option value="Consultation">Consultation Only</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Experience Level</label>
                            <select name="experienceLevel" onChange={handleChange} value={formData.requirementDetails.experienceLevel || ''} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none">
                                <option value="">Select...</option>
                                <option value="Junior">Junior (1-2 yrs)</option>
                                <option value="Mid">Mid-Level (3-5 yrs)</option>
                                <option value="Senior">Senior (5+ yrs)</option>
                            </select>
                        </div>
                    </>
                );
            case 'performer':
                return (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Performer Type</label>
                            <select name="performerType" onChange={handleChange} value={formData.requirementDetails.performerType || ''} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none">
                                <option value="">Select...</option>
                                <option value="Singer">Singer</option>
                                <option value="DJ">DJ</option>
                                <option value="Dancer">Dancer</option>
                                <option value="Band">Band</option>
                                <option value="Magician">Magician</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Duration (Hours)</label>
                            <input type="number" name="durationHours" placeholder="e.g. 4" onChange={handleChange} value={formData.requirementDetails.durationHours || ''} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none" />
                        </div>
                    </>
                );
            case 'crew':
                return (
                    <>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Crew Type</label>
                            <select name="crewType" onChange={handleChange} value={formData.requirementDetails.crewType || ''} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none">
                                <option value="">Select...</option>
                                <option value="Sound">Sound Engineer</option>
                                <option value="Light">Lighting Technician</option>
                                <option value="Camera">Videographer/Photographer</option>
                                <option value="Stage">Stage Manager</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Number of People</label>
                            <input type="number" name="numberOfPeople" placeholder="e.g. 2" onChange={handleChange} value={formData.requirementDetails.numberOfPeople || ''} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none" />
                        </div>
                    </>
                );
            default:
                return <p className="text-red-500">Please go back and select a hire type.</p>;
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Specific Requirements</h2>
            <p className="text-gray-500 mb-6">Details for <span className="font-semibold text-indigo-600 capitalize">{hireType}</span></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderFields()}
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Budget ($)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                            type="number"
                            name="budget"
                            placeholder="5000"
                            onChange={handleChange}
                            value={formData.requirementDetails.budget || ''}
                            className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
