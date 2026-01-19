import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeHeartFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeHeartFillDuotone = memo(
  forwardRef<SVGSVGElement, HomeHeartFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-heart-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zm4.36 7.11c-.78 0-1.47.38-1.9.97a2.35 2.35 0 0 0-4.25 1.36c0 .98.53 1.74.74 2.02.97 1.36 2.34 2.29 3.35 3.1q.16.1.32 0c1.01-.81 2.38-1.74 3.35-3.1.2-.28.74-1.04.74-2.02a2.34 2.34 0 0 0-2.35-2.33" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.9 9.75c1.3 0 2.35 1.04 2.35 2.33 0 .98-.53 1.74-.74 2.02-.97 1.36-2.34 2.29-3.35 3.1a.25.25 0 0 1-.32 0c-1.01-.81-2.38-1.74-3.35-3.1a3.5 3.5 0 0 1-.74-2.02A2.35 2.35 0 0 1 12 10.72a2.4 2.4 0 0 1 1.9-.97" />
    </IconBase>
  ))
);

HomeHeartFillDuotone.displayName = 'HomeHeartFillDuotone';

// Triple export pattern (lucide-react style)
export { HomeHeartFillDuotone, HomeHeartFillDuotone as HomeHeartFillDuotoneIcon, HomeHeartFillDuotone as SiHomeHeartFillDuotone };
export type { HomeHeartFillDuotoneProps };
