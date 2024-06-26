import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import Stripe from "stripe";

export interface Subscription {
    id?: string;
    metadata: {
        [nanme: string]: string;
    };
    stripeLink: string;
    role: string | null;
    quantity: number;
    items: Stripe.Subscription[];
    product: DocumentReference<DocumentData>;
    price: DocumentReference<DocumentData>;
    prices: DocumentReference<DocumentData>;
    payment_methods?: string;
    latest_invoice?: string;
    status: | 'active'
    | 'cancel'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'trialing'
    | 'unpaid';
    cancel_at_period_end: boolean;
    created: Timestamp;
    current_period_start: Timestamp;
    current_period_end: Timestamp;
    ended_at: Timestamp | null;
    cancel_at: Timestamp | null;
    canceled_at: Timestamp | null;
    trial_start: Timestamp | null;
    trial_end: Timestamp | null;
}