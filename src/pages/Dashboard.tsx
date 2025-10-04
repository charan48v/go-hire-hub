import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Bookmark, Clock, CheckCircle2, XCircle, Calendar } from "lucide-react";

const Dashboard = () => {
  const savedJobs = [
    { id: "1", title: "Senior Frontend Developer", company: "TechCorp Inc.", savedDate: "2 days ago" },
    { id: "2", title: "UX Designer", company: "Design Studio", savedDate: "1 week ago" },
  ];

  const appliedJobs = [
    { id: "3", title: "Product Manager", company: "Innovation Labs", appliedDate: "3 days ago", status: "applied" },
    { id: "4", title: "Backend Engineer", company: "CloudScale", appliedDate: "1 week ago", status: "applied" },
  ];

  const inReviewJobs = [
    { id: "5", title: "Data Scientist", company: "AI Innovations", appliedDate: "2 weeks ago", status: "review" },
  ];

  const interviewingJobs = [
    { id: "6", title: "DevOps Engineer", company: "Infrastructure Co", appliedDate: "3 weeks ago", status: "interview", interviewDate: "Next Monday" },
  ];

  const finalizedJobs = [
    { id: "7", title: "Full Stack Developer", company: "StartupXYZ", appliedDate: "1 month ago", status: "offer" },
    { id: "8", title: "Mobile Developer", company: "AppWorks", appliedDate: "1 month ago", status: "rejected" },
  ];

  const JobStatusCard = ({ job, status }: any) => {
    const statusConfig: any = {
      saved: { icon: Bookmark, color: "text-blue-500", bg: "bg-blue-50" },
      applied: { icon: Clock, color: "text-yellow-500", bg: "bg-yellow-50" },
      review: { icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50" },
      interview: { icon: Calendar, color: "text-orange-500", bg: "bg-orange-50" },
      offer: { icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50" },
      rejected: { icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <Card className="hover:shadow-card-hover transition-all">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Link to={`/jobs/${job.id}`} className="font-medium hover:text-primary transition-colors">
                {job.title}
              </Link>
              <p className="text-sm text-muted-foreground mt-1">{job.company}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {job.appliedDate || job.savedDate}
              </p>
              {job.interviewDate && (
                <p className="text-xs text-orange-600 font-medium mt-1">
                  Interview: {job.interviewDate}
                </p>
              )}
            </div>
            <div className={`p-2 rounded-lg ${config.bg}`}>
              <Icon className={`h-5 w-5 ${config.color}`} />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Track your job applications and saved positions</p>
        </div>

        <Tabs defaultValue="tracker" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="tracker">Application Tracker</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="tracker" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Saved Jobs Column */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    Saved
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{savedJobs.length}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {savedJobs.map((job) => (
                    <JobStatusCard key={job.id} job={job} status="saved" />
                  ))}
                </CardContent>
              </Card>

              {/* Applied Column */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Applied
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{appliedJobs.length}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {appliedJobs.map((job) => (
                    <JobStatusCard key={job.id} job={job} status="applied" />
                  ))}
                </CardContent>
              </Card>

              {/* In Review Column */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    In Review
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{inReviewJobs.length}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {inReviewJobs.map((job) => (
                    <JobStatusCard key={job.id} job={job} status="review" />
                  ))}
                </CardContent>
              </Card>

              {/* Interviewing Column */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Interviewing
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{interviewingJobs.length}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {interviewingJobs.map((job) => (
                    <JobStatusCard key={job.id} job={job} status="interview" />
                  ))}
                </CardContent>
              </Card>

              {/* Finalized Column */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Finalized
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{finalizedJobs.length}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {finalizedJobs.map((job) => (
                    <JobStatusCard key={job.id} job={job} status={job.status} />
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Profile management coming soon!</p>
                  <Button asChild>
                    <Link to="/dashboard/profile">Go to Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
