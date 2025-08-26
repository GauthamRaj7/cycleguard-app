import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Shield, MapPin, Activity, Battery } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroCycle from "@/assets/hero-cycle.jpg";

const onboardingSteps = [
  {
    title: "Smart Auto-Lock",
    description: "Your cycle automatically locks when you're 10 meters away for 10 seconds. Never worry about forgetting to secure your bike again.",
    icon: Shield,
    feature: "Automatic Security"
  },
  {
    title: "GPS Tracking",
    description: "Track your cycle's location in real-time. Get instant alerts if someone moves your bike without permission.",
    icon: MapPin,
    feature: "Real-time Location"
  },
  {
    title: "Smart Analytics",
    description: "Monitor tire pressure, track your trips, measure distances, and get insights about your cycling habits.",
    icon: Activity,
    feature: "Performance Insights"
  },
  {
    title: "Long Battery Life",
    description: "Our device lasts weeks on a single charge. Get notifications when it's time to recharge your CycleGuard.",
    icon: Battery,
    feature: "Extended Battery"
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/auth");
    }
  };

  const skipToAuth = () => {
    navigate("/auth");
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-secondary flex flex-col">
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">CycleGuard</span>
        </div>
        <Button variant="ghost" onClick={skipToAuth} className="text-muted-foreground">
          Skip
        </Button>
      </div>

      {/* Hero Image */}
      <div className="px-6 mb-8">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-elegant">
          <img 
            src={heroCycle} 
            alt="Smart cycle with GPS tracking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute bottom-4 left-4">
            <div className="text-white font-semibold text-lg">IIT Guwahati</div>
            <div className="text-white/80 text-sm">Smart Cycle Management</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6">
        <Card className="p-8 shadow-elegant border-0 bg-card">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <currentStepData.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-sm text-primary font-medium mb-2">
              {currentStepData.feature}
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {currentStepData.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {currentStepData.description}
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-smooth ${
                  index === currentStep 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Action Button */}
          <Button 
            onClick={nextStep}
            variant="hero"
            size="xl"
            className="w-full"
          >
            {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Continue"}
            <ChevronRight className="w-5 h-5" />
          </Button>
        </Card>
      </div>

      {/* Footer */}
      <div className="p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Securing cycles across IIT Guwahati campus
        </p>
      </div>
    </div>
  );
};

export default Onboarding;