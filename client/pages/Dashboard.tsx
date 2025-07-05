import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  BarChart3,
  Brain,
  Monitor,
  Network,
  Play,
  RefreshCw,
  Shield,
  Zap,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Dashboard() {
  const [syncProgress, setSyncProgress] = useState(97);
  const [isLive, setIsLive] = useState(true);

  const [mockData, setMockData] = useState({
    btcPrice: 45420.5,
    ethPrice: 2843.22,
    totalVolume: 2.4,
    activeUsers: 15847,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMockData((prev) => ({
        btcPrice: prev.btcPrice + (Math.random() - 0.5) * 100,
        ethPrice: prev.ethPrice + (Math.random() - 0.5) * 50,
        totalVolume: prev.totalVolume + (Math.random() - 0.5) * 0.1,
        activeUsers: prev.activeUsers + Math.floor((Math.random() - 0.5) * 100),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cryptoData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: mockData.btcPrice,
      change: "+2.34%",
      volume: "1.2B",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: mockData.ethPrice,
      change: "+1.87%",
      volume: "840M",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: 0.4521,
      change: "-0.23%",
      volume: "234M",
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: 98.45,
      change: "+4.12%",
      volume: "567M",
    },
  ];

  const systemMetrics = [
    { label: "Sync Accuracy", value: "99.8%", status: "optimal" },
    { label: "Latency", value: "12ms", status: "optimal" },
    { label: "Uptime", value: "99.99%", status: "optimal" },
    { label: "Data Streams", value: "1,247", status: "normal" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Monitor className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-cyber-blue bg-clip-text text-transparent">
              DarkGemini
            </span>
          </Link>

          <div className="ml-auto flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div
                className={`h-2 w-2 rounded-full ${isLive ? "bg-primary animate-pulse" : "bg-muted"}`}
              />
              <span className="text-sm text-muted-foreground">
                {isLive ? "Live Sync" : "Disconnected"}
              </span>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Twin Active
            </Badge>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync Now
            </Button>
          </div>
        </div>
      </nav>

      <div className="container py-8">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Volume
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${mockData.totalVolume.toFixed(1)}B
              </div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-3 w-3 mr-1 text-primary" />
                +12.5% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockData.activeUsers.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-3 w-3 mr-1 text-primary" />
                +5.2% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sync Status</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{syncProgress}%</div>
              <p className="text-xs text-muted-foreground">
                Real-time synchronization
              </p>
              <Progress value={syncProgress} className="h-1 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                System Health
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Optimal</div>
              <p className="text-xs text-muted-foreground">
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trading Data */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Live Market Mirror
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cryptoData.map((crypto, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {crypto.symbol}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{crypto.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {crypto.symbol}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">
                          $
                          {typeof crypto.price === "number" &&
                          crypto.price > 100
                            ? crypto.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            : crypto.price}
                        </p>
                        <p
                          className={`text-sm flex items-center ${crypto.change.startsWith("+") ? "text-primary" : "text-destructive"}`}
                        >
                          {crypto.change.startsWith("+") ? (
                            <ArrowUp className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDown className="h-3 w-3 mr-1" />
                          )}
                          {crypto.change}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Volume</p>
                        <p className="text-sm font-medium">{crypto.volume}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neural Network Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="predictions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="predictions">Predictions</TabsTrigger>
                    <TabsTrigger value="patterns">Patterns</TabsTrigger>
                    <TabsTrigger value="alerts">Alerts</TabsTrigger>
                  </TabsList>
                  <TabsContent value="predictions" className="mt-4">
                    <div className="space-y-4">
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">BTC Price Trend</span>
                          <Badge className="bg-primary/10 text-primary">
                            Bullish
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Neural analysis suggests 73% probability of upward
                          movement in next 4 hours
                        </p>
                        <Progress value={73} className="h-2 mt-2" />
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">Market Volatility</span>
                          <Badge variant="secondary">Moderate</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Expected volatility increase due to upcoming economic
                          data release
                        </p>
                        <Progress value={45} className="h-2 mt-2" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="patterns" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      Pattern recognition analysis interface
                    </div>
                  </TabsContent>
                  <TabsContent value="alerts" className="mt-4">
                    <div className="text-center py-8 text-muted-foreground">
                      Real-time alert management system
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* System Status */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  System Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {metric.value}
                      </span>
                      <div
                        className={`h-2 w-2 rounded-full ${
                          metric.status === "optimal"
                            ? "bg-primary"
                            : "bg-yellow-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Market Analysis</span>
                    <span>Running</span>
                  </div>
                  <Progress value={85} className="h-1" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Risk Assessment</span>
                    <span>Active</span>
                  </div>
                  <Progress value={92} className="h-1" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pattern Recognition</span>
                    <span>Learning</span>
                  </div>
                  <Progress value={78} className="h-1" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-primary to-cyber-blue hover:from-primary/90 hover:to-cyber-blue/90">
                  <Play className="h-4 w-4 mr-2" />
                  Run Quantum Simulation
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-quantum-glow/50 text-quantum-glow hover:bg-quantum-glow/10"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Quantum Sync
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  Neural Logs
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10"
                >
                  <Brain className="h-4 w-4 mr-2" />
                  Enter Metaverse
                </Button>
              </CardContent>
            </Card>

            <Card className="border-quantum-glow/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-quantum-glow/20 flex items-center justify-center">
                    <span className="text-quantum-glow text-xs">🔮</span>
                  </div>
                  Quantum Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Quantum Coherence</span>
                    <span className="text-quantum-glow">Active</span>
                  </div>
                  <Progress value={94} className="h-1" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Parallel Universes</span>
                    <span className="text-cyber-purple">∞</span>
                  </div>
                  <Progress value={100} className="h-1" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reality Synchronization</span>
                    <span className="text-primary">99.97%</span>
                  </div>
                  <Progress value={99.97} className="h-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
