import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Activity,
  Play,
  Brain,
  Globe,
  Zap,
  Shield,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function QuantumNav() {
  const [isLive, setIsLive] = useState(true);
  const [quantumCoherence, setQuantumCoherence] = useState(97.4);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumCoherence((prev) =>
        Math.max(95, Math.min(99.9, prev + (Math.random() - 0.5) * 2)),
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Brain,
      color: "cyber-blue",
      badge: "Live",
    },
    {
      label: "FAQ",
      href: "/faq",
      icon: BookOpen,
      color: "primary",
      badge: "Help",
    },
    {
      label: "Advanced",
      href: "#",
      icon: Zap,
      color: "quantum-glow",
      badge: "Pro",
    },
    {
      label: "Security",
      href: "#",
      icon: Shield,
      color: "matrix-green",
      badge: "Safe",
    },
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 mr-8">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-cyber-blue flex items-center justify-center animate-pulse-glow">
            <Monitor className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
              DarkGemini
            </span>
            <span className="text-xs text-muted-foreground -mt-1">
              Digital Twin Platform
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-6 mr-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-${item.color}/10 group ${
                location.pathname === item.href ? `bg-${item.color}/10` : ""
              }`}
              style={{
                backgroundColor:
                  location.pathname === item.href
                    ? `hsl(var(--${item.color})/0.1)`
                    : undefined,
              }}
            >
              <item.icon
                className={`h-4 w-4 text-${item.color} group-hover:scale-110 transition-transform`}
                style={{ color: `hsl(var(--${item.color}))` }}
              />
              <span className="text-sm font-medium">{item.label}</span>
              <Badge
                variant="secondary"
                className={`text-xs bg-${item.color}/10 text-${item.color} border-${item.color}/20`}
                style={{
                  backgroundColor: `hsl(var(--${item.color})/0.1)`,
                  color: `hsl(var(--${item.color}))`,
                  borderColor: `hsl(var(--${item.color})/0.2)`,
                }}
              >
                {item.badge}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Status Indicators */}
        <div className="flex items-center space-x-6">
          {/* Quantum Coherence */}
          <div className="hidden lg:flex items-center space-x-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-quantum-glow animate-pulse" />
              <span className="text-muted-foreground">Quantum</span>
              <span className="text-quantum-glow font-mono">
                {quantumCoherence.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Live Sync Status */}
          <div className="flex items-center space-x-2">
            <div
              className={`h-2 w-2 rounded-full ${
                isLive ? "bg-primary animate-pulse" : "bg-muted"
              }`}
            />
            <span className="text-sm text-muted-foreground">
              {isLive ? "Neural Sync" : "Disconnected"}
            </span>
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-cyber-blue flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">
                    U
                  </span>
                </div>
                <span className="text-sm">User</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Activity className="h-4 w-4 mr-2" />
                Trading Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Brain className="h-4 w-4 mr-2" />
                AI Assistant
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Zap className="h-4 w-4 mr-2" />
                Quantum Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Globe className="h-4 w-4 mr-2" />
                Enter Metaverse
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Primary Action */}
          <Link to="/dashboard">
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-cyber-blue hover:from-primary/90 hover:to-cyber-blue/90"
            >
              <Play className="h-4 w-4 mr-2" />
              Launch Twin
            </Button>
          </Link>
        </div>
      </div>

      {/* Quantum Status Bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-cyber-blue to-quantum-glow opacity-60 animate-data-flow" />
    </nav>
  );
}
