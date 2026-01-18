import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.22 4.22q.54-.54 1.14-.98l15.4 15.4a11 11 0 0 1-2.12 2.12L3.24 5.36q.45-.6.98-1.14M16.9 21.85q-1.55.76-3.22 1.02L1.13 10.32q.25-1.67 1.02-3.22zM7.1 2.15q1.55-.76 3.22-1.02l12.55 12.55q-.26 1.67-1.02 3.22zM10.93 22.95a10.95 10.95 0 0 1-9.88-9.88zM13.07 1.05a10.95 10.95 0 0 1 9.88 9.88z" opacity={0.4} />
        <path fill="currentColor" d="M18.64 20.76q-.82.64-1.74 1.09L2.15 7.1q.45-.9 1.09-1.74zM5.36 3.23q.82-.63 1.74-1.08L21.85 16.9q-.45.9-1.09 1.74zM13.68 22.87q-1.37.21-2.75.08l-9.88-9.88q-.13-1.37.08-2.75zM10.32 1.13q1.38-.21 2.75-.08l9.88 9.88q.13 1.38-.08 2.75z" />
    </IconBase>
  ))
);

CirclePlaceholderFillDuotone.displayName = 'CirclePlaceholderFillDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderFillDuotone, CirclePlaceholderFillDuotone as CirclePlaceholderFillDuotoneIcon, CirclePlaceholderFillDuotone as SiCirclePlaceholderFillDuotone };
export type { CirclePlaceholderFillDuotoneProps };
