import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { OwnerHouses } from '../../components/OwnerHouses'
export const Dashboard = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <OwnerHouses></OwnerHouses>
    </div>
  )
}
