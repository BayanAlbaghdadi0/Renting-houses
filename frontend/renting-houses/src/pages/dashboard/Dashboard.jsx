import React from 'react'
import { Sidebar } from '../../components/Sidebar.jsx'
import  OwnerHouses  from '../../components/OwnerHouses.jsx'
export const Dashboard = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <OwnerHouses></OwnerHouses>
    </div>
  )
}
