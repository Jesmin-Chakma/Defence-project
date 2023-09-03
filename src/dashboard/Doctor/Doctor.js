import React from 'react'
import Sidebar from './Sidebar'
import Appointments from './Appointments'

export default function Doctor() {
  return (
    <div class="content">
			<div class="container-fluid">
              <div class="row">
                    <Sidebar/>
                    <Appointments/>
                </div>
            </div>
    </div>
  )
}
