import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  Edit3,
  Award,
  Calendar,
  MapPin,
  Route,
  Clock,
  TrendingUp,
  Target,
  Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const userInfo = {
    name: "John Doe",
    email: "john.doe@iitg.ac.in",
    rollNumber: "200101042",
    hostel: "Hostel Block K",
    joinDate: "September 2024",
    cycleModel: "Hero Ranger DTB 26T"
  };

  const achievements = [
    {
      title: "Early Adopter",
      description: "Among first 100 users",
      icon: Award,
      earned: true
    },
    {
      title: "Distance Master",
      description: "Covered 500+ km",
      icon: Route,
      earned: false
    },
    {
      title: "Security Champion", 
      description: "No theft incidents",
      icon: Shield,
      earned: true
    },
    {
      title: "Speed Demon",
      description: "Reached 30+ km/h",
      icon: TrendingUp,
      earned: false
    }
  ];

  const monthlyStats = {
    totalDistance: "67.3 km",
    totalTrips: 24,
    avgSpeed: "12.1 km/h",
    totalTime: "5h 32m",
    co2Saved: "18.5 kg"
  };

  const goalProgress = {
    monthly: {
      target: 100,
      current: 67.3,
      unit: "km"
    },
    weekly: {
      target: 25,
      current: 18.7,
      unit: "km"
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/home")}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Profile</h1>
            <p className="text-primary-foreground/80 text-sm">Your cycling journey</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Edit3 className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-elegant">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-16 h-16 ring-2 ring-primary/20">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                  {userInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-card-foreground">{userInfo.name}</h2>
                <p className="text-muted-foreground">{userInfo.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {userInfo.rollNumber}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {userInfo.hostel}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">Joined</p>
                  <p className="text-xs text-muted-foreground">{userInfo.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">Cycle</p>
                  <p className="text-xs text-muted-foreground">{userInfo.cycleModel}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="p-6 -mt-4 space-y-6">
        {/* Monthly Stats */}
        <Card className="shadow-subtle">
          <div className="p-6">
            <h3 className="font-semibold text-card-foreground mb-4">This Month</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{monthlyStats.totalDistance}</p>
                <p className="text-sm text-muted-foreground">Total Distance</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-card-foreground">{monthlyStats.totalTrips}</p>
                <p className="text-sm text-muted-foreground">Total Trips</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-card-foreground">{monthlyStats.avgSpeed}</p>
                <p className="text-sm text-muted-foreground">Avg Speed</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-card-foreground">{monthlyStats.totalTime}</p>
                <p className="text-sm text-muted-foreground">Total Time</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="text-center">
              <p className="text-lg font-semibold text-success">{monthlyStats.co2Saved}</p>
              <p className="text-sm text-muted-foreground">CO₂ emissions saved</p>
            </div>
          </div>
        </Card>

        {/* Goals */}
        <Card className="shadow-subtle">
          <div className="p-6">
            <h3 className="font-semibold text-card-foreground mb-4">Goals</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-card-foreground">Monthly Target</span>
                  <span className="text-sm text-muted-foreground">
                    {goalProgress.monthly.current} / {goalProgress.monthly.target} {goalProgress.monthly.unit}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${(goalProgress.monthly.current / goalProgress.monthly.target) * 100}%` }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-card-foreground">Weekly Target</span>
                  <span className="text-sm text-muted-foreground">
                    {goalProgress.weekly.current} / {goalProgress.weekly.target} {goalProgress.weekly.unit}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${(goalProgress.weekly.current / goalProgress.weekly.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="shadow-subtle">
          <div className="p-6">
            <h3 className="font-semibold text-card-foreground mb-4">Achievements</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border-2 transition-smooth ${
                    achievement.earned 
                      ? 'bg-primary/10 border-primary/20' 
                      : 'bg-muted/50 border-border/50 opacity-60'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                      achievement.earned ? 'bg-primary' : 'bg-muted'
                    }`}>
                      <achievement.icon className={`w-5 h-5 ${
                        achievement.earned ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <p className={`text-sm font-medium ${
                      achievement.earned ? 'text-card-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elegant">
        <div className="flex">
          <button 
            onClick={() => navigate("/home")}
            className="flex-1 p-4 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => navigate("/trips")}
            className="flex-1 p-4 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Route className="w-5 h-5" />
            <span className="text-xs">Trips</span>
          </button>
          <button 
            onClick={() => navigate("/statistics")}
            className="flex-1 p-4 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">Stats</span>
          </button>
          <button 
            onClick={() => navigate("/settings")}
            className="flex-1 p-4 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Target className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;