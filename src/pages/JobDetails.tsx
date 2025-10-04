import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, DollarSign, Briefcase, Calendar, Users, BookmarkPlus } from "lucide-react";
import ApplicationModal from "@/components/modals/ApplicationModal";

const JobDetails = () => {
  const { jobId } = useParams();
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Mock job data
  const job = {
    id: jobId,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $180,000",
    type: "Full-time",
    postedDate: "2 days ago",
    applicants: 47,
    description: `We're looking for an experienced Frontend Developer to join our growing engineering team. You'll be responsible for building and maintaining high-quality web applications using modern technologies.`,
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance",
      "Collaborate with back-end developers and designers",
    ],
    qualifications: [
      "5+ years of experience with React.js and its core principles",
      "Strong proficiency in JavaScript, including ES6+",
      "Experience with popular React.js workflows (Redux, Context API)",
      "Familiarity with RESTful APIs and modern authorization mechanisms",
      "Experience with modern front-end build pipelines and tools",
      "Strong understanding of web markup, including HTML5 and CSS3",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work from home policy",
      "Professional development budget",
      "Unlimited PTO",
    ],
    about: `TechCorp Inc. is a leading technology company specializing in innovative software solutions. We're passionate about creating products that make a difference in people's lives. Our team is collaborative, ambitious, and committed to excellence.`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Job Header */}
          <Card className="shadow-card-hover mb-6">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold">{job.title}</h1>
                  <p className="text-xl text-muted-foreground font-medium">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {job.type}
                </Badge>
              </div>

              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  variant="hero" 
                  className="flex-1 md:flex-none"
                  onClick={() => setShowApplicationModal(true)}
                >
                  Apply Now
                </Button>
                <Button size="lg" variant="outline">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save Job
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
                  <ul className="space-y-2">
                    {job.qualifications.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">About the Company</h2>
                  <p className="text-muted-foreground leading-relaxed">{job.about}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <ApplicationModal 
        isOpen={showApplicationModal} 
        onClose={() => setShowApplicationModal(false)}
        jobTitle={job.title}
        company={job.company}
      />
    </div>
  );
};

export default JobDetails;
