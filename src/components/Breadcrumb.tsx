'use client';
import React, { ReactNode } from 'react';
import { nanoid } from 'nanoid';
import clsx from 'clsx';

import { LinkWrapper } from '../utils/misc';
import mcs from '../utils/merge';

import Icon, { IconInputType } from './Icon';

export type BreadcrumbItemProps = {
  link?: string;
  title?: ReactNode;
  icon?: IconInputType;
  iconClassName?: string;
  label?: string;
  isActive?: boolean;
};

export type BreadcrumbProps = {
  items: BreadcrumbItemProps[];
  className?: string;
  itemClassName?: string;
  hideHomeLink?: boolean;
  homeLink?: BreadcrumbItemProps;
};

const defaultHomeLink = {
  iconClassName: 'ri-home-2-line',
  link: '/',
  label: 'Go to home page',
};

const Breadcrumb = ({
  items,
  className = '',
  itemClassName = '',
  hideHomeLink = false,
  homeLink: _homeLink,
}: BreadcrumbProps) => {
  const computedItemClassName = mcs([
    'breadcrumb-item flex items-center gap-1 text-color',
    itemClassName,
  ]);

  const homePathItem: BreadcrumbItemProps = {
    ...defaultHomeLink,
    ..._homeLink,
  };

  const breadcrumbItems = !hideHomeLink
    ? items?.length > 0
      ? [homePathItem, ...items]
      : [homePathItem]
    : items;

  return (
    <ul
      className={mcs([
        'breadcrumb text-lg flex flex-wrap gap-1 items-center opacity-75',
        className,
      ])}
    >
      {breadcrumbItems.length > 0 &&
        breadcrumbItems.map((item, index) => (
          <li key={nanoid()} className={computedItemClassName}>
            {index !== 0 ? (<span className="px-0.5">/</span>) : null}
            {LinkWrapper(
              item?.link || '#',
              <React.Fragment>
                {item?.icon ? (
                  <div className={item?.title ? 'mr-1' : undefined}>
                    <Icon icon={item.icon} size={18} />
                  </div>
                ) : item?.iconClassName ? (
                  <i className={clsx([item.iconClassName, 'mr-1'])} />
                ) : null}
                {item?.title}
              </React.Fragment>,
              {
                title: item?.label,
                className: clsx([
                  'rounded focus:outline-none transition text-color px-2',
                  index == breadcrumbItems.length - 1 ? 'font-semibold' : 'hover:bg-neutral-300/40 px-1 focus:bg-neutral-300/50',
                ]),
                tabIndex: item?.isActive ? -1 : undefined,
              },
            )}
          </li>
        ))}
    </ul>
  );
};

export default Breadcrumb;
