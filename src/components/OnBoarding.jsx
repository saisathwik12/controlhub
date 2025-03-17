import { OrganizationList, useOrganization } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const OnBoarding = () => {
  const { organization } = useOrganization();
  const navigate = useNavigate();
  useEffect(() => {
    if (organization) {
      navigate(`/organization/${organization.slug}`);
    }
  }, [organization])

  return (
    <div className='flex justify-center items-center pt-14'>
      <OrganizationList hidePersonal />
    </div>
  )
}

export default OnBoarding