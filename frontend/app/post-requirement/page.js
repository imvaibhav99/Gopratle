'use client';

import { useState } from 'react';
import Stepper from '../../components/Stepper';
import StepEventDetails from '../../components/StepEventDetails';
import StepHireType from '../../components/StepHireType';
import StepDynamicDetails from '../../components/StepDynamicDetails';
import StepReview from '../../components/StepReview';
import Button from '../../components/Button';
import api from '../../lib/api';

export default function PostRequirementPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        eventDetails: {},
        hireType: "",
        requirementDetails: {}
    });

    const updateFormData = (section, data) => {
        setFormData(prev => {
            if (section === 'hireType') {
                return { ...prev, hireType: data, requirementDetails: {} }; // Reset details on type change
            }
            return { ...prev, [section]: data };
        });
    };

    const nextStep = () => {
        // Basic validation could go here
        setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const payload = {
                ...formData.eventDetails,
                hireType: formData.hireType,
                plannerDetails: formData.hireType === 'planner' ? formData.requirementDetails : undefined,
                performerDetails: formData.hireType === 'performer' ? formData.requirementDetails : undefined,
                crewDetails: formData.hireType === 'crew' ? formData.requirementDetails : undefined,
            };

            await api.post('/requirements', payload);
            setSubmitted(true);
        } catch (error) {
            console.error("Submission Error", error);
            alert("Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-xl text-center space-y-4 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Success!</h2>
                    <p className="text-gray-500">Your requirement has been posted. Professionals will reach out to you soon.</p>
                    <div className="pt-6">
                        <Button onClick={() => window.location.reload()}>Post Another</Button>
                    </div>
                </div>
            </div>
        )
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1: return <StepEventDetails formData={formData} updateFormData={updateFormData} />;
            case 2: return <StepHireType formData={formData} updateFormData={updateFormData} />;
            case 3: return <StepDynamicDetails formData={formData} updateFormData={updateFormData} />;
            case 4: return <StepReview formData={formData} />;
            default: return null;
        }
    };

    // Validation checks for buttons
    const isStep1Valid = formData.eventDetails.eventName && formData.eventDetails.eventType && formData.eventDetails.startDate; // basic check
    const isStep2Valid = !!formData.hireType;
    const isStep3Valid = Object.keys(formData.requirementDetails).length > 0; // rough check

    const canProceed = () => {
        if (currentStep === 1) return isStep1Valid;
        if (currentStep === 2) return isStep2Valid;
        if (currentStep === 3) return isStep3Valid;
        return true;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-2">
                        GoPratle
                    </h1>
                    <p className="text-lg text-gray-600">Post your event requirements and find the best talent.</p>
                </div>

                <Stepper currentStep={currentStep} />

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12 min-h-[400px]">
                        {renderStep()}
                    </div>

                    <div className="bg-gray-50 px-8 py-5 flex items-center justify-between border-t border-gray-100">
                        <Button
                            variant="secondary"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={currentStep === 1 ? 'invisible' : ''}
                        >
                            Back
                        </Button>

                        {currentStep < 4 ? (
                            <Button onClick={nextStep} disabled={!canProceed()}>
                                Next Step
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} loading={isSubmitting}>
                                Post Requirement
                            </Button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
