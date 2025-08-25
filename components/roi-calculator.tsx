"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign, Users } from "lucide-react"

export default function ROICalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(5000)
  const [currentEngagement, setCurrentEngagement] = useState<number>(2.5)
  const [currentLeads, setCurrentLeads] = useState<number>(50)
  const [results, setResults] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateROI = () => {
    setIsCalculating(true)

    setTimeout(() => {
      // AI improvement multipliers based on industry averages
      const engagementIncrease = 3.4 // 340% increase
      const leadIncrease = 2.8 // 280% increase
      const conversionImprovement = 1.85 // 85% improvement
      const timesSaved = 15 // hours per week

      const newEngagement = currentEngagement * engagementIncrease
      const newLeads = currentLeads * leadIncrease
      const additionalRevenue = newLeads * 150 * conversionImprovement // Assuming $150 avg customer value
      const timeSavingsValue = timesSaved * 4 * 50 // 50/hour rate, 4 weeks
      const totalROI = ((additionalRevenue + timeSavingsValue - monthlyBudget) / monthlyBudget) * 100

      setResults({
        newEngagement: newEngagement.toFixed(1),
        newLeads: Math.round(newLeads),
        additionalRevenue: Math.round(additionalRevenue),
        timeSavingsValue: Math.round(timeSavingsValue),
        totalROI: Math.round(totalROI),
        monthlyProfit: Math.round(additionalRevenue + timeSavingsValue - monthlyBudget),
      })
      setIsCalculating(false)
    }, 1500)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Background animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 rounded-2xl"></div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/3 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <Card className="relative border-2 border-black/10 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent animate-shimmer"></div>

        <CardHeader className="text-center relative">
          <div className="flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 bg-black/5 rounded-full blur-lg animate-pulse"></div>
            <div className="relative bg-black text-white p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
              <Calculator className="h-8 w-8" />
            </div>
          </div>
          <CardTitle className="font-serif text-3xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-fade-in-up">
            ROI Calculator
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 animate-fade-in-up delay-200">
            See how much our AI-powered social media marketing could increase your ROI
          </CardDescription>
        </CardHeader>

        <CardContent className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6 animate-fade-in-up delay-300">
              <h3 className="font-semibold text-xl mb-6 flex items-center">
                <div className="w-2 h-6 bg-black rounded-full mr-3"></div>
                Your Current Metrics
              </h3>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                  Monthly Marketing Budget ($)
                </Label>
                <div className="relative">
                  <Input
                    id="budget"
                    type="number"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    placeholder="5000"
                    className="border-2 border-gray-200 focus:border-black transition-colors duration-300 text-lg py-3"
                  />
                  <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="engagement" className="text-sm font-medium text-gray-700">
                  Current Engagement Rate (%)
                </Label>
                <div className="relative">
                  <Input
                    id="engagement"
                    type="number"
                    step="0.1"
                    value={currentEngagement}
                    onChange={(e) => setCurrentEngagement(Number(e.target.value))}
                    placeholder="2.5"
                    className="border-2 border-gray-200 focus:border-black transition-colors duration-300 text-lg py-3"
                  />
                  <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="leads" className="text-sm font-medium text-gray-700">
                  Monthly Leads Generated
                </Label>
                <div className="relative">
                  <Input
                    id="leads"
                    type="number"
                    value={currentLeads}
                    onChange={(e) => setCurrentLeads(Number(e.target.value))}
                    placeholder="50"
                    className="border-2 border-gray-200 focus:border-black transition-colors duration-300 text-lg py-3"
                  />
                  <TrendingUp className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <Button
                onClick={calculateROI}
                disabled={isCalculating}
                className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Calculating...
                  </>
                ) : (
                  <>
                    Calculate My ROI
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </div>

            {/* Results Section */}
            <div className="space-y-6 animate-fade-in-up delay-500">
              <h3 className="font-semibold text-xl mb-6 flex items-center">
                <div className="w-2 h-6 bg-black rounded-full mr-3"></div>
                Your Projected Results with AI
              </h3>

              {results ? (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-black rounded-lg">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">New Engagement Rate</span>
                      </div>
                      <span className="text-2xl font-bold text-black">{results.newEngagement}%</span>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-black rounded-lg">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Monthly Leads</span>
                      </div>
                      <span className="text-2xl font-bold text-black">{results.newLeads}</span>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-black rounded-lg">
                          <DollarSign className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Additional Revenue</span>
                      </div>
                      <span className="text-2xl font-bold text-black">
                        ${results.additionalRevenue.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-black to-gray-800 rounded-2xl border-2 border-black shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    <div className="text-center relative z-10">
                      <div className="text-4xl font-bold text-white mb-3 animate-pulse">{results.totalROI}%</div>
                      <div className="text-white font-semibold text-lg mb-2">Total ROI Increase</div>
                      <div className="text-gray-300 text-sm">
                        Monthly Profit:{" "}
                        <span className="text-white font-semibold">${results.monthlyProfit.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 text-center italic">
                    *Calculations based on average client results and industry benchmarks
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-12 animate-fade-in-up">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-100 rounded-full blur-xl animate-pulse"></div>
                    <Calculator className="relative h-16 w-16 mx-auto mb-6 text-gray-300" />
                  </div>
                  <p className="text-lg">
                    Enter your metrics and click "Calculate My ROI" to see your projected results
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
