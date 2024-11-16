import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-red-600">
            Blood Donation
          </Link>
          <div className="space-x-4">
            <Link href="/donor/register" className="text-gray-600 hover:text-red-600">
              Become a Donor
            </Link>
            <Link href="/receiver" className="text-gray-600 hover:text-red-600">
              Request Blood
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 