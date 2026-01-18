import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FigmaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FigmaBoldDuotone = memo(
  forwardRef<SVGSVGElement, FigmaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.34 1a4.33 4.33 0 0 1 2.76 7.67 4.33 4.33 0 1 0-5.1 6.98v3.02a4.33 4.33 0 1 1-7.1-3.34 4.33 4.33 0 0 1 0-6.66A4.32 4.32 0 0 1 8.67 1zM8.65 16.33A2.33 2.33 0 1 0 11 18.67v-2.34H8.65m.02-6.66a2.33 2.33 0 0 0-.02 4.66H11V9.67zm0-6.67a2.33 2.33 0 0 0 0 4.67H11V3zM13 7.67h2.34a2.33 2.33 0 0 0 0-4.67H13z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.34 7.67a4.33 4.33 0 1 1 0 8.66 4.33 4.33 0 0 1 0-8.66m0 2a2.33 2.33 0 1 0 0 4.66 2.33 2.33 0 0 0 0-4.66" clipRule="evenodd" />
    </IconBase>
  ))
);

FigmaBoldDuotone.displayName = 'FigmaBoldDuotone';

// Triple export pattern (lucide-react style)
export { FigmaBoldDuotone, FigmaBoldDuotone as FigmaBoldDuotoneIcon, FigmaBoldDuotone as SiFigmaBoldDuotone };
export type { FigmaBoldDuotoneProps };
