import React from 'react';
// layouts
import LogoOnlyLayout from 'src/layouts/LogoOnlyLayout';
// components
import AlgorithmForm from 'src/components/__clientInfoPage/AlgorithmForm';

// -----------------------------------------------------------------------------------------------

function ClientInfoPage() {
  return (
    <LogoOnlyLayout>
      <AlgorithmForm />
    </LogoOnlyLayout>
  );
}

export default ClientInfoPage;
