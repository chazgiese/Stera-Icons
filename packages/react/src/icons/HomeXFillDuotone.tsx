import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeXFillDuotone = memo(
  forwardRef<SVGSVGElement, HomeXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zm5.67 7.65a1 1 0 0 0-1.42 0L12 12.1l-1.8-1.8a1 1 0 1 0-1.4 1.42l1.79 1.79-1.8 1.8a1 1 0 0 0 1.42 1.4L12 14.92l1.8 1.8a1 1 0 0 0 1.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.8 10.3a1 1 0 0 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4L12 14.92l-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4L12 12.08z" />
    </IconBase>
  ))
);

HomeXFillDuotone.displayName = 'HomeXFillDuotone';

// Triple export pattern (lucide-react style)
export { HomeXFillDuotone, HomeXFillDuotone as HomeXFillDuotoneIcon, HomeXFillDuotone as SiHomeXFillDuotone };
export type { HomeXFillDuotoneProps };
