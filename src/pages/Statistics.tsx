import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Battery,
  Gauge,
  TrendingUp,
  Activity,
  MapPin,
  Route,
  Calendar,
  Settings,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
  const navigate = useNavigate();

  const deviceStats = {
    battery: 78,
    tirePressure: {
      front: 85,
      rear: 92
    },
    temperature: 24,
    lastSync: "2 minutes ago"
  };

  const performanceStats = [
    {
      label: "Max Speed",
      value: "28.5 km/h",
      change: "+5%",
      trend: "up",
      icon: Gauge
    },
    {
      label: "Avg Distance/Day",
      value: "15.2 km",
      change: "+12%", 
      trend: "up",
      icon: Route
    },
    {
      label: "Total Distance",
      value: "247 km",
      change: "+8%",
      trend: "up",
      icon: TrendingUp
    },
    {
      label: "Active Days",
      value: "18/30",
      change: "-2%",
      trend: "down",
      icon: Calendar
    }
  ];

  const weeklyData = [
    { day: "Mon", distance: 12.3 },
    { day: "Tue", distance: 8.7 },
    { day: "Wed", distance: 15.2 },
    { day: "Thu", distance: 11.8 },
    { day: "Fri", distance: 19.1 },
    { day: "Sat", distance: 6.4 },
    { day: "Sun", distance: 14.7 }
  ];

  const maxDistance = Math.max(...weeklyData.map(d => d.distance));

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
          <div>
            <h1 className="text-xl font-bold">Statistics</h1>
            <p className="text-primary-foreground/80 text-sm">Device & performance insights</p>
          </div>
        </div>

        {/* Device Health */}
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-elegant">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-card-foreground">Device Health</h3>
              <Badge variant="secondary" className="shadow-subtle">
                <Activity className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
            
            {/* Battery */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">Battery Level</span>
                </div>
                <span className="text-sm font-semibold text-card-foreground">{deviceStats.battery}%</span>
              </div>
              <Progress value={deviceStats.battery} className="h-2" />
              {deviceStats.battery < 20 && (
                <div className="flex items-center gap-1 mt-2">
                  <AlertCircle className="w-3 h-3 text-warning" />
                  <span className="text-xs text-warning">Charge recommended</span>
                </div>
              )}
            </div>

            {/* Tire Pressure */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Front Tire</span>
                  <span className="text-sm font-medium text-card-foreground">{deviceStats.tirePressure.front} PSI</span>
                </div>
                <Progress value={deviceStats.tirePressure.front} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Rear Tire</span>
                  <span className="text-sm font-medium text-card-foreground">{deviceStats.tirePressure.rear} PSI</span>
                </div>
                <Progress value={deviceStats.tirePressure.rear} className="h-2" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="p-6 -mt-4 space-y-6">
        {/* Performance Stats */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Performance</h2>
          <div className="grid grid-cols-2 gap-4">
            {performanceStats.map((stat, index) => (
              <Card key={index} className="p-4 shadow-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                  <Badge 
                    variant={stat.trend === "up" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {stat.change}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Chart */}
        <Card className="shadow-subtle">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-card-foreground">Weekly Distance</h3>
              <span className="text-sm text-muted-foreground">This Week</span>
            </div>
            
            <div className="space-y-3">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 text-sm text-muted-foreground">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div 
                        className="h-6 bg-gradient-primary rounded transition-smooth"
                        style={{ width: `${(day.distance / maxDistance) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-sm text-card-foreground text-right">{day.distance} km</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Maintenance Alerts */}
        <Card className="shadow-subtle">
          <div className="p-6">
            <h3 className="font-semibold text-card-foreground mb-4">Maintenance</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">Tire pressure optimal</p>
                  <p className="text-xs text-muted-foreground">Last checked: {deviceStats.lastSync}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground">Device battery low</p>
                  <p className="text-xs text-muted-foreground">Charge within 2 days</p>
                </div>
              </div>
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
            className="flex-1 p-4 flex flex-col items-center gap-1 text-primary"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs font-medium">Stats</span>
          </button>
          <button 
            onClick={() => navigate("/settings")}
            className="flex-1 p-4 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;