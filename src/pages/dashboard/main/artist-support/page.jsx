import Table from "@/shared/tables/Table"
import { TableHeaderName } from "@/utils/const"
const ArtistSupport = () => {
  return (
    <div>
      <div className="pb-5 border-b border-gray-300">
        <h1 className='text-2xl font-semibold'>Welcome to the <span className='text-[#F71873]'>Artist support panel</span></h1>
      </div>
      <Table {...TableHeaderName.artistSupport}/>
    </div>
  )
}

export default ArtistSupport