
import { PayoutMethod, Transaction, Recipient } from './types';

export const ASSET_RATES = {
  BTC: 96500,
  ETH: 2650,
  USDT: 1.00,
  SOL: 145.20,
  USDC: 1.00
};

export const SUPPORTED_METHODS: PayoutMethod[] = [
  { id: 'cashapp', name: 'Cash App', icon: '💸' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️' },
  { id: 'applepay', name: 'Apple Pay', icon: '🍎' },
  { id: 'zelle', name: 'Zelle', icon: '⚡' },
  { id: 'venmo', name: 'Venmo', icon: '🟦' },
];

export const MOCK_RECIPIENTS: Recipient[] = [
  { id: 'r1', name: 'Alice Smith', tag: '@alicesmith', email: 'alice@example.com', platform: 'PayPal', avatar: 'AS', isNew: true },
  { id: 'r2', name: 'Alan Johnson', tag: '@alan_j', email: 'alan.j@work.com', platform: 'Cash App', avatar: 'AJ' },
  { id: 'r3', name: 'Ben Doe', tag: '@bendoe', email: 'ben.d@me.com', platform: 'Zelle', avatar: 'BD' },
  { id: 'r4', name: 'Sarah Wilson', tag: '@sarahw', email: 'swilson@fin.com', platform: 'Apple Pay', avatar: 'SW' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'TX-9902',
    type: 'Redemption to Alice Smith',
    amount: 5000.00,
    asset: 'BTC',
    method: 'PayPal',
    status: 'Activation Required',
    date: '2024-03-24',
  },
  {
    id: 'TX-8812',
    type: 'Withdrawal to Bank',
    amount: 12000.00,
    asset: 'USD',
    method: 'ACH Transfer',
    status: 'Processing',
    date: '2024-03-22',
  },
  {
    id: 'TX-7741',
    type: 'Deposit BTC',
    amount: 45000.00,
    asset: 'BTC',
    method: 'On-Chain',
    status: 'Completed',
    date: '2024-03-20',
  }
];

export const ASSETS = ['BTC', 'ETH', 'USDT', 'SOL', 'USDC'];
