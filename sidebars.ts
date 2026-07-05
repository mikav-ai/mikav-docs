import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quickstart',
        'getting-started/faq',
      ],
    },
    {
      type: 'category',
      label: 'Product',
      items: [
        'product/using-the-copilot',
        'product/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Datasets',
      items: [
        'datasets/overview',
        'datasets/how-to-use',
      ],
    },
    {
      type: 'category',
      label: 'Models',
      items: [
        'models/overview',
        'models/how-to-use',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/contributing',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/license',
      ],
    },
  ],
};

export default sidebars;
