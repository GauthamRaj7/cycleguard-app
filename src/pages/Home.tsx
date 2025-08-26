import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MapPin, 
  Lock, 
  Unlock, 
  Battery, 
  Shield, 
  AlertTriangle,
  Navigation,
  Activity,
  Settings,
  BarChart3,
  Route,
  Car,
  Pause
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(78);
  const [currentStatus, setCurrentStatus] = useState<"locked" | "unlocked" | "travelling">("locked");
  const navigate = useNavigate();

  const toggleLock = () => {
    const newLockedState = !isLocked;
    setIsLocked(newLockedState);
    setCurrentStatus(newLockedState ? "locked" : "unlocked");
  };

  const cycleStatus = {
    location: "Academic Block A, IIT Guwahati",
    coordinates: "26.1934° N, 91.6978° E",
    distance: "0 m away",
    lastSeen: "2 minutes ago",
    isMoving: false,
    speed: 0
  };

  const recentActivity = [
    {
      id: 1,
      action: "Auto-locked",
      description: "Academic Block A",
      time: "2 minutes ago",
      icon: Lock,
      type: "success"
    },
    {
      id: 2,
      action: "Trip completed",
      description: "5.2 km journey",
      time: "45 minutes ago",
      icon: Route,
      type: "primary"
    },
    {
      id: 3,
      action: "Low battery warning",
      description: "Charge recommended",
      time: "3 hours ago",
      icon: AlertTriangle,
      type: "warning"
    },
    {
      id: 4,
      action: "Speed alert",
      description: "Exceeded 25 km/h",
      time: "1 day ago",
      icon: Activity,
      type: "primary"
    },
    {
      id: 5,
      action: "Unlocked manually",
      description: "Library parking",
      time: "1 day ago",
      icon: Unlock,
      type: "success"
    },
    {
      id: 6,
      action: "Motion detected",
      description: "Possible theft attempt",
      time: "2 days ago",
      icon: AlertTriangle,
      type: "warning"
    },
    {
      id: 7,
      action: "Battery charged",
      description: "100% battery level",
      time: "3 days ago",
      icon: Battery,
      type: "success"
    }
  ];

  const getStatusDisplay = () => {
    switch (currentStatus) {
      case "locked":
        return { label: "Locked", color: "bg-success", icon: Lock };
      case "unlocked":
        return { label: "Unlocked", color: "bg-warning", icon: Unlock };
      case "travelling":
        return { label: "Travelling", color: "bg-primary", icon: Car };
      default:
        return { label: "Unknown", color: "bg-muted", icon: Pause };
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className="min-h-screen bg-background-secondary overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CycleGuard</h1>
              <p className="text-primary-foreground/80 text-sm">Smart Cycle Manager</p>
            </div>
          </div>
          <Avatar 
            className="cursor-pointer ring-2 ring-primary-foreground/20 w-12 h-12 touch-feedback" 
            onClick={() => navigate("/profile")}
          >
            <AvatarFallback className="bg-primary-foreground text-primary font-bold text-lg">
              JD
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Status Card */}
        <Card className="mobile-card bg-card/95 backdrop-blur-sm shadow-xl mx-1">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full ${statusDisplay.color} flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">Your Cycle</h3>
                  <p className="text-sm text-muted-foreground">{cycleStatus.location}</p>
                </div>
              </div>
              <Badge variant={currentStatus === "locked" ? "default" : currentStatus === "travelling" ? "default" : "secondary"} className="shadow-md text-sm px-3 py-1">
                <statusDisplay.icon className="w-4 h-4 mr-2" />
                {statusDisplay.label}
              </Badge>
            </div>

            {/* Live Status Display */}
            <div className="bg-muted rounded-2xl p-6 mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-16 h-16 ${statusDisplay.color} rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                  <statusDisplay.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl font-bold text-foreground">{statusDisplay.label}</p>
                <p className="text-sm text-muted-foreground">{cycleStatus.distance}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4">
              <Button 
                onClick={toggleLock}
                variant={currentStatus === "locked" ? "outline" : "success"}
                size="lg"
                className="flex-1 touch-target"
              >
                {currentStatus === "locked" ? (
                  <>
                    <Unlock className="w-5 h-5 mr-2" />
                    Unlock
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Lock
                  </>
                )}
              </Button>
              <Button variant="outline" size="icon-lg" className="touch-target">
                <Navigation className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="px-4 -mt-4">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="mobile-card p-5 touch-feedback">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Route className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-card-foreground">12.5 km</p>
                <p className="text-sm text-muted-foreground">Today's Distance</p>
              </div>
            </div>
          </Card>
          <Card className="mobile-card p-5 touch-feedback">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-card-foreground">18 km/h</p>
                <p className="text-sm text-muted-foreground">Average Speed</p>
              </div>
            </div>
          </Card>
          <Card className="mobile-card p-5 touch-feedback">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-card-foreground">42 min</p>
                <p className="text-sm text-muted-foreground">Trip Duration</p>
              </div>
            </div>
          </Card>
          <Card className="mobile-card p-5 touch-feedback">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Battery className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-card-foreground">{batteryLevel}%</p>
                <p className="text-sm text-muted-foreground">Battery Level</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mobile-card mb-24">
          <div className="p-6">
            <h3 className="text-xl font-bold text-card-foreground mb-5">Recent Activity</h3>
            <ScrollArea className="h-72 pr-4">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-accent/50 transition-smooth touch-feedback">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      activity.type === 'success' ? 'bg-success/10' :
                      activity.type === 'warning' ? 'bg-warning/10' : 'bg-primary/10'
                    }`}>
                      <activity.icon className={`w-6 h-6 ${
                        activity.type === 'success' ? 'text-success' :
                        activity.type === 'warning' ? 'text-warning' : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-card-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time} • {activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl safe-bottom">
        <div className="flex safe-bottom">
          <button 
            className="flex-1 py-4 px-2 flex flex-col items-center gap-2 text-primary touch-feedback"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button 
            onClick={() => navigate("/trips")}
            className="flex-1 py-4 px-2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth touch-feedback"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Route className="w-6 h-6" />
            </div>
            <span className="text-xs">Trips</span>
          </button>
          <button 
            onClick={() => navigate("/statistics")}
            className="flex-1 py-4 px-2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth touch-feedback"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <span className="text-xs">Stats</span>
          </button>
          <button 
            onClick={() => navigate("/settings")}
            className="flex-1 py-4 px-2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth touch-feedback"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;