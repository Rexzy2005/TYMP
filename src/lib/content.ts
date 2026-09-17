import { images } from "./assets";

/* ---------------------------------------------------------------------------
   About Story
--------------------------------------------------------------------------- */
export const aboutStory = {
  heading: "Inspired to Make a Difference",
  body:
    "We're driven by a love for storytelling, connecting people through meaningful conversations and inspiring ideas that matter.",
  cards: [
    {
      title: "Our Story",
      text: "TYMP started with a passion for podcasts, aiming to connect storytellers and listeners in one vibrant community.",
    },
    {
      title: "Our Mission",
      text: "Our mission is to make podcasting easy for everyone. We help podcasters share their ideas and offer listeners great content.",
    },
    {
      title: "Our Vision",
      text: "At TYMP, we aim to create a space where podcasts connect people and inspire creativity while amplifying diverse voices.",
    },
    {
      title: "Our Value",
      text: "At TYMP, we're all about bringing people together and sparking creativity with some really cool podcasts.",
    },
  ],
  highlight: {
    title: "Over 150K+ Podcast Topics Covered",
    text: "Looking for a podcast that matches your vibe? We've got laughs, tech, health, and more!",
    cta: { label: "Browse Topics", href: "#episodes" },
  },
};

/* ---------------------------------------------------------------------------
   About Approach
--------------------------------------------------------------------------- */
export const aboutApproach = {
  title: "Our Approach",
  body: "At TYMP, we focus on making podcasts simple and inclusive, using innovative technology to connect creators and listeners worldwide.",
  heading: "Where Every Story Finds an Audience",
  features: [
    { title: "Cross-Platform Syncing", text: undefined },
    { title: "Podcast Sharing", text: undefined },
    { title: "User Playlists", text: undefined },
    {
      title: "Multi-Language Support",
      text: "Enjoy content in multiple languages with ease. Switch seamlessly and explore a diverse range of stories.",
    },
    { title: "Exclusive Content", text: undefined },
  ],
};

/* ---------------------------------------------------------------------------
   About Features (full-bleed: heading + photo + 3 cards)
--------------------------------------------------------------------------- */
export const aboutFeatures = {
  title: "Features That Enhance Your\nListening Experience",
  body: "Hello there! Dive into these amazing features designed to elevate your listening experience to new heights! Enjoy personalized recommendations tailored just for you, and take your favorite tunes offline so you can jam out anywhere, anytime!",
  cta: { label: "Browse Episodes", href: "#episodes" },
  photo: images.featurePhoto,
  squiggle: images.featureBadge,
  bgShape: images.featureBg,
  underline: images.featuresLine,
  subscriberCount: "12M+ Subscriber",
  subscriberAvatars: [images.clientOne, images.clientTwo],
  availabilityLabel: "Available on",
  availabilityIcons: [
    { name: "Google Podcasts", icon: images.listenGoogle },
    { name: "Spotify", icon: images.listenSpotify },
    { name: "Apple Podcasts", icon: images.listenApple },
    { name: "Pocket Casts", icon: images.listenPocket },
  ],
  cards: [
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
  ],
};

/* ---------------------------------------------------------------------------
   About (mission/values block)
--------------------------------------------------------------------------- */
export const aboutBlock = {
  pill: "Discover the Journey Behind Us",
  title: "Discover the Passion Behind\nOur Podcast Journey",
  body: "We're dedicated to uniting people through our engaging podcasts, where we share incredible stories and showcase a diverse range of voices.",
  bullets: [
    "Personalized playlists",
    "Awesome audio streaming vibes!",
    "Featured Episodes & Highlights",
  ],
  image: images.discovery,
};

/* ---------------------------------------------------------------------------
   About Hosts (about-page header copy)
--------------------------------------------------------------------------- */
export const aboutHostsHeader = {
  title: "Meet Our Team That Make\nEvery Story Special",
};

export const aboutHostsCta = { label: "Show Our All Team", href: "/hosts" };

/* ---------------------------------------------------------------------------
   About Hero
--------------------------------------------------------------------------- */
export const aboutHero = {
  title: "Get to Know TYMP Amplifying\nIdeas and Inspiring Minds",
  subtitle:
    "Hey there! Join our newsletter for the latest updates, fun podcast recommendations, and some awesome content delivered straight to your inbox!",
  cta: { label: "Start Listening", href: "#newsletter" },
  glassPill: "Discover the Journey Behind Us",
  image: images.aboutHero,
  stats: [
    { value: "150", suffix: "K+", label: "Episode released" },
    { value: "12", suffix: "M+", label: "Online subscriber" },
    { value: "20", suffix: "M+", label: "Worldwide Listeners" },
  ],
};

/* ---------------------------------------------------------------------------
   Navigation
--------------------------------------------------------------------------- */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Episodes", href: "/episodes" },
  { label: "Hosts", href: "/hosts" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

export const navCta = { label: "Subscribe", href: "/#newsletter" };

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
export const allEpisodes = [
  {
    id: "ep-01",
    number: "Episode 01",
    title: "Mindful Growth in Everyday Life",
    host: "Max Hudson",
    category: "Mental Health, Personal Development",
    duration: "1 hr 24 mins",
    date: "Apr 8, 2025",
    image: "/assets/episodes/ep_1.jpg",
    heroImage: "/assets/episodes/details_hero.jpg",
  },
  {
    id: "ep-02",
    number: "Episode 02",
    title: "Cool Side Hustles That Became Million-Dollar Successes",
    host: "Max Hudson",
    category: "Personal Development",
    duration: "90 mins",
    date: "May 08, 2025",
    image: "/assets/episodes/ep_2.jpg",
    heroImage: "/assets/episodes/hero_ep_2.jpg",
  },
  {
    id: "ep-11",
    number: "Episode 11",
    title: "The Dopamine Experiment",
    host: "Max Hudson",
    category: "Science and Nature",
    duration: "30 mins",
    date: "April 29, 2025",
    image: "/assets/episodes/ep_3.jpg",
    heroImage: "/assets/episodes/hero_ep_11.jpg",
  },
  {
    id: "ep-03",
    number: "Episode 03",
    title: "The Art of Deep Work",
    host: "Ethan Carter",
    category: "Personal Development",
    duration: "45 mins",
    date: "April 21, 2025",
    image: "/assets/episodes/ep_4.jpg",
    heroImage: "/assets/episodes/hero_ep_3.jpg",
  },
  {
    id: "ep-04",
    number: "Episode 04",
    title: "The Science Behind Better Sleep",
    host: "Ethan Carter",
    category: "Health & Wellness",
    duration: "1 hr",
    date: "April 15, 2025",
    image: "/assets/episodes/ep_5.jpg",
    heroImage: "/assets/episodes/hero_ep_4.jpg",
  },
  {
    id: "ep-05",
    number: "Episode 05",
    title: "Patterns of the Universe",
    host: "Mason Clarke",
    category: "Science and Nature",
    duration: "1 hr 00 min",
    date: "April 07, 2025",
    image: "/assets/episodes/ep_6.jpg",
    heroImage: "/assets/episodes/hero_ep_5.jpg",
  },
  {
    id: "ep-06",
    number: "Episode 06",
    title: "Diving into True Crime Stories",
    host: "Mason Clarke",
    category: "True Crime, Investigation",
    duration: "1 hr 24 mins",
    date: "March 29, 2025",
    image: "/assets/episodes/ep_7.jpg",
    heroImage: "/assets/episodes/hero_ep_6.jpg",
  },
  {
    id: "ep-07",
    number: "Episode 07",
    title: "Sarcasm Served Fresh Daily",
    host: "James Reynolds",
    category: "True Crime, Investigation",
    duration: "1 hr 24 mins",
    date: "March 18, 2025",
    image: "/assets/episodes/ep_8.jpg",
    heroImage: "/assets/episodes/hero_ep_7.jpg",
  },
];

export const episodes = allEpisodes.slice(0, 4);

export const episodesCategories = [
  "Episodes Category",
  "All",
  "Mental Health",
  "Personal Development",
  "Science and Nature",
  "Health & Wellness",
  "True Crime, Investigation",
];

export const episodesHeader = {
  title: "Take a Look at All the \nEpisodes Here!",
  subtitle:
    "Dive into an extensive collection of podcasts covering diverse topics. From insightful conversations to thrilling storytelling, discover episodes that inspire, entertain, and inform.",
};

export const episodesCta = { label: "Load More Topics", href: "/episodes" };

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
    "These podcasts are fantastic! They cover a variety of topics, making each episode exciting. Can't wait for the next one!",
  author: "Kristin Watson",
  role: "Marketing Specialist",
  initials: "KW",
  sideAvatars: [
    { initials: "MS", color: "bg-podhub-orange" },
    { initials: "JT", color: "bg-podhub-apple" },
    { initials: "RA", color: "bg-podhub-pocket" },
  ],
  image: images.clientOne,
};

export const testimonials = [
  {
    quote:
      "These podcasts are fantastic! They cover a variety of topics, making each episode exciting. Can't wait for the next one!",
    author: "Kristin Watson",
    role: "Marketing Specialist",
    image: images.testimonialImage,
  },
  {
    quote:
      "Every episode feels carefully made. I always leave with a fresh idea, a better mood, or a story worth sharing.",
    author: "Ronald Richard",
    role: "Expert Product Designer",
    image: images.testimonialRonald,
  },
  {
    quote:
      "PodHub is part of my morning routine. The hosts make complex topics feel clear, warm, and easy to enjoy.",
    author: "Maya Hudson",
    role: "Documentary Maker",
    image: images.testimonialMaya,
  },
  {
    quote:
      "The recommendations are spot on. I found three new shows in one week, and now my commute feels genuinely useful.",
    author: "Mason Clarke",
    role: "Wellness Coach",
    image: images.testimonialMason,
  },
];

export const testimonialHeader = {
  eyebrow: "Testimonials",
  title: "Stories from Our Awesome Listeners",
  body:
    "Our listeners share how they’ve connected with our stories and found value in every episode.",
};

/* ---------------------------------------------------------------------------
   Hosts
--------------------------------------------------------------------------- */
export const hosts = [
  {
    name: "Max Hudson",
    role: "Documentary Maker",
    image: images.hostOne,
    socials: ["x", "instagram", "youtube", "tiktok"],
  },
  {
    name: "Ethan Carter",
    role: "Tech Analyst & Podcast Host",
    image: images.hostTwo,
    socials: ["x", "instagram", "youtube", "tiktok"],
  },
  {
    name: "Mason Clarke",
    role: "Health & Wellness Coach",
    image: images.hostThree,
    socials: ["x", "instagram", "youtube", "tiktok"],
  },
];

export const hostsHeader = {
  eyebrow: "Meet The Team",
  title: "Meet Our Hosts That Make Every Story Shine",
  body:
    "Our hosts bring unique voices, backgrounds, and beats to the platform - each one a different doorway into the world of audio.",
};

export const hostsCta = { label: "Show Our All Hosts", href: "/hosts" };

/* Full roster shown on the dedicated /hosts team page. */
export const teamMembers = [
  {
    name: "Max Hudson",
    role: "Documentary Maker",
    image: images.hostOne,
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Ethan Carter",
    role: "Tech Analyst & Podcast Host",
    image: images.hostTwo,
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Mason Clarke",
    role: "Health & Wellness Coach",
    image: images.hostThree,
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "James Reynolds",
    role: "Business Entrepreneur",
    image: "/assets/episodes/guest_jacob.jpg",
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Benjamin Scott",
    role: "Sports Commentator Analyst",
    image: "/assets/episodes/ep_5.jpg",
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Ryan Mitchell",
    role: "Science and Nature Host",
    image: "/assets/episodes/ep_7.jpg",
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Alex Hayes",
    role: "Digital Marketing Expert",
    image: "/assets/episodes/guest_howard.jpg",
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Noah Bennett",
    role: "AI & Innovation Specialist",
    image: "/assets/episodes/ep_8.jpg",
    socials: ["x", "instagram", "threads"],
  },
  {
    name: "Jack Thompson",
    role: "Motivational Speaker",
    image: "/assets/episodes/ep_1.jpg",
    socials: ["x", "instagram", "threads"],
  },
];

export const teamPageHeader = {
  eyebrow: "Meet The Team",
  title: "Meet Our Team\nThe People Behind our Success",
  highlight: "Behind our",
  body:
    "Discover the vibrant storytellers and experts behind TYMP. Our hosts engage in lively discussions, sharing insights and humor on a variety of topics. Whether you seek inspiration or entertainment, their voices will keep you captivated.",
};

/* ---------------------------------------------------------------------------
   Pricing
--------------------------------------------------------------------------- */
export const plans = [
  {
    name: "Individual Plan",
    price: "Free",
    description:
      "Enjoy ad-free music and offline playlists with one easy account!",
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
    description:
      "Get rid of ads, download stuff offline, and manage your account like a pro!",
    cta: { label: "Start Listening with Subscribe", href: "#newsletter" },
    featured: true,
    perks: ["Ad-free listening", "High-quality audio", "Early access to new episodes"],
  },
  {
    name: "Premium Plan",
    price: "$19.99",
    description:
      "Get all the cool perks with just one account, like no ads and offline listening.",
    cta: { label: "Start Listening with Subscribe", href: "#newsletter" },
    perks: [
      "All advanced features",
      "Exclusive content and podcasts",
      "Access to live podcast events",
    ],
  },
];

export const pricingHeader = {
  eyebrow: "Pricing",
  title: "Upgrade Your Listening Today",
  body:
    "Pick a plan that suits your vibe! Whether you're looking for free access or want to grab some cool premium perks, we’ve got your back!",
};

/* ---------------------------------------------------------------------------
   Blog
--------------------------------------------------------------------------- */
export const posts = [
  {
    slug: "breaking-down-the-headlines",
    title: "Breaking Down the Headlines: Best Podcasts for Current Affairs",
    category: "Trending",
    date: "January 26, 24",
    readTime: "20 mins read",
    featured: true,
    image: images.blogOne,
    author: "David Michaels",
    excerpt:
      "Podcasts are a big part of how we entertain and learn these days. Whether you're into true crime or comedy, here are some tips to make your listening even better.",
  },
  {
    slug: "ultimate-guide-finding-perfect-podcast",
    title: "The Ultimate Guide to Finding Your Perfect Podcast",
    category: "Tips & Tricks",
    date: "April 18, 2025",
    readTime: "10 mins read",
    featured: false,
    image: images.blogTwo,
    author: "Max Hudson",
    excerpt:
      "With millions of shows out there, finding the right podcast can feel overwhelming. Here's a simple framework for narrowing down exactly what to listen to next.",
  },
  {
    slug: "essential-podcast-apps-and-tools",
    title: "Essential Podcast Apps and Tools for Every Listener",
    category: "Tools",
    date: "April 8, 2025",
    readTime: "10 mins read",
    featured: false,
    image: images.blogThree,
    author: "Ethan Carter",
    excerpt:
      "From playback speed tricks to smart recommendation engines, these are the apps and features that make everyday listening effortless.",
  },
  {
    slug: "best-podcasts-to-inspire-educate-entertain",
    title: "The Best Podcasts to Inspire, Educate, and Entertain",
    category: "Trending",
    date: "Mar 13, 2025",
    readTime: "04 mins read",
    featured: false,
    image: "/assets/episodes/hero_ep_1.jpg",
    author: "Mason Clarke",
    excerpt:
      "A curated shortlist of shows that manage to do it all - make you laugh, teach you something new, and leave you counting down to the next episode.",
  },
  {
    slug: "stay-consistent-with-your-listening-routine",
    title: "How to Stay Consistent With Your Podcast Listening Routine",
    category: "Habits",
    date: "Jan 27, 2025",
    readTime: "12 mins read",
    featured: false,
    image: "/assets/episodes/hero_ep_2.jpg",
    author: "James Reynolds",
    excerpt:
      "Building a listening habit is a lot like building any other habit. Here's how to actually stick with it, even on your busiest weeks.",
  },
  {
    slug: "science-of-active-listening",
    title: "The Science of Active Listening and How Podcasts Can Help",
    category: "Wellness",
    date: "Jan 18, 2025",
    readTime: "05 mins read",
    featured: false,
    image: "/assets/episodes/hero_ep_4.jpg",
    author: "Ryan Mitchell",
    excerpt:
      "Active listening is a trainable skill, and podcasts happen to be one of the best low-stakes ways to practice it every single day.",
  },
  {
    slug: "perfect-podcast-playlist-for-any-mood",
    title: "How to Create the Perfect Podcast Playlist for Any Mood",
    category: "Lifestyle",
    date: "Apr 8, 2025",
    readTime: "06 mins read",
    featured: false,
    image: "/assets/episodes/hero_ep_5.jpg",
    author: "Alex Hayes",
    excerpt:
      "Whether you're winding down or gearing up for a workout, the right playlist of episodes can completely change how your day feels.",
  },
  {
    slug: "improve-podcast-listening-for-max-enjoyment",
    title: "How to Improve Your Podcast Listening for Maximum Enjoyment",
    category: "Tips & Tricks",
    date: "May 30, 2025",
    readTime: "08 mins read",
    featured: false,
    image: "/assets/episodes/hero_ep_6.jpg",
    author: "Noah Bennett",
    excerpt:
      "Small changes to when, where, and how you listen can make a bigger difference than switching shows entirely. Here's what actually moves the needle.",
  },
  {
    slug: "day-in-the-life-of-a-podcaster",
    title: "Just Hanging Out Behind the Mic: A Day in the Life of a Podcaster",
    category: "Lifestyle",
    date: "Jan 24, 2025",
    readTime: "06 mins read",
    featured: false,
    image: "/assets/episodes/hero_ep_7.jpg",
    author: "Jack Thompson",
    excerpt:
      "Ever wondered what actually happens before, during, and after an episode gets recorded? Here's an honest look behind the curtain.",
  },
];

/* Full long-form body for the featured article's detail page. Other posts
   fall back to a lighter, auto-generated body built from their excerpt. */
export const featuredPostBody = {
  slug: "breaking-down-the-headlines",
  intro: [
    "Podcasts have transformed the way we consume content, offering a seamless blend of entertainment, education, and storytelling. Whether you listen to podcasts for personal growth, news updates, or pure enjoyment, maximizing your listening experience can help you absorb more information and enhance your overall engagement.",
    "From choosing the right content to optimizing your environment, here's a comprehensive guide to getting the most out of your podcast experience.",
  ],
  sections: [
    {
      heading: "Pick Podcasts You Actually Like",
      paragraphs: [
        "With over 5 million podcasts available worldwide, finding the right ones can be overwhelming. The key to an enjoyable experience is discovering shows that genuinely capture your attention.",
      ],
      image: "/assets/episodes/hero_ep_3.jpg",
      list: [
        "What topics excite me? (Self-improvement, storytelling, history, true crime, business, etc.)",
        "Do I prefer structured discussions, casual conversations, or deep-dive interviews?",
        "Am I looking for entertainment, education, or a mix of both?",
      ],
      quote: {
        text: "Adjusting playback speed lets you control your learning pace — just be careful not to sacrifice comprehension for speed.",
        author: "David Michaels, Podcast Creator",
      },
      proTip:
        "Don't force yourself to listen at 2x speed just to save time. The goal is enjoyment and retention, not just finishing episodes quickly.",
    },
    {
      heading: "Check Out Different Ways to Play",
      paragraphs: [
        "Most podcast players allow you to adjust playback speed and customize the listening experience. Experimenting with these settings can help you find a comfortable balance between comprehension and efficiency.",
      ],
      subheading: "Playback Speed Options",
      list: [
        "1x Speed (Normal): Best for casual listening and storytelling podcasts.",
        "1.2x – 1.5x Speed: Great for educational or business-related content to consume information faster.",
        "0.8x Speed: Helpful for complex topics that require deep focus.",
        "Before Sleep: Opt for storytelling or mindfulness podcasts to help you relax.",
      ],
      imagePair: ["/assets/episodes/ep_2.jpg", "/assets/episodes/ep_4.jpg"],
      proTip:
        "Use podcast platforms like Spotify, Apple Podcasts, Pocket Casts, or Overcast to explore top-rated shows, trending topics, and AI-powered recommendations based on your listening history.",
    },
    {
      heading: "Create an Epic Listening Zone",
      paragraphs: [
        "Your environment plays a huge role in how well you absorb and enjoy a podcast. A noisy or distracting setting can make it difficult to focus, reducing the impact of the content.",
      ],
      subheading: "Where You Listen Matters",
      list: [
        "At Home: Find a quiet spot or listen while doing household tasks like cooking or cleaning.",
        "During Commute: Use noise-canceling headphones to block out background noise.",
        "During Workouts: Choose high-energy or motivational podcasts to keep you engaged.",
        "Before Sleep: Opt for storytelling or mindfulness podcasts to help you relax.",
      ],
      closing:
        "Here's a helpful suggestion: When you're tuning into a podcast, especially one that's educational or involves a deep dive into complex topics, it's beneficial to find a relaxed and comfortable spot to listen. Ideally, this should be a place with minimal distractions, allowing you to fully engage with the content and absorb the information being presented. This way, you can enhance your understanding and enjoy the experience without interruptions.",
    },
  ],
};

export const blogCategories = [
  "Select Category",
  "All",
  "Trending",
  "Tips & Tricks",
  "Tools",
  "Habits",
  "Wellness",
  "Lifestyle",
];

export const blogPageHeader = {
  title: "Unlock Knowledge With\nOur Engaging Blogs",
  highlight: "Engaging",
  body:
    "Stay ahead with expert insights, industry trends, and in-depth guides. Explore thought-provoking articles designed to inform, inspire, and elevate your knowledge.",
};

export const blogExploreHeader = {
  title: "Explore Our Most\nPopular Blog & Articles",
};

export const blogHeader = {
  eyebrow: "Our Blog",
  title: "Stay Updated with Our Blogs",
  body:
    "Discover insights, tips, and the latest trends in the podcasting world. Stay informed and inspired with our curated articles.",
};

export const blogCta = { label: "Browse More Blogs", href: "/blog" };

/* ---------------------------------------------------------------------------
   Newsletter
--------------------------------------------------------------------------- */
export const newsletter = {
  eyebrow: "Newsletter",
  title: "Stay Updated and \nSubscribe to Our Newsletter!",
  body:
    "Hey there! Join our newsletter for the latest updates, fun podcast recommendations, and some awesome content delivered straight to your inbox!",
  cta: { label: "Subscribe", href: "#newsletter" },
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
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
  ],
  contact: {
    email: "hello@designmonks.co",
    addressLines: ["4886 Stroman Drive, South", "Stanton, California"],
  },
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Host", href: "/hosts" },
        { label: "Newsletter", href: "#newsletter" },
        { label: "Blog & Articles", href: "/blog" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Episodes", href: "/episodes" },
        { label: "Pricing Plan", href: "#pricing" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Condition", href: "#" },
        { label: "404", href: "#" },
      ],
    },
    {
      title: "Listen on",
      links: [
        { label: "Google Podcasts", href: "#" },
        { label: "Spotify", href: "#" },
        { label: "Apple Podcasts", href: "#" },
        { label: "RSS Feed", href: "#" },
      ],
    },
  ],
  copyright: "© Copyrights 2025 Design Monks. All rights reserved.",
};
