"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Calendar, Heart, MessageCircle, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Features", id: "features" },
            { name: "Community", id: "testimonials" },
            { name: "Join Us", id: "contact" }
          ]}
          brandName="AnimeHub"
          button={{
            text: "Join Community",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Connect with Fellow Anime Lovers"
          description="Join our vibrant community of anime and manga enthusiasts. Share your thoughts, discover new series, and connect with fans worldwide."
          tag="Community Platform"
          tagIcon={Users}
          buttons={[
            {
              text: "Join Community",
              href: "contact"
            },
            {
              text: "Explore Features",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7887722/pexels-photo-7887722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Connect & Discuss"
          description="Everything you need to engage with the anime community"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Discussion Forums",
              description: "Join topic-based discussions about your favorite anime series, characters, and episodes with fellow fans.",
              icon: MessageCircle
            },
            {
              title: "Manga Reviews",
              description: "Share and read detailed reviews of the latest manga releases and classic series.",
              icon: BookOpen
            },
            {
              title: "Episode Tracking",
              description: "Keep track of your watching progress and get notifications for new episode releases.",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Community Love"
          description="What our anime community members are saying"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sakura Chen",
              role: "Anime Reviewer",
              company: "Tokyo Otaku",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/33131836/pexels-photo-33131836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Alex Rodriguez",
              role: "Manga Enthusiast",
              company: "Weekly Reader",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34418425/pexels-photo-34418425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Yuki Tanaka",
              role: "Community Moderator",
              company: "AnimeHub",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2014875/pexels-photo-2014875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Emma Wilson",
              role: "Cosplay Artist",
              company: "Convention Pro",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/13967060/pexels-photo-13967060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Us"
          tagIcon={Star}
          title="Ready to Join Our Community?"
          description="Sign up to connect with thousands of anime and manga fans, share your thoughts, and discover your next favorite series."
          inputPlaceholder="Enter your email"
          buttonText="Join Now"
          termsText="By joining you agree to our community guidelines and terms of service."
          imageSrc="https://images.pexels.com/photos/18403859/pexels-photo-18403859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Community",
              items: [
                { label: "Discussion Forums", href: "forums" },
                { label: "Member Directory", href: "members" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Content",
              items: [
                { label: "Anime Reviews", href: "anime" },
                { label: "Manga Reviews", href: "manga" },
                { label: "News & Updates", href: "news" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "help" },
                { label: "Community Guidelines", href: "guidelines" },
                { label: "Contact Us", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | AnimeHub Community"
        />
      </div>
    </ThemeProvider>
  );
}