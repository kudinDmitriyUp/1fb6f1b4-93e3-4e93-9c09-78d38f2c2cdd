"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Award, Mail, MapPin, Phone, Sparkles, Star, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="noiseDiagonalGradient"
      cardStyle="noise-gradient"
      primaryButtonStyle="outline"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Jersey Store"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Premium Football Jerseys"
          description="Authentic, high-quality jerseys from the world's greatest football brands. Elevate your game with legendary styles."
          tag="New Collection"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "View Catalog" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816563724-4jeqtbgd.jpg",
              imageAlt: "football, sport, play, competition, athlete, field, soccer"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816564404-m01ei3b7.jpg",
              imageAlt: "football, sport, play, competition, athlete, field, soccer"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816565178-6ehsga4c.jpg",
              imageAlt: "american football, athlete, ball, football, player, football player"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816565899-1xokwgo5.jpg",
              imageAlt: "football, sport, play, competition, athlete, field, soccer"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816566818-9lz66fz0.jpg",
              imageAlt: "american football, athlete, ball, football, player, football player"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816567369-x4jpp0b8.jpg",
              imageAlt: "football, sport, play, competition, athlete, field, soccer"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Collection"
          description="Browse our extensive selection of premium football jerseys from the biggest brands and teams worldwide."
          products={[
            {
              id: "1",
              name: "Classic Black Jersey",
              price: "$79.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816567959-j27mwfbs.jpg",
              imageAlt: "american football, athlete, ball, football, player, football player"
            },
            {
              id: "2",
              name: "White Stripe Edition",
              price: "$84.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816568830-uzu9a1ji.jpg",
              imageAlt: "american football, american football officials, referees, referee"
            },
            {
              id: "3",
              name: "Gold Trim Premium",
              price: "$99.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816569467-c556fic6.jpg",
              imageAlt: "american football, athlete, ball, football, player, football player"
            },
            {
              id: "4",
              name: "Vintage Retro Jersey",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816570069-snpa24z2.jpg",
              imageAlt: "american football, athlete, ball, football, player, football player"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Your Jersey Destination"
          description="Founded in 2015, Jersey Store has become the trusted source for authentic football jerseys. We curate the finest collection from legendary brands and teams, delivering premium quality to fans and athletes worldwide. Every jersey is carefully selected and authenticated to ensure you get exactly what you're looking for."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816577084-si4jcabq.jpg"
          imageAlt="Jersey Store team"
          imagePosition="right"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More" },
            { text: "Contact Us" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose Jersey Store"
          description="Trusted by thousands of football enthusiasts and collectors"
          metrics={[
            {
              id: "1",
              icon: Award,
              title: "Happy Customers",
              value: "50K+"
            },
            {
              id: "2",
              icon: Zap,
              title: "Fast Shipping",
              value: "24-48h"
            },
            {
              id: "3",
              icon: Shield,
              title: "Authentic",
              value: "100%"
            },
            {
              id: "4",
              icon: Star,
              title: "Rated 4.9",
              value: "Stars"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Customer Love"
          description="Hear what our customers say about their experience"
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson, Football Collector",
              date: "Date: 15 January 2024",
              title: "Best Jersey Source Online",
              quote: "I have been collecting jerseys for years and Jersey Store offers the best selection and authenticity I have found. Their customer service is exceptional and shipping is incredibly fast.",
              tag: "Verified Buyer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816570663-yiqsn3eb.jpg",
              avatarAlt: "Marcus Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816574084-1sd1pqm0.jpg",
              imageAlt: "happy customer wearing sports jersey"
            },
            {
              id: "2",
              name: "Sarah Williams, Sports Enthusiast",
              date: "Date: 22 December 2023",
              title: "Authentic and Affordable",
              quote: "Quality is outstanding and prices are fair. I ordered a vintage jersey and it exceeded my expectations. Will definitely be a repeat customer.",
              tag: "Verified Buyer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816571538-k11n43gp.jpg",
              avatarAlt: "Sarah Williams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816574985-sjg2wka3.jpg",
              imageAlt: "satisfied athlete in uniform"
            },
            {
              id: "3",
              name: "David Chen, Team Fan",
              date: "Date: 8 November 2023",
              title: "Premium Selection",
              quote: "Jersey Store has everything I need. From classic vintage pieces to the latest releases, their inventory is unmatched. Highly recommend.",
              tag: "Verified Buyer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816572618-ixssx2le.jpg",
              avatarAlt: "David Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816575597-16zszz3i.jpg",
              imageAlt: "fan wearing football jersey"
            },
            {
              id: "4",
              name: "Emma Rodriguez, Long-time Customer",
              date: "Date: 30 October 2023",
              title: "Exceptional Service Every Time",
              quote: "Five stars all the way. The team goes above and beyond to ensure customer satisfaction. Packaging is excellent and delivery is lightning fast.",
              tag: "Verified Buyer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816573408-ollwa1wy.jpg",
              avatarAlt: "Emma Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816576276-kkyf0n69.jpg",
              imageAlt: "person happy sports team jersey"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We partner with the biggest names in football and sports to bring you authentic merchandise"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816578147-110t87rs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816578785-9zx6plgl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816579432-dd49drko.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816580036-4y6zrvit.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816580934-ci7ohpc1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816581496-fa0komxq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36tAF3qMvze0yLCniNm13BmDdDd/uploaded-1765816582319-npy7nxq5.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
          tag="Help Center"
          faqs={[
            {
              id: "1",
              title: "How do I know if a jersey is authentic?",
              content: "All jerseys sold on Jersey Store are 100% authentic. We verify every item through official brand partnerships and authentication protocols. We provide a certificate of authenticity with premium purchases."
            },
            {
              id: "2",
              title: "What are your shipping times?",
              content: "Standard shipping takes 3-5 business days. Express shipping is available for 24-48 hour delivery. All orders are tracked and insured. Free shipping on orders over $150."
            },
            {
              id: "3",
              title: "How do I find my correct size?",
              content: "Each product page includes a detailed size chart. Jersey sizes vary by brand, so we recommend checking the specific brand's sizing guide. Contact our customer service team if you need personalized assistance."
            },
            {
              id: "4",
              title: "Do you offer returns or exchanges?",
              content: "Yes, we offer a 30-day return policy on all items. Jerseys must be unworn and in original packaging. Exchanges are free, and return shipping is covered for defective items."
            },
            {
              id: "5",
              title: "Can I customize or monogram jerseys?",
              content: "Some of our premium jerseys offer customization options. Check the product page for availability. Custom orders typically take 7-10 business days for delivery."
            },
            {
              id: "6",
              title: "How do you handle payment security?",
              content: "We use industry-standard SSL encryption and PCI compliance. All payment information is secured through trusted payment processors. Your data is never stored directly on our servers."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Join our mailing list for exclusive drops and special offers"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Jersey Store"
          title="Your Premier Source for Authentic Football Jerseys"
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Jerseys", href: "#products" },
                { label: "New Arrivals", href: "#products" },
                { label: "Best Sellers", href: "#products" },
                { label: "Vintage Collection", href: "#products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Shipping Info", href: "#faq" },
                { label: "Returns", href: "#faq" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Mail, text: "support@jerseystore.com" },
            { icon: Phone, text: "+1 (555) 123-4567" },
            { icon: MapPin, text: "123 Sports Avenue, Athletic City, AC 12345" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}