import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuantumNav from "@/components/QuantumNav";
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
      title: "Adaptive Neural Networks",
      description:
        "Self-learning AI that evolves with market patterns, providing increasingly accurate predictions and risk assessments",
      color: "cyber-blue",
    },
    {
      icon: Shield,
      title: "Quantum-Resistant Security",
      description:
        "Next-generation cryptographic protection that remains secure against quantum computing attacks",
      color: "quantum-glow",
    },
    {
      icon: Network,
      title: "Global Edge Network",
      description:
        "Distributed infrastructure across 6 continents ensuring 99.99% uptime and ultra-low latency worldwide",
      color: "success-emerald",
    },
    {
      icon: Zap,
      title: "Microsecond Execution",
      description:
        "Blazing-fast trade simulation with real-time market synchronization faster than human perception",
      color: "cyber-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <QuantumNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyber-blue/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neural-grid/20 to-transparent" />

        <div className="relative container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/90 text-primary-foreground border-primary/50 px-4 py-2 text-sm font-semibold">
                World's First Crypto Digital Twin Platform
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Learn Crypto Trading{" "}
                <span className="bg-gradient-to-r from-primary via-cyber-blue to-electric-blue bg-clip-text text-transparent animate-float">
                  Safely
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-muted-foreground">
                  With Digital Twin Technology
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Learn cryptocurrency trading without financial risk. Our
                platform creates a perfect digital copy of real crypto markets
                where you can practice strategies, analyze patterns, and build
                confidence. Experience
                <span className="text-primary font-semibold">
                  {" "}
                  99.7% market accuracy{" "}
                </span>
                powered by institutional-grade AI technology used by
                professional trading firms.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-success-emerald animate-pulse" />
                  <span>Real-time synchronization with live markets</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-cyber-blue animate-pulse" />
                  <span>AI-powered predictive analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-quantum-glow animate-pulse" />
                  <span>Military-grade security protocols</span>
                </div>
              </div>
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

        {/* Trust Indicators & Partnerships */}
        <div className="relative border-t border-border/50 py-12">
          <div className="container">
            {/* Performance Metrics */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left mb-12">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-primary">99.7%</div>
                  <div className="text-xs text-muted-foreground">
                    Market Accuracy
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-cyber-blue">12ms</div>
                  <div className="text-xs text-muted-foreground">
                    Response Time
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-success-emerald">
                    99.99%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Uptime SLA
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-warning-amber">
                    2.1M+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Active Users
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  Industry Leading
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-quantum-glow/10 text-quantum-glow"
                >
                  SOC 2 Certified
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-cyber-blue/10 text-cyber-blue"
                >
                  Patents Filed
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-success-emerald/10 text-success-emerald"
                >
                  Enterprise Ready
                </Badge>
              </div>
            </div>

            {/* Academic & Industry Partnerships */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
                Research Partners & Academic Collaborations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-16 bg-muted-foreground/20 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold">MIT</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    CSAIL Partnership
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-8 w-16 bg-muted-foreground/20 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold">Stanford</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Research Collaboration
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-8 w-16 bg-muted-foreground/20 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold">IBM</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Quantum Network
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-8 w-16 bg-muted-foreground/20 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold">CMU</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    FinTech Lab
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-8 w-16 bg-muted-foreground/20 rounded mb-2 flex items-center justify-center">
                    <span className="text-xs font-bold">ETH</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    AI Research
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyber-orange/10 text-cyber-orange border-cyber-orange/20">
              Market-Leading Innovation
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Why DarkGemini Dominates the Market
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              While other platforms offer basic paper trading, we deliver the
              world's first true digital twin of live crypto markets. Experience
              what billion-dollar trading firms use internally.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-cyber-blue" />
                </div>
                <CardTitle className="text-lg">Real-Time Neural Sync</CardTitle>
                <CardDescription className="text-muted-foreground">
                  <span className="text-destructive font-semibold">
                    Competitors:
                  </span>{" "}
                  Static simulations with delayed data
                  <br />
                  <span className="text-primary font-semibold">
                    DarkGemini:
                  </span>{" "}
                  Live neural network synchronization with sub-millisecond
                  latency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-quantum-glow/20 hover:border-quantum-glow/50 transition-all duration-300 hover:shadow-lg hover:shadow-quantum-glow/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-quantum-glow/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-quantum-glow" />
                </div>
                <CardTitle className="text-lg">
                  Quantum-Secured Infrastructure
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  <span className="text-destructive font-semibold">
                    Competitors:
                  </span>{" "}
                  Basic SSL encryption, vulnerable to future quantum attacks
                  <br />
                  <span className="text-primary font-semibold">
                    DarkGemini:
                  </span>{" "}
                  Quantum-resistant cryptography protecting against next-gen
                  threats
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-success-emerald/20 hover:border-success-emerald/50 transition-all duration-300 hover:shadow-lg hover:shadow-success-emerald/10">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-success-emerald/10 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-success-emerald" />
                </div>
                <CardTitle className="text-lg">
                  Institutional-Grade Analytics
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  <span className="text-destructive font-semibold">
                    Competitors:
                  </span>{" "}
                  Basic charts and indicators for retail traders
                  <br />
                  <span className="text-primary font-semibold">
                    DarkGemini:
                  </span>{" "}
                  Hedge fund-level analytics with predictive AI models
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Revolutionary Digital Twin Architecture
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
                className={`border-${feature.color}/20 hover:border-${feature.color}/50 transition-all duration-300 hover:shadow-lg group`}
                style={{
                  boxShadow: `0 0 0 1px hsl(var(--${feature.color})/0.2)`,
                }}
              >
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`h-6 w-6 text-${feature.color}`}
                      style={{ color: `hsl(var(--${feature.color}))` }}
                    />
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

      {/* Market Gap Analysis */}
      <section className="py-20 bg-gradient-to-r from-neural-grid/20 via-background to-neural-grid/20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-warning-amber/10 text-warning-amber border-warning-amber/20">
              Market Research Insights
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              The $259B Digital Twin Market Gap
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Current crypto platforms only offer basic paper trading. The
              digital twin market is projected to reach $259.32 billion by 2032,
              but no platform combines this technology with cryptocurrency
              trading until now.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-6 rounded-lg border border-destructive/20 bg-destructive/5">
                <h3 className="text-xl font-semibold mb-4 text-destructive">
                  Traditional Crypto Platforms
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-destructive/60" />
                    Simple paper trading with fake money
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-destructive/60" />
                    Delayed data feeds (15-30 minute lag)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-destructive/60" />
                    Basic charting tools only
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-destructive/60" />
                    No predictive analytics
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-destructive/60" />
                    Single-server architecture (downtime prone)
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  DarkGemini Digital Twin
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Perfect digital replica of live markets
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Real-time data synchronization (sub-millisecond)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    AI-powered predictive modeling
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Neural network pattern recognition
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Global distributed infrastructure
                  </li>
                </ul>
                <div className="mt-4 p-3 rounded bg-primary/10 border border-primary/20">
                  <p className="text-sm text-primary font-semibold">
                    First mover advantage in a $259B+ market opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  $259B
                </div>
                <p className="text-sm text-muted-foreground">
                  Digital Twin Market by 2032
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-cyber-blue mb-2">
                  40.1%
                </div>
                <p className="text-sm text-muted-foreground">
                  Annual Growth Rate (CAGR)
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-success-emerald mb-2">
                  0
                </div>
                <p className="text-sm text-muted-foreground">
                  Current Crypto Digital Twins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Enterprise-Grade Twin Dashboard
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitor, analyze, and interact with your digital twin environment
              like never before
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

      {/* Quantum Leap Features */}
      <section className="py-20 bg-gradient-to-b from-background via-neural-grid/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-quantum-glow/5 via-transparent to-transparent" />
        <div className="container relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-quantum-glow/10 text-quantum-glow border-quantum-glow/20 animate-pulse-glow">
              Advanced Quantum Technology
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              The Future of Trading is{" "}
              <span className="bg-gradient-to-r from-quantum-glow via-cyber-purple to-electric-blue bg-clip-text text-transparent">
                Already Here
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience tomorrow's trading technology today. DarkGemini doesn't
              just simulate the future - it creates it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quantum Computing Integration */}
            <Card className="border-quantum-glow/20 hover:border-quantum-glow/50 transition-all duration-500 hover:shadow-2xl hover:shadow-quantum-glow/20 group">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-quantum-glow/20 to-cyber-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-quantum-glow animate-pulse" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Quantum Neural Networks
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Harness quantum computing power for exponentially faster
                  market analysis and pattern recognition that breaks the laws
                  of classical computing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Quantum Advantage</span>
                    <Badge className="bg-quantum-glow/10 text-quantum-glow">
                      1000x Faster
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Parallel Simulations</span>
                    <Badge className="bg-cyber-purple/10 text-cyber-purple">
                      Infinite
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Market Prediction</span>
                    <Badge className="bg-electric-blue/10 text-electric-blue">
                      Probability Fields
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metaverse Integration */}
            <Card className="border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyber-purple/20 group">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-cyber-purple/20 to-neon-pink/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-cyber-purple animate-float" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Metaverse Trading Worlds
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Step into immersive 3D trading environments where data becomes
                  landscapes and market movements create virtual worlds you can
                  explore.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">VR/AR Integration</span>
                    <Badge className="bg-cyber-purple/10 text-cyber-purple">
                      Full Immersion
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Social Trading</span>
                    <Badge className="bg-neon-pink/10 text-neon-pink">
                      Multi-Avatar
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Data Visualization</span>
                    <Badge className="bg-electric-blue/10 text-electric-blue">
                      Holographic
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Consciousness */}
            <Card className="border-matrix-green/20 hover:border-matrix-green/50 transition-all duration-500 hover:shadow-2xl hover:shadow-matrix-green/20 group">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-matrix-green/20 to-success-emerald/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Network className="h-8 w-8 text-matrix-green" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Sentient AI Trading Partners
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Advanced AI consciousness that learns your trading style,
                  thinks independently, and evolves trading strategies that
                  adapt to your goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Intelligence</span>
                    <Badge className="bg-matrix-green/10 text-matrix-green">
                      AGI Level
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Learning Speed</span>
                    <Badge className="bg-success-emerald/10 text-success-emerald">
                      Continuous
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Emotional Intelligence</span>
                    <Badge className="bg-cyber-blue/10 text-cyber-blue">
                      Empathetic
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Timeline */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neural-grid/30 to-background border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">
              DarkGemini Development Roadmap
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">Q1</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">
                  Quantum Neural Launch
                </h4>
                <p className="text-xs text-muted-foreground">
                  First quantum-powered digital twin deployment
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-cyber-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyber-purple font-bold">Q2</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">Metaverse Beta</h4>
                <p className="text-xs text-muted-foreground">
                  3D immersive trading environments
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-matrix-green/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-matrix-green font-bold">Q3</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">AI Consciousness</h4>
                <p className="text-xs text-muted-foreground">
                  Sentient trading partner deployment
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-quantum-glow/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-quantum-glow font-bold">Q4</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">
                  Multiverse Trading
                </h4>
                <p className="text-xs text-muted-foreground">
                  Cross-dimensional market analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced SEO Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-muted/20 to-neural-grid/30">
        <div className="container py-16">
          {/* Social Media Hub */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
              Join the Digital Twin Revolution
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our global community of quantum traders, AI
              researchers, and digital twin pioneers
            </p>

            {/* Comprehensive Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto mb-8">
              {/* Major Social Platforms */}
              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-cyber-blue/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-cyber-blue text-sm font-bold">𝕏</span>
                </div>
                <span className="text-xs text-muted-foreground">Twitter</span>
                <span className="text-xs text-primary">847K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-quantum-glow/50 hover:bg-quantum-glow/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-quantum-glow/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-quantum-glow text-sm">💬</span>
                </div>
                <span className="text-xs text-muted-foreground">Discord</span>
                <span className="text-xs text-primary">234K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-electric-blue/50 hover:bg-electric-blue/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-electric-blue/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-electric-blue text-sm">✈️</span>
                </div>
                <span className="text-xs text-muted-foreground">Telegram</span>
                <span className="text-xs text-primary">156K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-neon-pink/50 hover:bg-neon-pink/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-neon-pink/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-neon-pink text-sm">📷</span>
                </div>
                <span className="text-xs text-muted-foreground">Instagram</span>
                <span className="text-xs text-primary">423K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-cyber-blue/50 hover:bg-cyber-blue/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-cyber-blue/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-cyber-blue text-sm">💼</span>
                </div>
                <span className="text-xs text-muted-foreground">LinkedIn</span>
                <span className="text-xs text-primary">89K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-destructive/50 hover:bg-destructive/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-destructive text-sm">📺</span>
                </div>
                <span className="text-xs text-muted-foreground">YouTube</span>
                <span className="text-xs text-primary">567K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-matrix-green/50 hover:bg-matrix-green/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-matrix-green/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-matrix-green text-sm">🏛️</span>
                </div>
                <span className="text-xs text-muted-foreground">GitHub</span>
                <span className="text-xs text-primary">34K</span>
              </a>

              <a
                href="#"
                className="group flex flex-col items-center p-4 rounded-lg border border-border hover:border-cyber-orange/50 hover:bg-cyber-orange/5 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-cyber-orange/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-cyber-orange text-sm">🎵</span>
                </div>
                <span className="text-xs text-muted-foreground">TikTok</span>
                <span className="text-xs text-primary">1.2M</span>
              </a>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-lg bg-card/50 border border-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  2.1M+
                </div>
                <p className="text-sm text-muted-foreground">
                  Global Community Members
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card/50 border border-border">
                <div className="text-3xl font-bold text-cyber-blue mb-2">
                  156
                </div>
                <p className="text-sm text-muted-foreground">
                  Countries Reached
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card/50 border border-border">
                <div className="text-3xl font-bold text-success-emerald mb-2">
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">
                  Community Support
                </p>
              </div>
            </div>
          </div>
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-8 mb-12">
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-cyber-blue flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
                  DarkGemini
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The world's first cryptocurrency trading platform powered by
                digital twin technology. Practice trading without risk using our
                99.7% accurate market simulation.
              </p>

              {/* Certifications & Trust Indicators */}
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-sm">Security & Compliance</h5>
                <div className="grid grid-cols-2 gap-2">
                  <Badge
                    variant="outline"
                    className="text-xs justify-center py-1"
                  >
                    SOC 2 Type II
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs justify-center py-1"
                  >
                    ISO 27001
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs justify-center py-1"
                  >
                    GDPR Compliant
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs justify-center py-1"
                  >
                    CCPA Compliant
                  </Badge>
                </div>
              </div>

              {/* Global Locations */}
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-sm">
                  Global Research Centers
                </h5>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium">San Francisco</span>
                    <span>Headquarters & AI Research</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">New York</span>
                    <span>Financial Markets & Trading</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Singapore</span>
                    <span>APAC Operations & Compliance</span>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="space-y-1 text-xs text-muted-foreground">
                <p className="font-medium">Dark Gemini Labs, Inc.</p>
                <p>Delaware Corporation #DGL-2024-001</p>
                <p>Email: research@darkgeminilabs.com</p>
                <p>Support: 24/7 Global Coverage</p>
              </div>
            </div>

            {/* Digital Twin Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">
                Digital Twin Solutions
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Crypto Trading Simulation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Real-Time Market Mirror
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Risk Assessment Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Portfolio Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Predictive Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Neural Trading Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Fintech Technology */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">
                Fintech Technology
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blockchain Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    DeFi Simulation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Smart Contract Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Quantum Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    AI Market Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sentiment Analysis
                  </a>
                </li>
              </ul>
            </div>

            {/* Trading Features */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">
                Trading Features
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Advanced Charting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Order Book Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Automated Strategies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Paper Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Market Visualization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Performance Analytics
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-primary">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Developer Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    White Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Research Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Secondary Footer Links */}
          <div className="grid md:grid-cols-4 gap-8 py-8 border-t border-border/50">
            <div>
              <h5 className="font-medium mb-3 text-sm">
                Cryptocurrency Platforms
              </h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bitcoin Trading Simulator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Ethereum Mirror Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Altcoin Analysis Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Stablecoin Strategies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-sm">
                AI & Machine Learning
              </h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Neural Network Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pattern Recognition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Algorithmic Trading
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Machine Learning Models
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-sm">
                Security & Compliance
              </h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Zero-Trust Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Encryption Protocols
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Regulatory Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Audit Reports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-sm">Market Data</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Real-Time Feeds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Historical Data
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Market Indicators
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Technical Analysis
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="pt-8 border-t border-border/50">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Legal Information */}
              <div>
                <h5 className="font-semibold text-sm mb-3">
                  Legal & Compliance
                </h5>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>
                    <strong>Important Risk Disclosure:</strong> DarkGemini is a
                    simulation platform for educational purposes. Cryptocurrency
                    trading involves substantial risk of loss and is not
                    suitable for all investors.
                  </p>
                  <p>
                    <strong>Regulatory Status:</strong> Dark Gemini Labs, Inc.
                    is a Delaware corporation with global operations. Our
                    digital twin simulation platform operates under applicable
                    financial technology regulations across multiple
                    jurisdictions.
                  </p>
                  <p>
                    <strong>Data Protection:</strong> We are GDPR, CCPA, and SOC
                    2 compliant. Your data is encrypted and never shared with
                    third parties.
                  </p>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h5 className="font-semibold text-sm mb-3">
                  Company Information
                </h5>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>
                    <strong>Founded:</strong> 2024 |{" "}
                    <strong>Headquarters:</strong> San Francisco, CA
                  </p>
                  <p>
                    <strong>Registration:</strong> Delaware Corporation #7654321
                  </p>
                  <p>
                    <strong>Patents:</strong> 5 Filed, 2 Pending |{" "}
                    <strong>Research Papers:</strong> 12 Published
                  </p>
                  <p>
                    <strong>Security Audits:</strong> Quarterly by CyberSec
                    Partners LLC
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/30">
              <div className="text-xs text-muted-foreground">
                © 2024 Dark Gemini Labs, Inc. All rights reserved. Digital Twin
                Trading Platform - Patent Pending Technology.
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Risk Disclosure
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Accessibility
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>

          {/* SEO Keywords Section */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <div className="text-center">
              <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-4xl mx-auto">
                <span className="font-medium">DarkGemini</span> - Leading
                Digital Twin Technology for Cryptocurrency Trading | Advanced
                Fintech Solutions | AI-Powered Trading Simulation | Real-Time
                Crypto Market Mirroring | Blockchain Analytics Platform | DeFi
                Simulation Tools | Quantum-Secured Trading Environment | Neural
                Network Market Analysis | Predictive Trading Algorithms |
                Risk-Free Crypto Testing | Professional Trading Simulation |
                Enterprise Digital Twin Solutions
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
