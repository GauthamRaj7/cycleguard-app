import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  Shield,
  Bell,
  MapPin,
  Battery,
  Smartphone,
  Users,
  HelpCircle,
  LogOut,
  ChevronRight,
  Settings as SettingsIcon,
  Route,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    motionAlerts: true,
    batteryWarnings: true,
    tripReminders: false,
    securityAlerts: true
  });

  const [autoLock, setAutoLock] = useState({
    enabled: true,
    distance: 10, // meters
    delay: 10 // seconds
  });

  const settingsGroups = [
    {
      title: "Security",
      icon: Shield,
      items: [
        {
          label: "Auto-lock enabled",
          description: "Lock cycle when 10m away for 10 seconds",
          type: "switch",
          value: autoLock.enabled,
          onChange: (value: boolean) => setAutoLock({...autoLock, enabled: value})
        },
        {
          label: "Motion alerts",
          description: "Get notified when cycle moves unexpectedly",
          type: "switch",
          value: notifications.motionAlerts,
          onChange: (value: boolean) => setNotifications({...notifications, motionAlerts: value})
        },
        {
          label: "Emergency contacts",
          description: "Manage who gets theft alerts",
          type: "action",
          icon: Users
        }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          label: "Battery warnings",
          description: "Low battery notifications",
          type: "switch",
          value: notifications.batteryWarnings,
          onChange: (value: boolean) => setNotifications({...notifications, batteryWarnings: value})
        },
        {
          label: "Trip reminders",
          description: "Daily cycling reminders",
          type: "switch",
          value: notifications.tripReminders,
          onChange: (value: boolean) => setNotifications({...notifications, tripReminders: value})
        },
        {
          label: "Security alerts",
          description: "Theft and movement notifications",
          type: "switch",
          value: notifications.securityAlerts,
          onChange: (value: boolean) => setNotifications({...notifications, securityAlerts: value})
        }
      ]
    },
    {
      title: "Device",
      icon: Smartphone,
      items: [
        {
          label: "Device information",
          description: "View hardware details and status",
          type: "action",
          icon: SettingsIcon
        },
        {
          label: "Calibrate sensors",
          description: "Improve tracking accuracy",
          type: "action",
          icon: MapPin
        },
        {
          label: "Power management",
          description: "Optimize battery usage",
          type: "action",
          icon: Battery
        }
      ]
    }
  ];

  const handleLogout = () => {
    // Handle logout logic here
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-background-secondary pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/home")}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Settings</h1>
            <p className="text-primary-foreground/80 text-sm">Customize your CycleGuard</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <Card key={groupIndex} className="shadow-subtle">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <group.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground">{group.title}</h3>
              </div>
              
              <div className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          {item.icon && (
                            <item.icon className="w-4 h-4 text-muted-foreground" />
                          )}
                          <div>
                            <p className="font-medium text-card-foreground">{item.label}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {item.type === "switch" ? (
                          <Switch
                            checked={item.value}
                            onCheckedChange={item.onChange}
                          />
                        ) : (
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    {itemIndex < group.items.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}

        {/* Support Section */}
        <Card className="shadow-subtle">
          <div className="p-6">
            <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <div className="text-left">
                    <p className="font-medium text-card-foreground">Help & FAQ</p>
                    <p className="text-sm text-muted-foreground">Get answers to common questions</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
              <Separator />
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-destructive/10 transition-smooth"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-4 h-4 text-destructive" />
                  <div className="text-left">
                    <p className="font-medium text-destructive">Sign Out</p>
                    <p className="text-sm text-muted-foreground">Sign out of your account</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </Card>

        {/* App Info */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">CycleGuard v1.0.0</p>
          <p className="text-xs text-muted-foreground">
            Developed for IIT Guwahati • Secure • Reliable • Smart
          </p>
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
            className="flex-1 p-4 flex flex-col items-center gap-1 text-primary"
          >
            <SettingsIcon className="w-5 h-5" />
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;