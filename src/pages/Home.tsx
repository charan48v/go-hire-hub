import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/common/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?keyword=${searchKeyword}&location=${searchLocation}`);
  };

  const featuredJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $180k",
      type: "Full-time",
      description: "We're looking for an experienced frontend developer to join our growing team. You'll work on cutting-edge technologies and help shape our product's future.",
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$130k - $170k",
      type: "Full-time",
      description: "Lead product strategy and execution for our flagship products. Work with cross-functional teams to deliver exceptional user experiences.",
    },
    {
      id: "3",
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      salary: "$90k - $130k",
      type: "Contract",
      description: "Create beautiful, intuitive user experiences. Collaborate with product and engineering teams to bring designs to life.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI-Powered Job Matching
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The AI-Powered Way to Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Next Career
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover opportunities that match your skills and aspirations. Let AI help you find your dream job.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="bg-card rounded-xl shadow-card-hover p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Job title or keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex-1 flex items-center gap-2 px-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button type="submit" size="lg" variant="hero" className="md:w-auto">
                  Search Jobs
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Opportunities</h2>
          <p className="text-lg text-muted-foreground">Hand-picked jobs from top companies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={() => navigate("/jobs")}>
            View All Jobs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
