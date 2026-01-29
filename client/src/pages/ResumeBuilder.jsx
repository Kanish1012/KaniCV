import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import { ArrowLeftIcon } from "lucide-react";

const ResumeBuilder = () => {
    const { resumeId } = useParams();
    const [resumeData, setResumeData] = React.useState({
        _id: "",
        title: "",
        personal_info: {},
        professional_summary: "",
        experiece: [],
        education: [],
        project: [],
        skills: [],
        template: "classic",
        accent_color: "#3B82F6",
        public: false,
    });

    const loadExistingResume = async () => {
        const resume = dummyResumeData.find(
            (resume) => resume._id === resumeId,
        );
        if (resume) {
            setResumeData(resume);
            document.title = resume.title;
        }
    };

    useEffect(() => {
        loadExistingResume();
    }, []);

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <Link
                    to="/app"
                    className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
                >
                    <ArrowLeftIcon className="size-4" />
                    Back to Dashboard
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-8">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left Panel - Form */}
                    <div></div>

                    {/* Right Panel - Preview */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;
