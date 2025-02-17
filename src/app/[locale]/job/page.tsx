import React from 'react';
import JobClient from '@/app/[locale]/job/JobClient';

/**
 * Home tab server component
 * @constructor
 */
export default async function Page(): Promise<React.JSX.Element> {
  return <JobClient />;
}
