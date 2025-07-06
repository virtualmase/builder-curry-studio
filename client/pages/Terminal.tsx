import { useState, useEffect } from "react";
import QuantumNav from "@/components/QuantumNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Brain,
  Eye,
  Target,
  Globe,
  Clock,
  BarChart3,
  LineChart,
  PieChart,
  Cpu,
  Shield,
  Wifi,
  Database,
  AlertTriangle,
  CheckCircle,
  Circle,
} from "lucide-react";

export default function Terminal() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [marketData, setMarketData] = useState({
    btc: { price: 45234.67, change: 2.34, volume: 1.2e9 },
    eth: { price: 2834.23, change: 1.87, volume: 840e6 },
    tao: { price: 487.89, change: 8.92, volume: 156e6 },
    sol: { price: 98.34, change: 4.12, volume: 567e6 },
  });

  const [neuralActivity, setNeuralActivity] = useState(94.7);
  const [quantumCoherence, setQuantumCoherence] = useState(97.3);
  const [darkPoolFlow, setDarkPoolFlow] = useState(847.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());

      // Simulate real-time data updates
      setMarketData((prev) => ({
        btc: {
          ...prev.btc,
          price: prev.btc.price + (Math.random() - 0.5) * 50,
        },
        eth: {
          ...prev.eth,
          price: prev.eth.price + (Math.random() - 0.5) * 20,
        },
        tao: {
          ...prev.tao,
          price: prev.tao.price + (Math.random() - 0.5) * 15,
        },
        sol: { ...prev.sol, price: prev.sol.price + (Math.random() - 0.5) * 5 },
      }));

      setNeuralActivity((prev) =>
        Math.max(85, Math.min(99, prev + (Math.random() - 0.5) * 2)),
      );
      setQuantumCoherence((prev) =>
        Math.max(90, Math.min(99.9, prev + (Math.random() - 0.5) * 1)),
      );
      setDarkPoolFlow((prev) =>
        Math.max(600, Math.min(1200, prev + (Math.random() - 0.5) * 50)),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number, decimals: number = 2) => {
    if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
    return num.toFixed(decimals);
  };

  const orderBookData = [
    { price: 45245.67, size: 2.3456, side: "sell" },
    { price: 45243.21, size: 1.7892, side: "sell" },
    { price: 45241.89, size: 3.4567, side: "sell" },
    { price: 45240.12, size: 0.8934, side: "sell" },
    { price: 45238.45, size: 1.2345, side: "sell" },
    { price: 45234.67, size: 0, side: "spread" },
    { price: 45230.89, size: 2.1234, side: "buy" },
    { price: 45228.34, size: 1.5678, side: "buy" },
    { price: 45225.67, size: 3.2109, side: "buy" },
    { price: 45223.12, size: 0.9876, side: "buy" },
    { price: 45220.45, size: 2.4567, side: "buy" },
  ];

  const whaleTransactions = [
    {
      asset: "BTC",
      amount: 847.23,
      direction: "in",
      exchange: "Coinbase Pro",
      time: "14:23:07",
    },
    {
      asset: "ETH",
      amount: 12450.45,
      direction: "out",
      exchange: "Binance",
      time: "14:22:45",
    },
    {
      asset: "TAO",
      amount: 2340.67,
      direction: "in",
      exchange: "OKX",
      time: "14:22:12",
    },
    {
      asset: "SOL",
      amount: 8967.23,
      direction: "out",
      exchange: "Kraken",
      time: "14:21:58",
    },
    {
      asset: "BTC",
      amount: 156.78,
      direction: "in",
      exchange: "Deribit",
      time: "14:21:34",
    },
  ];

  const systemMetrics = [
    { label: "NPU Utilization", value: 94.7, status: "optimal" },
    { label: "Quantum Sync", value: 97.3, status: "optimal" },
    { label: "Network Latency", value: 12, unit: "ms", status: "optimal" },
    { label: "Dark Pool Flow", value: 847.2, unit: "M", status: "normal" },
    { label: "Prediction Accuracy", value: 89.4, unit: "%", status: "optimal" },
    { label: "Risk Score", value: 23.7, status: "low" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <QuantumNav />

      {/* Terminal Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-success-emerald animate-pulse" />
                <span className="text-sm font-mono">
                  DARKGEMINI QUANTUM TERMINAL
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                {currentTime.toISOString().split("T")[0]}{" "}
                {currentTime.toTimeString().split(" ")[0]}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                NPU: {neuralActivity.toFixed(1)}%
              </Badge>
              <Badge className="bg-quantum-glow/10 text-quantum-glow border-quantum-glow/20">
                QC: {quantumCoherence.toFixed(1)}%
              </Badge>
              <Badge className="bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20">
                WHALE FLOW: ${formatNumber(darkPoolFlow * 1e6)}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Terminal Grid */}
      <div className="container py-4">
        <div className="grid grid-cols-12 gap-4 h-[calc(100vh-180px)]">
          {/* Market Data - Left Column */}
          <div className="col-span-3 space-y-4">
            {/* Primary Assets */}
            <Card className="h-64">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-mono">
                  MARKET MATRIX
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(marketData).map(([symbol, data]) => (
                  <div
                    key={symbol}
                    className="flex items-center justify-between py-1 border-b border-border/30"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold">
                        {symbol.toUpperCase()}
                      </span>
                      <div
                        className={`h-1 w-8 ${data.change > 0 ? "bg-success-emerald" : "bg-destructive"}`}
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono">
                        ${data.price.toFixed(2)}
                      </div>
                      <div
                        className={`text-xs ${data.change > 0 ? "text-success-emerald" : "text-destructive"}`}
                      >
                        {data.change > 0 ? "+" : ""}
                        {data.change.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Order Book */}
            <Card className="flex-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-mono">ORDER DEPTH</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-0.5 font-mono text-xs">
                  {orderBookData.map((order, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-0.5 px-1 ${
                        order.side === "sell"
                          ? "bg-destructive/10"
                          : order.side === "buy"
                            ? "bg-success-emerald/10"
                            : "bg-primary/20 font-bold"
                      }`}
                    >
                      <span>{order.price.toFixed(2)}</span>
                      {order.size > 0 && <span>{order.size.toFixed(4)}</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Charts and Analytics */}
          <div className="col-span-6 space-y-4">
            {/* Price Chart */}
            <Card className="h-80">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-mono">
                    NEURAL PRICE PREDICTION
                  </CardTitle>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-6 text-xs">
                      1M
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 text-xs">
                      5M
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 text-xs bg-primary/20"
                    >
                      15M
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 text-xs">
                      1H
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 text-xs">
                      4H
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-60 bg-neural-grid/10 rounded border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <div className="text-sm">
                      Neural Network Price Prediction
                    </div>
                    <div className="text-xs">Real-time quantum analysis</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Grid */}
            <div className="grid grid-cols-3 gap-4 h-40">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono">
                    SENTIMENT MATRIX
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>FEAR INDEX</span>
                      <span className="text-destructive">34</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>GREED INDEX</span>
                      <span className="text-success-emerald">67</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>SOCIAL VOLUME</span>
                      <span className="text-primary">+247%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>WHALE ACTIVITY</span>
                      <span className="text-warning-amber">HIGH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono">
                    VOLATILITY SURFACE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="text-center p-2 bg-primary/10 rounded">
                      <div className="text-primary font-bold">23.7%</div>
                      <div className="text-muted-foreground">30D IV</div>
                    </div>
                    <div className="text-center p-2 bg-cyber-blue/10 rounded">
                      <div className="text-cyber-blue font-bold">31.2%</div>
                      <div className="text-muted-foreground">60D IV</div>
                    </div>
                    <div className="text-center p-2 bg-success-emerald/10 rounded">
                      <div className="text-success-emerald font-bold">
                        89.4%
                      </div>
                      <div className="text-muted-foreground">PRED ACC</div>
                    </div>
                    <div className="text-center p-2 bg-warning-amber/10 rounded">
                      <div className="text-warning-amber font-bold">2.3x</div>
                      <div className="text-muted-foreground">GAMMA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-mono">
                    QUANTUM METRICS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-cyber-blue transition-all duration-300"
                          style={{ width: `${neuralActivity}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-12">
                        {neuralActivity.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-quantum-glow to-cyber-purple transition-all duration-300"
                          style={{ width: `${quantumCoherence}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-12">
                        {quantumCoherence.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - System & Whale Activity */}
          <div className="col-span-3 space-y-4">
            {/* System Status */}
            <Card className="h-64">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-mono">
                  SYSTEM MATRIX
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-muted-foreground">
                        {metric.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">
                          {metric.value}
                          {metric.unit || ""}
                        </span>
                        <div
                          className={`h-2 w-2 rounded-full ${
                            metric.status === "optimal"
                              ? "bg-success-emerald"
                              : metric.status === "normal"
                                ? "bg-primary"
                                : metric.status === "low"
                                  ? "bg-cyber-blue"
                                  : "bg-warning-amber"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">
                    NETWORK NODES
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 rounded flex items-center justify-center text-xs font-mono ${
                          Math.random() > 0.1
                            ? "bg-success-emerald/20 text-success-emerald"
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Whale Transactions */}
            <Card className="flex-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-mono">
                  WHALE ACTIVITY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {whaleTransactions.map((tx, i) => (
                    <div
                      key={i}
                      className="p-2 rounded bg-card border border-border/50"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold">
                            {tx.asset}
                          </span>
                          <div
                            className={`h-1 w-1 rounded-full ${
                              tx.direction === "in"
                                ? "bg-success-emerald"
                                : "bg-destructive"
                            }`}
                          />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">
                          {tx.time}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          {tx.exchange}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold ${
                            tx.direction === "in"
                              ? "text-success-emerald"
                              : "text-destructive"
                          }`}
                        >
                          {tx.direction === "in" ? "+" : "-"}
                          {formatNumber(tx.amount)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="border-t border-border bg-card/30 backdrop-blur">
        <div className="container py-2">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>BUTTERFLY LABS QUANTUM PROTOCOL</span>
              <span>QUANTUM COHERENCE: {quantumCoherence.toFixed(2)}%</span>
              <span>LATENCY: 12ms</span>
            </div>
            <div className="flex items-center gap-4">
              <span>DATA SOURCES: 847 ACTIVE</span>
              <span>PREDICTIONS: 89.4% ACC</span>
              <span>STATUS: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
