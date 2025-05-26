import React from 'react'
import { FaDownload, FaFileAlt, FaFilePowerpoint } from 'react-icons/fa'

interface DownloadItem {
  title: string
  submittedOn: string
  type: 'Group' | 'Individual'
  link?: string
}

const documents: DownloadItem[] = [
  { title: 'Topic Assessment', submittedOn: '2021/02/25', type: 'Group', link: '#' },
  { title: 'Project Charter', submittedOn: '2021/02/25', type: 'Group', link: '#' },
  { title: 'Project Proposal', submittedOn: '2021/03/22', type: 'Individual', link: '#' },
  { title: 'Status Documents I', submittedOn: '2021/07/05', type: 'Individual', link: '#' },
  { title: 'Status Documents II', submittedOn: 'Yet to be submitted, link will be updated soon.', type: 'Individual' },
  { title: 'Research Paper', submittedOn: 'Yet to be submitted, link will be updated soon.', type: 'Group' },
  { title: 'Final Report', submittedOn: '2021/10/13', type: 'Group', link: '#' },
  { title: 'Final Report', submittedOn: '2021/10/13', type: 'Individual', link: '#' },
  { title: 'Poster', submittedOn: '2021/10/13', type: 'Group', link: '#' },
]

const presentations: DownloadItem[] = [
  { title: 'Project Proposal', submittedOn: '2021/03/14', type: 'Group', link: '#' },
  { title: 'Progress Presentation I', submittedOn: '2021/07/08', type: 'Group', link: '#' },
  { title: 'Progress Presentation II', submittedOn: '2021/10/18', type: 'Group', link: '#' },
  { title: 'Final Presentation', submittedOn: 'Yet to be submitted, link will be updated soon.', type: 'Group' },
]

const DownloadsSection: React.FC = () => {
  const renderTable = (items: DownloadItem[], type: 'documents' | 'presentations') => (
    <div className="overflow-x-auto mt-4 rounded-xl shadow-lg">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider">Title</th>
            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider">Submitted On</th>
            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider">Type</th>
            <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {type === 'documents' ? (
                    <FaFileAlt className="w-5 h-5 text-blue-500 mr-3" />
                  ) : (
                    <FaFilePowerpoint className="w-5 h-5 text-red-500 mr-3" />
                  )}
                  <span className="text-sm text-gray-900">{item.title}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.submittedOn}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-3 py-1 text-xs rounded-full ${
                  item.type === 'Group' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {item.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.link ? (
                  <a
                    href={item.link}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    download
                  >
                    <FaDownload className="mr-2" />
                    Download
                  </a>
                ) : (
                  <span className="text-gray-400 italic">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <section id="downloads" className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Downloads</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Access all project-related documents and presentations. Stay updated with our latest research and findings.
        </p>

        <div id="documents" className="mb-16">
          <div className="flex items-center mb-6">
            <FaFileAlt className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-700">📄 Documents</h3>
          </div>
          {renderTable(documents, 'documents')}
        </div>

        <div id="presentations">
          <div className="flex items-center mb-6">
            <FaFilePowerpoint className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-700">📽️ Presentations</h3>
          </div>
          {renderTable(presentations, 'presentations')}
        </div>
      </div>
    </section>
  )
}

export default DownloadsSection
