'use client';
import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./Video'));

const VideoSection = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default VideoSection;
