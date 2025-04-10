
import React from "react";
import { HomeHeader } from "@/components/home/HomeHeader";
import { StatCards } from "@/components/home/StatCards";
import { CompetitorActivity } from "@/components/home/CompetitorActivity";
import { QuickAccess } from "@/components/home/QuickAccess";

export default function Index() {
  return (
    <div className="space-y-6">
      <HomeHeader />
      <StatCards />
      <div className="grid gap-6 md:grid-cols-2">
        <CompetitorActivity />
        <QuickAccess />
      </div>
    </div>
  );
}
