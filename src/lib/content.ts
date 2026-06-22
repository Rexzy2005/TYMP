import { images } from "./assets";

/* ---------------------------------------------------------------------------
   Navigation
--------------------------------------------------------------------------- */
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Episodes", href: "#episodes" },
  { label: "Hosts", href: "#hosts" },
  { label: "Pricing", href: "#pricing" },
];

export const navCta = { label: "Subscribe", href: "#newsletter" };

/* ---------------------------------------------------------------------------
   Hero
--------------------------------------------------------------------------- */
export const hero = {
  title: "Turn Ideas Into \nEpisodes, Dreams \nInto Reality",
  subtitle:
    "Check out some awesome podcasts packed with cool stories and insights. You might just find your new favorite!",
  primaryCta: { label: "Start Listening", href: "#episodes" },
  secondaryCta: { label: "Browse Episodes", href: "#episodes" },
  listenersBadge: {
    value: "20M+",
    label: "Online Listeners",
  },
  podcastCard: {
    title: "The Curious Mind Podcast",
    host: "Kristin Watson",
  },
  statsCard: {
    value: "150K",
    label: "Episode Available",
  },
};

/* ---------------------------------------------------------------------------
   Episodes
--------------------------------------------------------------------------- */
export const episodes = [
  {
    number: "Episode 02",
    title: "Cool Side Hustles That Became \nMillion-Dollar Successes",
    host: "Max Hudson",
    category: "Personal Development",
    duration: "90 mins",
    image: images.episodeOne,
  },
  {
    number: "Episode 01",
    title: "Mindful Growth in Everyday Life",
    host: "Max Hudson",
    category: "Mental Health, Personal Development",
    duration: "1 hr 24 mins",
    image: images.episodeTwo,
  },
  {
    number: "Episode 03",
    title: "The Art of Deep Work",
    host: "Ethan Carter",
    category: "Personal Development",
    duration: "45 mins",
    image: images.episodeThree,
  },
  {
    number: "Episode 11",
    title: "The Dopamine Experiment",
    host: "Max Hudson",
    category: "Science and Nature",
    duration: "30 mins",
    image: images.episodeFour,
  },
];

export const episodesHeader = {
  title: "Discover the Latest Episodes \nand Featured Highlights",
};

export const episodesCta = { label: "Browse More Episodes", href: "#episodes" };

/* ---------------------------------------------------------------------------
   Discovery (Listen Now) + Stats
--------------------------------------------------------------------------- */
export const discovery = {
  badge: "Discover the Journey Behind Us",
  title: "Discover the Passion Behind \nOur Podcast Journey",
  body:
    "We're dedicated to uniting people through our engaging podcasts, where we share incredible stories and showcase a diverse range of voices.",
  bullets: ["Personalized playlists", "Awesome audio streaming vibes!"],
  cta: { label: "Learn More", href: "#episodes" },
  image: images.discovery,
};

export const stats = [
  { value: "150", suffix: "K+", label: "Episode released" },
  { value: "12", suffix: "M+", label: "Online subscriber" },
  { value: "20", suffix: "M+", label: "Worldwide Listeners" },
];

export const listenOn = [
  { name: "Google Podcasts", icon: images.listenGoogle },
  { name: "Spotify", icon: images.listenSpotify },
  { name: "Apple Podcasts", icon: images.listenApple },
  { name: "Pocket Casts", icon: images.listenPocket },
];

/* ---------------------------------------------------------------------------
   Categories
--------------------------------------------------------------------------- */
export const categoriesHeader = {
  title: "Discover Podcasts That \nMatch Your Mood!",
  cta: { label: "Browse All Categories", href: "#" },
};

export const categories = [
  {
    title: "Technology",
    count: "378 Episode Available",
    description:
      "Take a peek at the latest tech trends and awesome digital goodies.",
    listeners: "20M+ Listeners",
    icon: "tech",
    layout: "large",
  },
  {
    title: "Comedy",
    count: "378 Episode Available",
    listeners: "20M+ Listeners",
    icon: "comedy",
    layout: "regular",
  },
  {
    title: "Design and Development",
    count: "378 Episode Available",
    listeners: "20M+ Listeners",
    icon: "design",
    layout: "regular",
  },
  {
    title: "Health & Fitness",
    count: "158 Episode Available",
    listeners: "20M+ Listeners",
    icon: "health",
    layout: "regular",
  },
  {
    title: "Business",
    count: "402 Episode Available",
    listeners: "20M+ Listeners",
    icon: "business",
    layout: "regular",
  },
  {
    title: "Education",
    count: "694 Episode Available",
    description:
      "Grow with insightful talks on science, philosophy, and productivity.",
    listeners: "20M+ Listeners",
    icon: "education",
    layout: "large",
  },
];

/* ---------------------------------------------------------------------------
   Features
--------------------------------------------------------------------------- */
export const features = [
  {
    icon: "headphones",
    title: "Seamless Streaming",
    text: "Enjoy your music anywhere, anytime! Whether at home, commuting, or relaxing in the park, let the tunes lift your spirits!",
  },
  {
    icon: "bell",
    title: "Episode Notifications",
    text: "Stay updated with your favorite podcasts! Click subscribe for instant alerts on new episodes and enjoy your listening experience!",
  },
  {
    icon: "volume",
    title: "High-Quality Audio",
    text: "Get ready for awesome sound that totally amps up your music and podcasts! This setup makes every tune and episode unforgettable.",
  },
];

export const featuresHeader = {
  eyebrow: "Core Features",
  title: "Features That Enhance Your \nListening Experience",
  body: "Hello there! Dive into these amazing features designed to elevate your listening experience to new heights! Enjoy personalized recommendations tailored just for you, and take your favorite tunes offline so you can jam out anywhere, anytime!",
  cta: { label: "Browse Episodes", href: "#episodes" },
};

export const featuresRight = {
  squiggle: images.featureBadge,
  photo: images.featurePhoto,
  subscriberCount: "12M+ Subscriber",
  subscriberAvatars: [images.clientOne, images.clientTwo],
  availabilityLabel: "Available on",
  availabilityIcons: [
    { name: "Google Podcasts", icon: images.listenGoogle },
    { name: "Spotify", icon: images.listenSpotify },
    { name: "Apple Podcasts", icon: images.listenApple },
    { name: "Pocket Casts", icon: images.listenPocket },
  ],
};

export const featureReview = {
  rating: 4.9,
  reviewer: "User Subscriber",
  count: "120k+ Subscriber",
  reviewers: [
    { initials: "AB", color: "bg-podhub-orange" },
    { initials: "CD", color: "bg-podhub-apple" },
    { initials: "EF", color: "bg-podhub-pocket" },
  ],
};

/* ---------------------------------------------------------------------------
   Testimonials
--------------------------------------------------------------------------- */
export const testimonial = {
  quote:
    "These podcasts are fantastic! They keep me informed and entertained during my commute, and the variety ensures I always have something new to listen to.",
  author: "Kristin Walton",
  role: "Services Manager",
  initials: "PP",
  sideAvatars: [
    { initials: "MS", color: "bg-podhub-orange" },
    { initials: "JT", color: "bg-podhub-apple" },
    { initials: "RA", color: "bg-podhub-pocket" },
  ],
  image: images.clientOne,
};

export const testimonialHeader = {
  eyebrow: "Testimonials",
  title: "Stories from Our Awesome Listeners",
  body:
    "We are proud of the work we have done. The biggest achievement is hearing how our shows fit into your everyday life.",
};

/* ---------------------------------------------------------------------------
   Hosts
--------------------------------------------------------------------------- */
export const hosts = [
  {
    name: "Maya Hudson",
    role: "Documentary Maker",
    image: images.clientOne,
    socials: ["x", "instagram", "youtube", "tiktok"],
  },
  {
    name: "Ethan Carter",
    role: "Tech Analyst & Podcast Host",
    image: images.clientTwo,
    socials: ["x", "instagram", "youtube", "tiktok"],
  },
  {
    name: "Mason Clarke",
    role: "Health & Wellness Coach",
    image: images.clientThree,
    socials: ["x", "instagram", "youtube", "tiktok"],
  },
];

export const hostsHeader = {
  eyebrow: "Meet The Team",
  title: "Meet Our Hosts That Make Every Story Shine",
  body:
    "Our hosts bring unique voices, backgrounds, and beats to the platform - each one a different doorway into the world of audio.",
};

export const hostsCta = { label: "Browse All Hosts", href: "#hosts" };

/* ---------------------------------------------------------------------------
   Pricing
--------------------------------------------------------------------------- */
export const plans = [
  {
    name: "Individual Plan",
    price: "Free",
    cta: { label: "Start Listening with Subscribe", href: "#newsletter" },
    perks: [
      "Basic audio quality",
      "Access to all free podcasts",
      "Create and save playlists",
    ],
  },
  {
    name: "Professional Plan",
    price: "$9.99",
    badge: "Most Popular",
    cta: { label: "Start Listening with Subscribe", href: "#newsletter" },
    featured: true,
    perks: ["Ad-free listening", "High-quality audio", "Early access to new episodes"],
  },
  {
    name: "Premium Plan",
    price: "$19.99",
    cta: { label: "Start Listening with Subscribe", href: "#newsletter" },
    perks: [
      "Exclusive content and podcasts",
      "Access to live podcast events",
      "Priority support",
    ],
  },
];

export const pricingHeader = {
  eyebrow: "Pricing",
  title: "Upgrade Your Listening Today",
  body:
    "We have a few plans our offer listening and managing the access and start is grab free plan and unlock the full PodHub library.",
};

/* ---------------------------------------------------------------------------
   Blog
--------------------------------------------------------------------------- */
export const posts = [
  {
    title: "Breaking Down the Headlines: Best Podcasts for Current Affairs",
    category: "Trending",
    featured: true,
    image: images.episodeOne,
  },
  {
    title: "The Ultimate Guide to Finding Your Perfect Podcast",
    category: "Tips & Tricks",
    featured: false,
    image: images.episodeTwo,
  },
  {
    title: "Essential Podcast Apps and Tools for Every Listener",
    category: "Tools",
    featured: false,
    image: images.episodeThree,
  },
];

export const blogHeader = {
  eyebrow: "Our Blog",
  title: "Stay Updated with Our Blogs",
  body:
    "Discover insights, tips, and the latest trends in the world of audio - handpicked for curious listeners and creators alike.",
};

export const blogCta = { label: "Browse More Blogs", href: "#" };

/* ---------------------------------------------------------------------------
   Newsletter
--------------------------------------------------------------------------- */
export const newsletter = {
  eyebrow: "Newsletter",
  title: "Stay Updated and Subscribe to Our Newsletter!",
  body:
    "Stay ahead of our newsletter for the latest updates, exclusive podcast drops, and creator stories - delivered straight to your inbox.",
  cta: { label: "Subscribe", href: "#" },
  subscriberCount: "4,824",
  subscriberAvatars: [
    { initials: "AB", color: "bg-podhub-orange" },
    { initials: "CD", color: "bg-podhub-apple" },
    { initials: "EF", color: "bg-podhub-pocket" },
    { initials: "GH", color: "bg-podhub-success" },
  ],
};

/* ---------------------------------------------------------------------------
   Footer
--------------------------------------------------------------------------- */
export const footer = {
  tagline:
    "Your home for podcasts, playlists, and creator spotlights - built for the way you actually listen.",
  socials: [
    { name: "Instagram", href: "#" },
    { name: "X", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Spotify", href: "#" },
  ],
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Newsletters", href: "#" },
        { label: "Blog & Articles", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Episodes", href: "#episodes" },
        { label: "Hosts", href: "#hosts" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Address",
      links: [
        { label: "hello@podhub.io", href: "mailto:hello@podhub.io" },
        { label: "+1 (555) 230-4509", href: "tel:+15552304509" },
        { label: "1428 Maple Drive, Tampa", href: "#" },
        { label: "FL 33602", href: "#" },
      ],
    },
  ],
  copyright: "© Copyright 2026 - All Rights Reserved.",
};
