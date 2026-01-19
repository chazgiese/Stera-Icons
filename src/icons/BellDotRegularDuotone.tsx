import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellDotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellDotRegularDuotone = memo(
  forwardRef<SVGSVGElement, BellDotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-dot-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25q.47 0 .92.05a.75.75 0 0 1-.15 1.49q-.38-.04-.77-.04C8 2.75 4.75 6 4.75 10v2.45q0 .76-.4 1.41l-.89 1.5c-.5.83.1 1.89 1.07 1.89h14.94c.97 0 1.57-1.06 1.07-1.9l-.9-1.49q-.38-.66-.39-1.41v-.26a.75.75 0 1 1 1.5 0v.26q0 .34.18.64l.9 1.5a2.75 2.75 0 0 1-2.36 4.16h-2.78a4.75 4.75 0 0 1-9.38 0H4.53a2.75 2.75 0 0 1-2.36-4.16l.9-1.5q.18-.3.18-.64V10A8.75 8.75 0 0 1 12 1.25m-3.16 17.5a3.25 3.25 0 0 0 6.32 0z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

BellDotRegularDuotone.displayName = 'BellDotRegularDuotone';

// Triple export pattern (lucide-react style)
export { BellDotRegularDuotone, BellDotRegularDuotone as BellDotRegularDuotoneIcon, BellDotRegularDuotone as SiBellDotRegularDuotone };
export type { BellDotRegularDuotoneProps };
