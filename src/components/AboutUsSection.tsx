import React from 'react'
import pasindu from '../assets/MalithMirandaPhotograpy-8976.jpg'
import msJenny from '../assets/MsJenny.jpg'
import kishen from '../assets/kishen.jpg'
import msDinuka from '../assets/MsDinuka.jpg'
import thisara from '../assets/Thisara.jpg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
// import shehan from '../assets/MalithMirandaPhotograpy-8976.jpg'
interface TeamMember {
  name: string
  role: string
  status: string
  university: string
  department: string
  image: string
  social?: {
    linkedin?: string
    github?: string
    email?: string
  }
}

const team: TeamMember[] = [
  {
    name: 'Ms. Jenny Krishara',
    role: 'Supervisor',
    status: 'Senior Lecturer',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Faculty of Computing | Information Technology',
    image: msJenny,
    social: {
      linkedin: '#',
      email: 'jenny.k@sliit.lk'
    }
  },
  {
    name: 'Dr. Dinuka Wijendra',
    role: 'Co-Supervisor',
    status: 'Senior Lecturer',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Faculty of Computing | Information Technology',
    image: msDinuka,
    social: {
      linkedin: '#',
      email: 'dinuka.w@sliit.lk'
    }
  },
  {
    name: 'Sirisena B.G.K.D',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: kishen,
    social: {
      linkedin: '#',
      github: '#',
      email: 'it21357794@my.sliit.lk'
    }
  },
  {
    name: ' Niyangoda S.A.N.S.H',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    social: {
      linkedin: '#',
      github: '#',
      email: 'it21194962@my.sliit.lk'
    }
  },
  {
    name: 'Dewinda A.G.T',
    role: 'Group Member',
    status: 'Undergraduate',
    university: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: thisara,
    social: {
      linkedin: '#',
      github: '#',
      email: 'it21196560@my.sliit.lk'
    }
  }
  
]

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team 👨‍💻👩‍🏫</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A passionate group of experts committed to making adaptive language learning engaging and accessible for young students.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mt-8 mb-4 object-cover shadow-md border-4 border-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 italic mb-3">{member.status}</p>
                <p className="text-sm text-gray-600 mb-1">{member.university}</p>
                <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                
                {member.social && (
                  <div className="flex justify-center space-x-4 mt-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-600 hover:text-gray-900 transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
