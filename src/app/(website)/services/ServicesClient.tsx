"use client";

import { Service } from "@/types";
import { ServiceCarousel } from "@/components/services/ServiceCarousel";

interface ServicesClientProps {
  initialServices: Service[];
}

export function ServicesClient({ initialServices }: ServicesClientProps) {
  return (
    <div className="space-y-10">
      <ServiceCarousel services={initialServices} />
    </div>
  );
}
