import React from 'react';
import * as styles from './icons.module.scss';
import Grid from "../Grid";
import Card from "../Card";

const blocks = [
    {
        icon: 'smartphone-pay',
        title: 'Make payment seamless',
        text: 'Online or in-store, Quadpay means more flexibility at checkout.'
    },
    {
        icon: 'shield-check',
        title: 'Take on zero risk',
        text: 'You get paid today. Your customers pay over time.'
    },
    {
        icon: 'multiple-actions-cart',
        title: 'Put your customers first',
        text: 'Interest-free installment plans with no hard credit check or impact on credit.'
    },
    {
        icon: 'credit-card-check',
        title: 'Accept all major cards',
        text: 'QuadPay is the only Buy Now, Pay Later solution that accepts Amex and Discover along with Visa.'
    },
    {
        icon: 'fireworks-people-watch',
        title: 'Tap into our community',
        text: 'Introduce your brand to millions of existing QuadPay customers in our marketplace.'
    },
    {
        icon: 'analytics-graph-bar',
        title: 'Track progress',
        text: 'Easily manage customer data, order management, and reconciliation in the merchant portal.'
    },
];

const Icons = () => {
    return <div className={styles.icons}>
            <h2>Partnering with Quadpay</h2>
            <Grid component={Card} items={blocks}/>
            </div>
}

export default Icons;