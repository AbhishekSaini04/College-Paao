export default function YouTubeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50  bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black ">
              Featured Content
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our curated playlists and featured video content
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Featured Video */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">
                Featured Video
              </h3>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.youtube.com/embed/q89owX-_EJ4?si=hSzYg7gh0WM1CEj9"
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Watch our latest featured content and discover something useful.
              </p>
            </div>
          </div>

          {/* First Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black">College Series</h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/videoseries?si=mgcOVZtNxUN6QXs2&amp;list=PLi52nqmVi6uqJqWOi3hFGXUyEr_2NKBEx"
                title="Tutorial Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="text-sm text-muted-foreground text-black">
              Complete tutorial series covering everything related to
              counselling.
            </p>
          </div>

          {/* Second Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black text-black">
              Best Practices
            </h3>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/gvnASLIUU7g?si=TaOh_IVEtHcFdkbK"
                title="Best Practices Playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              What to Bring when moving in to Hostel.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.youtube.com/@aksacts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Subscribe to Channel
            </a>
            <a
              href="https://www.youtube.com/@aksacts/videos"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View All Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
