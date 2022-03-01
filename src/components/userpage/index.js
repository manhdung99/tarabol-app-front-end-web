import React from "react";
import Header from "../header";
import Introduction from "./Introduction";
import RecentlySection from "./recentlySection";
import TrendingSection from "./trendingSection";
import RecommendedSection from "./recomendedSection";
import Footer from "../footer";
export default function UserPage() {
  return (
    <div className="bg-[F6F7FB]">
      <Header />
      <Introduction />
      <RecentlySection />
      <TrendingSection />
      <RecommendedSection />
      <Footer />
    </div>
  );
}
