/* eslint-disable react/no-array-index-key */
"use client";

import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSEL_ITEMS } from "@/lib/constants";

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="relative w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem key={index} className="relative">
            <div
              className="relative aspect-[3/1] max-h-[600px] w-full overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-4 text-center text-white sm:space-y-4">
                <Badge variant="secondary" className="text-xs font-medium tracking-wider sm:text-sm">{item.label}</Badge>
                <h2 className="max-w-2xl px-4 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-2 hidden text-sm text-white/90 sm:block sm:text-base md:text-lg">{item.description}</p>
                <Button
                  asChild
                  className="mt-4 bg-white px-4 py-1 text-xs text-black hover:bg-white/90 sm:px-6 sm:py-2 sm:text-sm md:px-8 md:py-2"
                >
                  <Link href={item.buttonLink}>{item.buttonText}</Link>
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center space-x-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm sm:bottom-4 sm:right-4 sm:text-sm">
                <InfoIcon aria-hidden className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{item.credit}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1 sm:bottom-4 sm:gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-1 w-1 rounded-full transition-all sm:h-2 sm:w-2 ${
              index === current ? "scale-125 bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <CarouselPrevious className="left-1 h-6 w-6 bg-white/20 text-white hover:bg-white/40 sm:left-4 sm:h-8 sm:w-8" />
      <CarouselNext className="right-1 h-6 w-6 bg-white/20 text-white hover:bg-white/40 sm:right-4 sm:h-8 sm:w-8" />
    </Carousel>
  );
}
