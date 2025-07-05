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
              <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-cyber-blue/10 text-primary border-primary/20 animate-pulse-glow">
                🚀 World's First Crypto Digital Twin Platform
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Trade Crypto with{" "}
                <span className="bg-gradient-to-r from-primary via-cyber-blue to-electric-blue bg-clip-text text-transparent animate-float">
                  Zero Risk
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-muted-foreground">
                  Using Advanced Digital Twins
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The only platform that creates a perfect digital mirror of live
                crypto markets. Test strategies, predict outcomes, and optimize
                portfolios with
                <span className="text-primary font-semibold">
                  {" "}
                  99.7% accuracy{" "}
                </span>
                before risking real capital. Powered by neural networks and
                quantum-secured infrastructure.
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
                    🚀 First mover advantage in a $259B+ market opportunity
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

      {/* Enhanced SEO Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
                  DarkGemini
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Revolutionary digital twin technology for cryptocurrency
                trading. Experience parallel trading environments, predictive
                analytics, and risk-free simulation with military-grade security
                and real-time synchronization.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="text-xs">
                  AI-Powered
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Real-Time Sync
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Zero-Risk Testing
                </Badge>
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-muted-foreground">
                © 2024 DarkGemini Technologies, Inc. All rights reserved.
                Digital Twin Trading Platform - Revolutionary Cryptocurrency
                Simulation Technology.
              </div>
              <div className="flex space-x-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Risk Disclosure
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
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
