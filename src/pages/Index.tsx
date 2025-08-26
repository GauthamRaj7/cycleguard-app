import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to onboarding for first-time users
    // In a real app, you'd check if user is authenticated
    navigate("/onboarding");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-secondary">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 animate-pulse" />
        <h1 className="text-2xl font-bold text-foreground">Loading CycleGuard...</h1>
      </div>
    </div>
  );
};

export default Index;
