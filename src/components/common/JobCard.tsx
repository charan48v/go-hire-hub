import { MapPin, DollarSign, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  description: string;
}

const JobCard = ({ id, title, company, location, salary, type, description }: JobCardProps) => {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1 flex-1">
              <CardTitle className="group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="font-medium text-foreground">
                {company}
              </CardDescription>
            </div>
            <Badge variant="secondary">{type}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              {salary && (
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{salary}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
