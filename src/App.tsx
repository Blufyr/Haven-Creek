import React from 'react';
import { motion } from 'motion/react';
import { Church, Calendar, MapPin, Clock, Heart, MessageCircle, Play, ChevronRight, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Give', href: '#give' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Church className="text-[#5A5A40] w-8 h-8" />
            <span className="font-serif text-2xl font-bold tracking-tight text-[#2D2A26]">Haven Creek</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-stone-600 hover:text-[#5A5A40] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary text-sm">Join Us Sunday</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-stone-100 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block px-3 py-2 text-base font-medium text-stone-600 hover:bg-stone-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full btn-primary mt-4">Join Us Sunday</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
          alt="Church Interior" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-white/80 uppercase tracking-[0.3em] text-sm font-semibold mb-4"
        >
          Welcome to Haven Creek
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight"
        >
          A place to <span className="italic">belong</span>, grow, and serve.
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary px-8 py-4 text-lg">Plan Your Visit</button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all hover:bg-white/20 text-lg flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current" /> Watch Sermons
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-px h-12 bg-white/30 mx-auto mb-2"></div>
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const InfoCards = () => {
  const cards = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Service Times",
      content: "Sundays at 9:00 AM & 11:00 AM",
      sub: "In-person & Online"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "123 Grace Lane",
      sub: "Springfield, IL 62704"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community",
      content: "Life Groups",
      sub: "Meeting throughout the week"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#FDFCFB] border border-stone-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40] mb-6">
                {card.icon}
              </div>
              <h3 className="font-serif text-2xl mb-2">{card.title}</h3>
              <p className="text-stone-800 font-medium">{card.content}</p>
              <p className="text-stone-500 text-sm">{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" 
              alt="Community Gathering" 
              className="rounded-[2rem] shadow-2xl z-10 relative"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#5A5A40]/10 rounded-[2rem] -z-0"></div>
          </div>
          
          <div>
            <span className="text-[#5A5A40] font-semibold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Rooted in faith, <br />reaching our community.</h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Haven Creek Church has been a cornerstone of the Springfield community for over 50 years. We believe that the church isn't a building—it's people. Our mission is to love God, love people, and make disciples of Jesus Christ.
            </p>
            <div className="space-y-4 mb-8">
              {['Inclusive community for all ages', 'Biblically centered teaching', 'Active local and global outreach'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5A5A40] flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-stone-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="btn-secondary">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const events = [
    {
      date: "MAR 15",
      title: "Spring Family Picnic",
      time: "12:30 PM - 3:00 PM",
      location: "Haven Creek Park"
    },
    {
      date: "MAR 22",
      title: "Youth Night: Glow",
      time: "6:30 PM - 8:30 PM",
      location: "The Warehouse"
    },
    {
      date: "APR 02",
      title: "Easter Sunday Service",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary"
    }
  ];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[#5A5A40] font-semibold tracking-widest uppercase text-xs mb-4 block">What's Happening</span>
            <h2 className="text-4xl md:text-5xl font-serif">Upcoming Events</h2>
          </div>
          <button className="text-[#5A5A40] font-semibold flex items-center gap-2 hover:underline">
            View Full Calendar <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                <img 
                  src={`https://picsum.photos/seed/church-event-${idx}/800/600`} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-2xl shadow-lg text-center">
                  <span className="block font-bold text-[#5A5A40]">{event.date.split(' ')[1]}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-bold">{event.date.split(' ')[0]}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-[#5A5A40] transition-colors">{event.title}</h3>
              <div className="flex items-center gap-4 text-stone-500 text-sm">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SermonsSection = () => {
  return (
    <section id="sermons" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#A3A380] font-semibold tracking-widest uppercase text-xs mb-4 block">Spiritual Resources</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Latest Sermon Series</h2>
        
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden aspect-video mb-12 group">
          <img 
            src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1500" 
            alt="Latest Sermon" 
            className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all scale-100 hover:scale-110">
              <Play className="w-8 h-8 fill-white" />
            </button>
            <div className="mt-8">
              <h3 className="text-3xl font-serif italic mb-2">The Path of Grace</h3>
              <p className="text-white/60">Pastor Michael Haven • March 5, 2024</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 items-center p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-24 h-16 rounded-lg bg-stone-800 overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/sermon-${i}/200/150`} alt="Sermon thumbnail" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-serif text-lg leading-tight">Finding Peace in Chaos</h4>
                <p className="text-white/40 text-xs mt-1">Feb 26, 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20">
            <h2 className="text-4xl font-serif mb-8">Get in touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-100 focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20"></textarea>
              </div>
              <button className="btn-primary w-full py-4">Send Message</button>
            </form>
          </div>
          <div className="bg-[#5A5A40] p-12 lg:p-20 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif mb-8">We'd love to <br /><span className="italic">hear from you.</span></h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#A3A380]" />
                  <div>
                    <p className="font-bold">Visit Us</p>
                    <p className="text-white/70">123 Grace Lane, Springfield, IL 62704</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MessageCircle className="w-6 h-6 text-[#A3A380]" />
                  <div>
                    <p className="font-bold">Call or Email</p>
                    <p className="text-white/70">(217) 555-0123<br />hello@havencreek.org</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 mt-12">
              <Instagram className="w-6 h-6 hover:text-[#A3A380] cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 hover:text-[#A3A380] cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-[#A3A380] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Church className="text-[#5A5A40] w-8 h-8" />
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2D2A26]">Haven Creek</span>
            </div>
            <p className="text-stone-500 max-w-sm mb-8">
              A community of believers dedicated to following Jesus and loving our neighbors in Springfield and beyond.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-[#5A5A40] hover:border-[#5A5A40] transition-all">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-500">
              <li><a href="#" className="hover:text-[#5A5A40]">Our Beliefs</a></li>
              <li><a href="#" className="hover:text-[#5A5A40]">Leadership</a></li>
              <li><a href="#" className="hover:text-[#5A5A40]">Ministries</a></li>
              <li><a href="#" className="hover:text-[#5A5A40]">Missions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-stone-500">
              <li><a href="#" className="hover:text-[#5A5A40]">Giving Online</a></li>
              <li><a href="#" className="hover:text-[#5A5A40]">Volunteer</a></li>
              <li><a href="#" className="hover:text-[#5A5A40]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#5A5A40]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-xs">
          <p>© 2024 Haven Creek Church. All rights reserved.</p>
          <p>Designed with love in Springfield.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InfoCards />
      <AboutSection />
      <EventsSection />
      <SermonsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
