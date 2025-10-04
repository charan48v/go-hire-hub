import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/common/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

const JobsList = () => {
  const [searchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(searchParams.get("keyword") || "");
  const [searchLocation, setSearchLocation] = useState(searchParams.get("location") || "");
  const [showFilters, setShowFilters] = useState(false);

  const mockJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $180k",
      type: "Full-time",
      description: "We're looking for an experienced frontend developer to join our growing team.",
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$130k - $170k",
      type: "Full-time",
      description: "Lead product strategy and execution for our flagship products.",
    },
    {
      id: "3",
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      salary: "$90k - $130k",
      type: "Contract",
      description: "Create beautiful, intuitive user experiences for our clients.",
    },
    {
      id: "4",
      title: "Backend Engineer",
      company: "CloudScale",
      location: "Austin, TX",
      salary: "$110k - $160k",
      type: "Full-time",
      description: "Build scalable backend systems and APIs for our SaaS platform.",
    },
    {
      id: "5",
      title: "Data Scientist",
      company: "AI Innovations",
      location: "Seattle, WA",
      salary: "$140k - $190k",
      type: "Full-time",
      description: "Apply machine learning to solve complex business problems.",
    },
    {
      id: "6",
      title: "DevOps Engineer",
      company: "Infrastructure Co",
      location: "Boston, MA",
      salary: "$115k - $165k",
      type: "Part-time",
      description: "Maintain and improve our cloud infrastructure and deployment pipelines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="bg-card rounded-xl shadow-card p-4 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 px-3 border rounded-lg">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 px-3 border rounded-lg">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button size="lg">Search</Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="w-64 space-y-6">
              <div className="bg-card rounded-xl shadow-card p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Job Type</h3>
                  <div className="space-y-3">
                    {["Full-time", "Part-time", "Contract", "Freelance"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Salary Range</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50k</SelectItem>
                      <SelectItem value="50-100">$50k - $100k</SelectItem>
                      <SelectItem value="100-150">$100k - $150k</SelectItem>
                      <SelectItem value="150+">$150k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </aside>
          )}

          {/* Job Listings */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{mockJobs.length}</span> jobs
              </p>
              <Select defaultValue="recent">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {mockJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">1</Button>
              <Button>2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobsList;
