export interface PricingItem {
  id: string;
  name: string;
  cost: number;
  msrp: number;
  installationTime: number;
  category: 'controller' | 'cellular' | 'sign' | 'subscription' | 'variable';
}

export interface CalculatorItem extends PricingItem {
  quantity: number;
}

export const pricingData: PricingItem[] = [
  // Network Connected IoT Controllers
  {
    id: 'wr-1r12',
    name: 'Original Web Relay 1 I/O Model X-WR-1R12-1I-I',
    cost: 170.00,
    msrp: 340.00,
    installationTime: 2,
    category: 'controller'
  },
  {
    id: 'x-401',
    name: 'X-401 Web Relay 2 I/O Model X-401-I',
    cost: 270.00,
    msrp: 540.00,
    installationTime: 2,
    category: 'controller'
  },
  {
    id: 'x-412',
    name: 'X-412 Web Relay 4 I/O Model X-412-I',
    cost: 370.00,
    msrp: 740.00,
    installationTime: 4,
    category: 'controller'
  },
  {
    id: 'x-432',
    name: 'X-432 Web Relay 16 I/O Model X-432-I',
    cost: 630.00,
    msrp: 1260.00,
    installationTime: 6,
    category: 'controller'
  },
  // Cellular Connected Options
  {
    id: 'sms-io',
    name: 'SMS IO with 2 Inputs and 2 Outputs',
    cost: 150.00,
    msrp: 300.00,
    installationTime: 2,
    category: 'cellular'
  },
  {
    id: 'battery-backup',
    name: 'Battery Backup Kit Add-on',
    cost: 90.00,
    msrp: 180.00,
    installationTime: 0.5,
    category: 'cellular'
  },
  {
    id: 'cell-booster',
    name: 'Cellular Service Booster Add-on',
    cost: 290.00,
    msrp: 480.00,
    installationTime: 6,
    category: 'cellular'
  },
  // Sign Options
  {
    id: 'vinyl-sign',
    name: 'Vinyl Sign with Backplate for Existing Pedestal',
    cost: 100.00,
    msrp: 200.00,
    installationTime: 2,
    category: 'sign'
  },
  {
    id: 'vinyl-enclosure',
    name: 'Vinyl Faced Enclosure for Traditional Look',
    cost: 250.00,
    msrp: 500.00,
    installationTime: 2,
    category: 'sign'
  },
  {
    id: 'led-kit',
    name: 'LED Light Kit Add-on',
    cost: 75.00,
    msrp: 150.00,
    installationTime: 0.5,
    category: 'sign'
  },
  {
    id: 'wood-post',
    name: 'Wood Post Set in Ground 24" Deep',
    cost: 50.00,
    msrp: 100.00,
    installationTime: 1.5,
    category: 'sign'
  },
  {
    id: 'gooseneck',
    name: 'Pad Mount Gooseneck Pedestal with Anchors',
    cost: 180.00,
    msrp: 360.00,
    installationTime: 1.5,
    category: 'sign'
  },
  {
    id: 'wireless-relay',
    name: 'Wireless Relay Unit (Sure-Fi model SFK-DS006-RELAY)',
    cost: 640.00,
    msrp: 1280.00,
    installationTime: 3,
    category: 'sign'
  },
  // Subscriptions
  {
    id: 'base-sub',
    name: 'Base Subscription (1 door/gate)',
    cost: 15.00,
    msrp: 30.00,
    installationTime: 0,
    category: 'subscription'
  },
  {
    id: 'add-door',
    name: 'Additional Door/Gate',
    cost: 3.00,
    msrp: 6.00,
    installationTime: 0,
    category: 'subscription'
  },
  {
    id: 'add-camera',
    name: 'Camera Add-on',
    cost: 3.00,
    msrp: 6.00,
    installationTime: 0,
    category: 'subscription'
  },
  {
    id: 'lpr-access',
    name: 'LPR Access Control',
    cost: 100.00,
    msrp: 200.00,
    installationTime: 0,
    category: 'subscription'
  },
  {
    id: 'dedicated-number',
    name: 'Dedicated Phone Number',
    cost: 0.50,
    msrp: 2.00,
    installationTime: 0,
    category: 'subscription'
  },
  {
    id: 'sim-card',
    name: 'SIM Card for SMS IO',
    cost: 6.00,
    msrp: 12.00,
    installationTime: 0,
    category: 'subscription'
  },
  {
    id: 'lifetime-warranty',
    name: 'LIFETIME WARRANTY Add-on',
    cost: 15.00,
    msrp: 30.00,
    installationTime: 0,
    category: 'subscription'
  }
];