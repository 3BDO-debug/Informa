const followUpPlans = (translate) => [
  {
    title: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
    features: [
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.1'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.2'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.3'),
        included: false,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.4'),
        included: false,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.5'),
        included: false,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.6'),
        included: false,
      },
    ],
    coverImage: '/images/pricing-section-1.jpeg',
    color: '#C0C0C0',
    value: 'silver-package',
  },
  {
    title: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
    features: [
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.1'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.2'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.3'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.4'),
        included: false,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.5'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.6'),
        included: false,
      },
    ],
    coverImage: '/images/pricing-section-2.jpeg',
    color: 'primary',
    value: 'golden-package',
  },
  {
    title: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
    features: [
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.1'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.2'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.3'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.4'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.5'),
        included: true,
      },
      {
        feature: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.6'),
        included: true,
      },
    ],
    coverImage: '/images/pricing-section-3.jpeg',
    color: '#E5E4E2',
    value: 'mega-package',
  },
];

export default followUpPlans;
