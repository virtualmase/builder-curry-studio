import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  BarChart3,
  Brain,
  Globe,
  Layers,
  LineChart,
  Monitor,
  Network,
  Play,
  RefreshCw,
  Shield,
  Zap,
} from "lucide-react";

export default function Index() {
  const [syncProgress, setSyncProgress] = useState(0);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncProgress((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: "Active Connections", value: "2,847", trend: "+12%" },
    { label: "Data Streams", value: "156", trend: "+5%" },
    { label: "Sync Accuracy", value: "99.7%", trend: "+0.2%" },
    { label: "Processing Speed", value: "847ms", trend: "-15%" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Neural Synchronization",
      description:
        "Advanced AI-driven real-time mirroring of Gemini's trading infrastructure",
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description:
        "Zero-trust architecture with quantum-resistant encryption protocols",
    },
    {
      icon: Network,
      title: "Distributed Architecture",
      description:
        "Decentralized nodes ensuring 99.99% uptime and fault tolerance",
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Sub-millisecond latency with optimized data pipelines",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Monitor className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
              DarkGemini
            </span>
          </div>

          <div className="ml-auto flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div
                className={`h-2 w-2 rounded-full ${isLive ? "bg-primary animate-pulse" : "bg-muted"}`}
              />
              <span className="text-sm text-muted-foreground">
                {isLive ? "Live Sync" : "Disconnected"}
              </span>
            </div>
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <Activity className="h-4 w-4 mr-2" />
                Monitor
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm">
                <Play className="h-4 w-4 mr-2" />
                Launch Twin
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyber-blue/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neural-grid/20 to-transparent" />

        <div className="relative container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Next-Gen Digital Twin Technology
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Mirror the Future of{" "}
                <span className="bg-gradient-to-r from-primary via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  Cryptocurrency Trading
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                DarkGemini creates a real-time digital twin of Gemini's trading
                ecosystem. Experience parallel trading, predictive analytics,
                and risk simulation in a secure mirror environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Initialize Twin
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 w-full sm:w-auto"
                  >
                    <BarChart3 className="h-5 w-5 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Live Synchronization
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sync Progress</span>
                      <span>{syncProgress}%</span>
                    </div>
                    <Progress value={syncProgress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="text-lg font-semibold">{metric.value}</p>
                        <p className="text-xs text-primary">{metric.trend}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Advanced Digital Twin Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge technology to deliver unprecedented accuracy
              and performance in cryptocurrency market simulation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Real-Time Twin Dashboard
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitor, analyze, and interact with your digital twin environment
            </p>
          </div>

          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5" />
                    System Overview
                  </CardTitle>
                  <CardDescription>
                    Complete view of your digital twin infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Data Sources</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Market Data</span>
                          <Badge variant="secondary">Live</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Order Books</span>
                          <Badge variant="secondary">Live</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>User Activity</span>
                          <Badge variant="secondary">Live</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Processing</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>AI Engine</span>
                          <Badge className="bg-primary/10 text-primary">
                            Active
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Risk Models</span>
                          <Badge className="bg-primary/10 text-primary">
                            Active
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Predictions</span>
                          <Badge className="bg-primary/10 text-primary">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Output</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Twin State</span>
                          <Badge className="bg-cyber-blue/10 text-cyber-blue">
                            Synced
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Simulations</span>
                          <Badge className="bg-cyber-blue/10 text-cyber-blue">
                            Running
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Alerts</span>
                          <Badge className="bg-cyber-blue/10 text-cyber-blue">
                            Enabled
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trading" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Trading Mirror
                  </CardTitle>
                  <CardDescription>
                    Real-time trading environment synchronization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Trading dashboard interface will be implemented here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Predictive Analytics
                  </CardTitle>
                  <CardDescription>
                    Advanced market prediction and risk analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Analytics dashboard will be implemented here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Monitor
                  </CardTitle>
                  <CardDescription>
                    Real-time security status and threat detection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Security monitoring interface will be implemented here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                  <Monitor className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">DarkGemini</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The future of cryptocurrency trading through advanced digital
                twin technology.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Digital Twin</li>
                <li>Analytics</li>
                <li>Security</li>
                <li>API</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Technology</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Neural Networks</li>
                <li>Real-time Sync</li>
                <li>Quantum Security</li>
                <li>Distributed Systems</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 DarkGemini. All rights reserved. Digital Twin Technology
            Platform.
          </div>
        </div>
      </footer>
    </div>
  );
}
