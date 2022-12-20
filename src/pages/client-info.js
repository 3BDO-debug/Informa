import React from 'react';
// layouts
import LogoOnlyLayout from 'src/layouts/LogoOnlyLayout';
// components
import ClientInfoForm from 'src/components/__clientInfoPage/ClientInfoForm';

// -----------------------------------------------------------------------------------------------

function ClientInfoPage() {
  return (
    <LogoOnlyLayout>
      <ClientInfoForm />
    </LogoOnlyLayout>
  );
}

export default ClientInfoPage;
