import Header from "../components/crm/Header"
import MainContent from "../components/crm/MainContent"
import Sidebar from "../components/crm/Sidebar"

const CrmLayout = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_10fr] h-screen">
      <Sidebar />
      <div className="h-full overflow-y-scroll scroll-hidden p-8">
        <Header/>
        <MainContent />
      </div>
    </div>
  )
}

export default CrmLayout
