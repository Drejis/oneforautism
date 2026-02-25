const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold mb-3">
            Watch the Testimony
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            See What God Is Doing
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Real testimonies of children healed through faith at Healing Streams Live Healing Services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-hope border border-border aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/koH_VNZ3gq4?autoplay=0&rel=0"
              title="Autism Healing Testimony"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center font-body text-sm text-muted-foreground mt-4">
            High-spectrum autism healing testimony — Healing Streams Live Healing Services
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
