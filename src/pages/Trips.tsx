import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  Route,
  Clock,
  MapPin,
  Calendar,
  TrendingUp,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Trips = () => {
  const navigate = useNavigate();

  const recentTrips = [
    {
      id: 1,
      from: "Hostel Block K",
      to: "Academic Block A", 
      distance: "2.3 km",
      duration: "12 min",
      time: "2:30 PM",
      date: "Today",
      avgSpeed: "11.5 km/h",
      status: "completed"
    },
    {
      id: 2,
      from: "Library",
      to: "Cafeteria",
      distance: "1.8 km", 
      duration: "8 min",
      time: "12:45 PM",
      date: "Today",
      avgSpeed: "13.5 km/h",
      status: "completed"
    },
    {
      id: 3,
      from: "Academic Block B",
      to: "Sports Complex",
      distance: "3.7 km",
      duration: "18 min", 
      time: "6:15 PM",
      date: "Yesterday",
      avgSpeed: "12.3 km/h",
      status: "completed"
    },
    {
      id: 4,
      from: "Main Gate",
      to: "Hostel Block K",
      distance: "4.2 km",
      duration: "22 min",
      time: "8:30 PM", 
      date: "Yesterday",
      avgSpeed: "11.4 km/h",
      status: "completed"
    }
  ];

  const weeklyStats = {
    totalDistance: "32.7 km",
    totalTime: "2h 45m",
    avgSpeed: "11.9 km/h",
    trips: 12
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
          <div>
            <h1 className="text-xl font-bold">Trip History</h1>
            <p className="text-primary-foreground/80 text-sm">Track your cycling journeys</p>
          </div>
        </div>

        {/* Weekly Stats */}
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-elegant">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-card-foreground">This Week</h3>
              <Badge variant="secondary" className="shadow-subtle">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15%
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-card-foreground">{weeklyStats.totalDistance}</p>
                <p className="text-sm text-muted-foreground">Distance</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-card-foreground">{weeklyStats.trips}</p>
                <p className="text-sm text-muted-foreground">Trips</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-card-foreground">{weeklyStats.totalTime}</p>
                <p className="text-sm text-muted-foreground">Total Time</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-card-foreground">{weeklyStats.avgSpeed}</p>
                <p className="text-sm text-muted-foreground">Avg Speed</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Section */}
      <div className="p-6 -mt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Recent Trips</h2>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Trip List */}
        <div className="space-y-4">
          {recentTrips.map((trip) => (
            <Card key={trip.id} className="shadow-subtle hover:shadow-soft transition-smooth">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-sm font-medium text-card-foreground">{trip.from}</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-px h-4 bg-border" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium text-card-foreground">{trip.to}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{trip.date}</p>
                    <p className="text-sm font-medium text-card-foreground">{trip.time}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Route className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{trip.distance}</p>
                      <p className="text-xs text-muted-foreground">Distance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{trip.duration}</p>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{trip.avgSpeed}</p>
                      <p className="text-xs text-muted-foreground">Avg Speed</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline" className="w-full">
            Load More Trips
          </Button>
        </div>
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
            className="flex-1 p-4 flex flex-col items-center gap-1 text-primary"
          >
            <Route className="w-5 h-5" />
            <span className="text-xs font-medium">Trips</span>
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
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trips;