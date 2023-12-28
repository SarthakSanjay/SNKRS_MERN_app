import React from 'react'

const FilterCompany = ({company , handleCompanyChange}) => {
    let companyArray = [
        "All",
        "Nike",
        "Adidas",
        "Puma",
        "Reebok",
        "New Balance",
        "Converse",
        "Under Armour",
        "Vans",
        "Skechers",
        "ASICS"
      ]
  return (
    <div className=' w-2/3 flex justify-between '>
        <label htmlFor="company">Company : </label>
        <select value={company} onChange={handleCompanyChange} className='bg-purple-900/40 border text-white rounded-[2px] w-20 outline-none'>
          {/* <option value="">All</option> */}
          {companyArray.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </select>
      </div>
  )
}

export default FilterCompany