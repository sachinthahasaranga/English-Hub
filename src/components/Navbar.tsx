import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scopeOpen, setScopeOpen] = useState(false)
    const [downloadOpen, setDownloadOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'glass-effect shadow-lg' : 'bg-gray-800'
        }`}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    EnglishHub
                </a>

                {/* Hamburger Button */}
                <button
                    className="md:hidden focus:outline-none text-white hover:text-blue-400 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm items-center">
                    <li><a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a></li>

                    {/* Project Scope Dropdown */}
                    <li className="relative group">
                        <button className="text-white hover:text-blue-400 transition-colors">Project Scope ▾</button>
                        <ul className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-lg mt-2 w-60 z-10 transform origin-top transition-all duration-200">
                            <li><a href="#literature" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Literature Survey</a></li>
                            <li><a href="#gap" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Research Gap</a></li>
                            <li><a href="#problem" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Research Problem & Solution</a></li>
                            <li><a href="#objectives" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Research Objectives</a></li>
                            <li><a href="#methodology" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Methodology</a></li>
                            <li><a href="#technologies" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Technologies</a></li>
                        </ul>
                    </li>

                    <li><a href="#milestones" className="text-white hover:text-blue-400 transition-colors">Milestones</a></li>

                    {/* Downloads Dropdown */}
                    <li className="relative group">
                        <button className="text-white hover:text-blue-400 transition-colors">Downloads ▾</button>
                        <ul className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-lg mt-2 w-48 z-10 transform origin-top transition-all duration-200">
                            <li><a href="#documents" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Documents</a></li>
                            <li><a href="#presentations" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Presentations</a></li>
                        </ul>
                    </li>

                    <li><a href="#about" className="text-white hover:text-blue-400 transition-colors">About Us</a></li>
                    <li><a href="#achievements" className="text-white hover:text-blue-400 transition-colors">Achievements</a></li>
                    <li><a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact Us</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 text-white px-4 pb-4 space-y-2 text-sm animate-slide-up">
                    <a href="#home" className="block py-2 border-b border-gray-600 hover:text-blue-400 transition-colors">Home</a>

                    <button onClick={() => setScopeOpen(!scopeOpen)} className="w-full text-left py-2 border-b border-gray-600 hover:text-blue-400 transition-colors">
                        Project Scope ▾
                    </button>
                    {scopeOpen && (
                        <ul className="pl-4 text-gray-200 space-y-1 animate-fade-in">
                            <li><a href="#literature" className="block py-1 hover:text-blue-400 transition-colors">Literature Survey</a></li>
                            <li><a href="#gap" className="block py-1 hover:text-blue-400 transition-colors">Research Gap</a></li>
                            <li><a href="#problem" className="block py-1 hover:text-blue-400 transition-colors">Research Problem & Solution</a></li>
                            <li><a href="#objectives" className="block py-1 hover:text-blue-400 transition-colors">Research Objectives</a></li>
                            <li><a href="#methodology" className="block py-1 hover:text-blue-400 transition-colors">Methodology</a></li>
                            <li><a href="#technologies" className="block py-1 hover:text-blue-400 transition-colors">Technologies</a></li>
                        </ul>
                    )}

                    <a href="#milestones" className="block py-2 border-b border-gray-600 hover:text-blue-400 transition-colors">Milestones</a>

                    <button onClick={() => setDownloadOpen(!downloadOpen)} className="w-full text-left py-2 border-b border-gray-600 hover:text-blue-400 transition-colors">
                        Downloads ▾
                    </button>
                    {downloadOpen && (
                        <ul className="pl-4 text-gray-200 space-y-1 animate-fade-in">
                            <li><a href="#documents" className="block py-1 hover:text-blue-400 transition-colors">Documents</a></li>
                            <li><a href="#presentations" className="block py-1 hover:text-blue-400 transition-colors">Presentations</a></li>
                        </ul>
                    )}

                    <a href="#about" className="block py-2 border-b border-gray-600 hover:text-blue-400 transition-colors">About Us</a>
                    <a href="#contact" className="block py-2 hover:text-blue-400 transition-colors">Contact Us</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
