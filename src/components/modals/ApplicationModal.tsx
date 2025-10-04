import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
}

const ApplicationModal = ({ isOpen, onClose, jobTitle, company }: ApplicationModalProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
    acceptTerms: false,
  });

  const handleSubmit = () => {
    if (!formData.acceptTerms) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to submit your application.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: `Your application for ${jobTitle} at ${company} has been submitted successfully.`,
    });
    onClose();
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
      acceptTerms: false,
    });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.resume)) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const generateCoverLetter = () => {
    const aiGeneratedLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at ${company}. With my extensive experience and passion for excellence, I am confident in my ability to contribute to your team's success.

Throughout my career, I have developed a strong foundation in the required skills and have consistently delivered high-quality results. I am particularly drawn to this opportunity because of ${company}'s reputation for innovation and commitment to excellence.

I would welcome the opportunity to discuss how my skills and experience align with your team's needs. Thank you for considering my application.

Best regards,
${formData.name}`;

    setFormData({ ...formData, coverLetter: aiGeneratedLetter });
    toast({
      title: "Cover letter generated!",
      description: "AI has generated a cover letter for you. Feel free to edit it.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            {company} • Step {step} of 3
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume *</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">
                  {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                </p>
                <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</p>
                <Input
                  id="resume"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button onClick={onClose} variant="outline">Cancel</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={generateCoverLetter}
                  className="gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  AI Generate
                </Button>
              </div>
              <Textarea
                id="coverLetter"
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Tell us why you're a great fit for this role..."
                className="min-h-[200px]"
              />
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Screening Questions</h4>
              <p className="text-sm text-muted-foreground">
                This employer hasn't added any screening questions for this position.
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <Button onClick={handleBack} variant="outline">Back</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 py-4">
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg">Review Your Application</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                {formData.phone && (
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">Resume</p>
                  <p className="font-medium">{formData.resume?.name}</p>
                </div>
                {formData.coverLetter && (
                  <div>
                    <p className="text-muted-foreground">Cover Letter</p>
                    <p className="font-medium line-clamp-3">{formData.coverLetter}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
              />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                I accept the terms and conditions and allow this information to be shared with the employer
              </Label>
            </div>
            <div className="flex justify-between gap-2">
              <Button onClick={handleBack} variant="outline">Back</Button>
              <Button onClick={handleSubmit} variant="hero">
                Submit Application
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
