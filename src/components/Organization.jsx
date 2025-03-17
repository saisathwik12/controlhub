import { useOrganization } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Organization = () => {
  const { organization } = useOrganization();
  const org = useParams();
  const orgId = org.id
  const navigate = useNavigate();
  useEffect(() => {
    if (organization?.slug != orgId) {
      navigate(`/`)
    }
  },[organization])

  return (
    <div>{orgId}</div>
  )
}

export default Organization