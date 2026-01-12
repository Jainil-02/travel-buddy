import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
}
