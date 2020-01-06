---
title: Breadcrumb
tags : ["all", "navigation", "wip"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" fill="none"><rect width="260" height="180" fill="var(--color-bg)"></rect><rect x="107" y="85" width="46" height="10" fill="var(--color-primary)"></rect><rect x="17" y="85" width="46" height="10" fill="var(--color-primary)"></rect><rect x="197" y="85" width="46" height="10" fill="var(--color-contrast-high)"></rect><path d="M81 97.5L88.5 90L81 82.5" stroke="var(--color-contrast-low)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path><path d="M171 97.5L178.5 90L171 82.5" stroke="var(--color-contrast-low)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import {Breadcrumb} from 'components/navigation';

[TODO]

<Breadcrumb
    items={[
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Section',
            href: '/#section',
        },
        {
            label: 'Page',
            href: null,
        },
    ]}
/>
