import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellXFillDuotone = memo(
  forwardRef<SVGSVGElement, BellXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-x-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.9c0 .58.16 1.16.46 1.66l1.07 1.78c.9 1.5-.18 3.41-1.93 3.41h-3.4a5 5 0 0 1-9.9 0h-3.4a2.25 2.25 0 0 1-1.93-3.4l1.07-1.79q.46-.77.46-1.67V10A8.75 8.75 0 0 1 12 1.25m-2.9 17.5a3 3 0 0 0 5.8 0zm6.1-11.46a1 1 0 0 0-1.4 0L12 9.1l-1.8-1.8a1 1 0 0 0-1.4 1.42l1.79 1.79-1.8 1.8a1 1 0 1 0 1.42 1.4L12 11.92l1.8 1.8a1 1 0 0 0 1.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.8 7.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 0 1-1.42 1.4L12 11.92l-1.8 1.8a1 1 0 1 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4L12 9.08z" />
    </IconBase>
  ))
);

BellXFillDuotone.displayName = 'BellXFillDuotone';

// Triple export pattern (lucide-react style)
export { BellXFillDuotone, BellXFillDuotone as BellXFillDuotoneIcon, BellXFillDuotone as SiBellXFillDuotone };
export type { BellXFillDuotoneProps };
