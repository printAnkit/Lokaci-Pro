import { assets } from '../assets/assets';

export default function BrandLogoSection(){
  const logos = [
    { icon: assets.CheapAndbest },
    { icon: assets.CutAndStyle},
    { icon: assets.Geetanjali},
    { icon: assets.Headmasters},
    { icon: assets.JawedHabib},
    { icon: assets.Monsoon},
    { icon: assets.MyGlam},
    { icon: assets.Naturals},
    { icon: assets.Nykaa},
    { icon: assets.Studio11},
    { icon: assets.ToniAndGuy},
  ];

  // Create multiple sets for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of companies that trust our platform for their business needs
          </p>
        </div>
        
        {/* Logo Marquee Container */}
        <div className="relative">
          {/* Large screens - 4 logos visible */}
          <div className="hidden lg:block relative h-24 mask-fade">
            <div className="absolute inset-0 flex items-center">
              <div className="flex space-x-16 animate-scroll-large">
                {duplicatedLogos.map((logo, index) => {
                  const IconComponent = logo.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center w-48 h-20 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-center space-x-3">
                        <img src={IconComponent} alt='' 
                          className={`w-50 h-12 group-hover:scale-110 transition-transform duration-300`} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Small screens - 1 logo visible */}
          <div className="lg:hidden relative h-24 mask-fade">
            <div className="absolute inset-0 flex items-center">
              <div className="flex space-x-8 animate-scroll-small">
                {duplicatedLogos.map((logo, index) => {
                  const IconComponent = logo.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center w-72 h-20 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <img src={IconComponent}
                          className={`w-50 h-15 group-hover:scale-110 transition-transform duration-300`} 
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};