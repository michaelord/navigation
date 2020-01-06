---
title: Social
tags : ["all", "navigation", "wip"]
category: "Undefined"
icon: '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180"><rect x="10" y="68" width="240" height="44" fill="var(--color-contrast-lower)"></rect><rect x="51" y="87" width="32" height="6" fill="var(--color-contrast-high)"></rect><rect x="45" y="110" width="44" height="2" fill="var(--color-primary)"></rect><rect x="93" y="87" width="32" height="6" fill="var(--color-contrast-medium)"></rect><rect x="135" y="87" width="32" height="6" fill="var(--color-contrast-medium)"></rect><rect x="177" y="87" width="32" height="6" fill="var(--color-contrast-medium)"></rect></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import IconFacebook from 'components/icon/facebook.inline.svg';
import IconInstagram from 'components/icon/instagram.inline.svg';
import IconTwitter from 'components/icon/twitter.inline.svg';
import IconYouTube from 'components/icon/youtube.inline.svg';
import { Social } from 'components/navigation';

[TODO]

<Social
    items={[
        {
            label: 'Facebook',
            href: 'http://facebook.com',
            icon: IconFacebook,
        },
        {
            label: 'Twitter',
            href: 'http://twitter.com',
            icon: IconTwitter,
        },
        {
            label: 'YouTube',
            href: 'http://youtube.com',
            icon: IconYouTube,
        },
        {
            label: 'Instagram',
            href: 'http://instagram.com',
            icon: IconInstagram,
        },
    ]}
/>
