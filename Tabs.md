---
title: Tabs
tags : ["all", "navigation", "wip"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" fill="none"><rect width="260" height="180" fill="var(--color-bg)"></rect><path d="M95 23H165V55H95V23Z" fill="var(--color-contrast-lower)" stroke="var(--color-contrast-lower)" stroke-width="2"></path><path d="M165 23H231C233.209 23 235 24.7909 235 27V55H165V23Z" fill="var(--color-contrast-lower)" stroke="var(--color-contrast-lower)" stroke-width="2"></path><path d="M25 55H235V153C235 155.209 233.209 157 231 157H29C26.7909 157 25 155.209 25 153V55Z" fill="var(--color-bg)" stroke="var(--color-contrast-low)" stroke-width="2"></path><path d="M25 27C25 24.7909 26.7909 23 29 23H95V55H25V27Z" fill="var(--color-bg)" stroke="var(--color-contrast-low)" stroke-width="2"></path><rect x="26" y="52" width="68" height="6" fill="var(--color-bg)"></rect><rect x="44" y="35" width="32" height="8" fill="var(--color-primary)"></rect><rect x="44" y="97" width="172" height="6" fill="var(--color-contrast-low)"></rect><rect x="44" y="113" width="172" height="6" fill="var(--color-contrast-low)"></rect><rect x="44" y="129" width="56" height="6" fill="var(--color-contrast-low)"></rect><rect x="44" y="77" width="102" height="10" fill="var(--color-contrast-medium)"></rect><rect x="114" y="35" width="32" height="8" fill="var(--color-contrast-medium)"></rect><rect x="184" y="35" width="32" height="8" fill="var(--color-contrast-medium)"></rect></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import {Tabs} from 'components/navigation';

[TODO]

<Tabs id="tabs4" layout="horizontal" items={[
		{
			title: 'item 1',
			children: (
				<>
					<p>
						1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
						impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi
						voluptatum nostrum eveniet voluptatibus.
					</p>
				</>
			),
		},
		{
			title: 'item 2',
			children: (
				<p>
					2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 3',
			children: (
				<p>
					3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 4',
			children: (
				<p>
					4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 5',
			children: (
				<p>
					5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 6',
			children: (
				<p>
					6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
	]} layoutSm='select' />

<Tabs id="tabs8" layout="horizontal" items={[
		{
			title: 'item 1',
			children: (
				<>
					<p>
						1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
						impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi
						voluptatum nostrum eveniet voluptatibus.
					</p>
				</>
			),
		},
		{
			title: 'item 2',
			children: (
				<p>
					2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 3',
			children: (
				<p>
					3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 4',
			children: (
				<p>
					4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 5',
			children: (
				<p>
					5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 6',
			children: (
				<p>
					6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
	]} layoutSm='accordion' />

<Tabs useHover id="tabs1" layout="vertical" items={[
		{
			title: 'item 1',
			children: (
				<>
					<p>
						1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
						impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi
						voluptatum nostrum eveniet voluptatibus.
					</p>
				</>
			),
		},
		{
			title: 'item 2',
			children: (
				<p>
					2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 3',
			children: (
				<p>
					3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 4',
			children: (
				<p>
					4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 5',
			children: (
				<p>
					5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 6',
			children: (
				<p>
					6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
	]} />

<Tabs useHover id="tabs2" layout="horizontal" items={[
		{
			title: 'item 1',
			children: (
				<>
					<p>
						1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
						impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi
						voluptatum nostrum eveniet voluptatibus.
					</p>
				</>
			),
		},
		{
			title: 'item 2',
			children: (
				<p>
					2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 3',
			children: (
				<p>
					3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 4',
			children: (
				<p>
					4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 5',
			children: (
				<p>
					5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
		{
			title: 'item 6',
			children: (
				<p>
					6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae debitis illum, sint at sequi
					impedit porro fugiat doloribus eum deleniti quo ipsam ullam delectus accusamus excepturi voluptatum
					nostrum eveniet voluptatibus.
				</p>
			),
		},
	]} />
