import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer creating digital experiences with modern technologies. Explore my work, read my
            thoughts, and get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Latest Work</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Check out my recent projects and case studies.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Blog Posts</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Read my thoughts on design, development, and technology.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Let's collaborate on your next project.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
