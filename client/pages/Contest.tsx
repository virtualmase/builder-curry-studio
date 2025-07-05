import { useState, useEffect } from "react";
import QuantumNav from "@/components/QuantumNav";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Trophy,
  Medal,
  Award,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Gift,
  Target,
  BarChart3,
  Crown,
  Zap,
  Brain,
} from "lucide-react";

export default function Contest() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentContest = {
    title: "Digital Twin Trading Championship",
    subtitle: "Q1 2024 Global Competition",
    prize: "$100,000",
    participants: 12847,
    description:
      "Compete against traders worldwide using Dark Gemini Labs' digital twin technology. No real money at risk - just pure skill and strategy.",
  };

  const leaderboard = [
    {
      rank: 1,
      username: "QuantumTrader",
      avatar: "/api/placeholder/40/40",
      country: "🇺🇸",
      roi: "+347.2%",
      trades: 2847,
      winRate: "89.4%",
      badge: "Quantum Master",
    },
    {
      rank: 2,
      username: "NeuralNinja",
      avatar: "/api/placeholder/40/40",
      country: "🇸🇬",
      roi: "+298.7%",
      trades: 1934,
      winRate: "87.1%",
      badge: "AI Specialist",
    },
    {
      rank: 3,
      username: "CryptoSage",
      avatar: "/api/placeholder/40/40",
      country: "🇩🇪",
      roi: "+276.4%",
      trades: 2156,
      winRate: "85.8%",
      badge: "Market Wizard",
    },
    {
      rank: 4,
      username: "DigitalOracle",
      avatar: "/api/placeholder/40/40",
      country: "🇯🇵",
      roi: "+251.9%",
      trades: 1687,
      winRate: "84.2%",
      badge: "Prediction Pro",
    },
    {
      rank: 5,
      username: "TwinMaster",
      avatar: "/api/placeholder/40/40",
      country: "🇬🇧",
      roi: "+234.6%",
      trades: 1523,
      winRate: "82.7%",
      badge: "Twin Expert",
    },
  ];

  const pastWinners = [
    {
      quarter: "Q4 2023",
      winner: "AlphaQuantum",
      roi: "+456.8%",
      prize: "$75,000",
      country: "🇨🇦",
    },
    {
      quarter: "Q3 2023",
      winner: "DeepTrader",
      roi: "+398.2%",
      prize: "$75,000",
      country: "🇦🇺",
    },
    {
      quarter: "Q2 2023",
      winner: "NeuralNet",
      roi: "+367.5%",
      prize: "$50,000",
      country: "🇰🇷",
    },
  ];

  const upcomingContests = [
    {
      title: "AI Trading Sprint",
      startDate: "March 15, 2024",
      duration: "7 days",
      prize: "$25,000",
      participants: "500 max",
      description: "Fast-paced weekly contest focusing on AI-assisted trading",
    },
    {
      title: "Risk Management Masters",
      startDate: "April 1, 2024",
      duration: "30 days",
      prize: "$50,000",
      participants: "1,000 max",
      description:
        "Contest judged on risk-adjusted returns and drawdown control",
    },
    {
      title: "Quantum Trading Olympics",
      startDate: "July 1, 2024",
      duration: "90 days",
      prize: "$250,000",
      participants: "Unlimited",
      description:
        "The ultimate trading competition with quantum computing features",
    },
  ];

  const achievements = [
    {
      name: "First Trade",
      icon: Target,
      description: "Complete your first simulated trade",
      rarity: "Common",
    },
    {
      name: "Profit Streak",
      icon: TrendingUp,
      description: "10 consecutive profitable trades",
      rarity: "Uncommon",
    },
    {
      name: "Risk Master",
      icon: Brain,
      description: "Maintain <5% maximum drawdown for 30 days",
      rarity: "Rare",
    },
    {
      name: "Quantum Trader",
      icon: Zap,
      description: "Use quantum analytics for 100 trades",
      rarity: "Epic",
    },
    {
      name: "Twin Champion",
      icon: Crown,
      description: "Win a quarterly contest",
      rarity: "Legendary",
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "text-gray-500";
      case "Uncommon":
        return "text-green-500";
      case "Rare":
        return "text-blue-500";
      case "Epic":
        return "text-purple-500";
      case "Legendary":
        return "text-yellow-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <QuantumNav />

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/90 text-primary-foreground px-4 py-2">
              Live Competition
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{currentContest.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {currentContest.description}
            </p>
          </div>

          {/* Current Contest Overview */}
          <Card className="max-w-4xl mx-auto mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {currentContest.subtitle}
              </CardTitle>
              <CardDescription className="text-lg">
                Prize Pool:{" "}
                <span className="text-primary font-bold text-2xl">
                  {currentContest.prize}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {timeRemaining.days}
                  </div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {timeRemaining.hours}
                  </div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {timeRemaining.minutes}
                  </div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {timeRemaining.seconds}
                  </div>
                  <div className="text-sm text-muted-foreground">Seconds</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="px-8">
                  <Users className="h-5 w-5 mr-2" />
                  Join Contest ({currentContest.participants.toLocaleString()}{" "}
                  participants)
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Rules & Prizes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="leaderboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="leaderboard">Live Leaderboard</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Contests</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="history">Past Winners</TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Current Leaderboard
                  </CardTitle>
                  <CardDescription>
                    Updated every 5 minutes during trading hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboard.map((trader, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                          trader.rank <= 3
                            ? "border-primary/50 bg-primary/5"
                            : "border-border"
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center gap-2">
                            {getRankIcon(trader.rank)}
                            <span className="text-lg font-bold w-8">
                              #{trader.rank}
                            </span>
                          </div>

                          <Avatar className="h-10 w-10">
                            <AvatarImage src={trader.avatar} />
                            <AvatarFallback>
                              {trader.username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">
                                {trader.username}
                              </span>
                              <span className="text-lg">{trader.country}</span>
                              <Badge variant="secondary" className="text-xs">
                                {trader.badge}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {trader.trades.toLocaleString()} trades •{" "}
                              {trader.winRate} win rate
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">
                              {trader.roi}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Total Return
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      View Full Leaderboard (1,000+ traders)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-8">
              <div className="grid gap-6">
                {upcomingContests.map((contest, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{contest.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {contest.description}
                          </CardDescription>
                        </div>
                        <Badge className="bg-primary/10 text-primary">
                          {contest.prize}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Start Date
                          </div>
                          <div className="font-semibold">
                            {contest.startDate}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Duration
                          </div>
                          <div className="font-semibold">
                            {contest.duration}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Max Participants
                          </div>
                          <div className="font-semibold">
                            {contest.participants}
                          </div>
                        </div>
                        <div>
                          <Button className="w-full">
                            <Calendar className="h-4 w-4 mr-2" />
                            Set Reminder
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Trading Achievements
                  </CardTitle>
                  <CardDescription>
                    Unlock badges and earn recognition for your trading
                    milestones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <achievement.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">
                              {achievement.name}
                            </div>
                            <div
                              className={`text-xs font-medium ${getRarityColor(achievement.rarity)}`}
                            >
                              {achievement.rarity}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="h-5 w-5" />
                    Championship History
                  </CardTitle>
                  <CardDescription>
                    Past quarterly contest winners and their achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastWinners.map((winner, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-border"
                      >
                        <div className="flex items-center gap-4">
                          <Trophy className="h-8 w-8 text-yellow-500" />
                          <div>
                            <div className="font-semibold text-lg">
                              {winner.winner} {winner.country}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {winner.quarter} Champion
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            {winner.roi}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Won {winner.prize}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Philanthropic Initiative */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trading for Good</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              10% of all contest prize pools support financial literacy and
              technology education in underserved communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Financial Literacy Foundation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Supporting financial education programs in schools across
                  developing nations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>2024 Contribution</span>
                    <span className="font-semibold">$125,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Students Reached</span>
                    <span className="font-semibold">15,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI for Social Good
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Funding AI research projects that address social and
                  environmental challenges.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>2024 Contribution</span>
                    <span className="font-semibold">$200,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Projects Funded</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Open Source Initiative
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contributing digital twin and trading algorithms to open
                  source communities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Repositories</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Contributors</span>
                    <span className="font-semibold">500+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
