"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-body selection:bg-lavender-light selection:text-plum font-sans">
      {/* SECTION 1: Announcement Bar */}
      <AnnouncementBar />

      {/* SECTION 2: Sticky Desktop & Tablet Navigation */}
      <DesktopNavigation onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Mobile Sliding Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Website Page Content */}
      <main className="flex-1">{children}</main>

      {/* SECTION 17: Full Light-Theme Spiritual Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Booking Helper */}
      <WhatsAppButton />
    </div>
  );
}
