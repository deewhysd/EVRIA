
export enum AppView {
  LANDING = 'landing',
  DASHBOARD = 'dashboard',
  REDEEM = 'redeem',
  ACTIVATION = 'activation',
  ACTIVITY = 'activity',
  ABOUT = 'about',
  LEGAL = 'legal'
}

export type TransactionStatus = 'Pending' | 'Processing' | 'Completed' | 'Activation Required';

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  asset: string;
  method: string;
  status: TransactionStatus;
  date: string;
}

export interface PayoutMethod {
  id: string;
  name: string;
  icon: string;
}

export interface Recipient {
  id: string;
  name: string;
  tag: string;
  email: string;
  platform: string;
  avatar: string;
  isNew?: boolean;
}
