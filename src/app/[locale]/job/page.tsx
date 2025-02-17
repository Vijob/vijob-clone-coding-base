import React from 'react';
import Client from '@/app/[locale]/job/Client';

/**
 * Home tab server component
 * @constructor
 */
export default async function Page(): Promise<React.JSX.Element> {
  return <Client />;
}
