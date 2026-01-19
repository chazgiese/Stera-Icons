import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BirdhouseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseFillDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="birdhouse-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.67 4.63a.5.5 0 0 1 .66 0l7.15 6.35L17.95 19H6.05l-1.53-8.01zM12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M19 19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zM12 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
        <path fill="currentColor" d="M10.34 3.14a2.5 2.5 0 0 1 3.32 0l8 7.11a1 1 0 0 1-1.32 1.5l-8-7.12a.5.5 0 0 0-.67 0l-8 7.12a1 1 0 0 1-1.33-1.5z" />
    </IconBase>
  ))
);

BirdhouseFillDuotone.displayName = 'BirdhouseFillDuotone';

// Triple export pattern (lucide-react style)
export { BirdhouseFillDuotone, BirdhouseFillDuotone as BirdhouseFillDuotoneIcon, BirdhouseFillDuotone as SiBirdhouseFillDuotone };
export type { BirdhouseFillDuotoneProps };
