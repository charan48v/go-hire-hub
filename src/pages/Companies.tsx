import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Users } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      id: "1",
      name: "TechCorp Inc.",
      industry: "Technology",
      location: "San Francisco, CA",
      employees: "500-1000",
      openPositions: 12,
      description: "Leading technology company specializing in innovative software solutions.",
    },
    {
      id: "2",
      name: "Innovation Labs",
      industry: "Research & Development",
      location: "New York, NY",
      employees: "200-500",
      openPositions: 8,
      description: "Pioneering research and development in AI and machine learning.",
    },
    {
      id: "3",
      name: "Design Studio",
      industry: "Creative Services",
      location: "Remote",
      employees: "50-100",
      openPositions: 5,
      description: "Award-winning design studio creating beautiful digital experiences.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Companies</h1>
          <p className="text-muted-foreground">Discover great companies and their open positions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-card-hover transition-all">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {company.name}
                    </CardTitle>
                    <CardDescription>{company.industry}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{company.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{company.employees} employees</span>
                  </div>
                </div>
                <Button className="w-full">
                  View {company.openPositions} Open Positions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Companies;
