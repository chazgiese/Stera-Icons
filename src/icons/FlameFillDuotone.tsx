import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlameFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameFillDuotone = memo(
  forwardRef<SVGSVGElement, FlameFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.37 1.22a1 1 0 0 1 1.26 0 37.46 37.46 0 0 1 4.13 4.06 24 24 0 0 1 2.87 4.05C20.42 10.79 21 12.39 21 14a9 9 0 0 1-8.87 9 4.7 4.7 0 0 0 2.82-1.04 4.3 4.3 0 0 0 1.55-3.46c0-1.85-1.06-3.57-1.96-4.74a16 16 0 0 0-1.84-1.97l-.03-.03-.01-.01h-.01l-.22-.15h-.01l-.24-.08h-.02a1 1 0 0 0-.32 0h-.02l-.24.07h-.01l-.22.15-.02.02-.03.03-.55.52c-.35.35-.82.85-1.29 1.45-.9 1.17-1.96 2.9-1.96 4.74 0 1.55.64 2.7 1.55 3.46.85.7 1.9 1 2.82 1.04A9 9 0 0 1 3 14c0-1.6.58-3.21 1.37-4.67.8-1.47 1.85-2.86 2.87-4.05a38 38 0 0 1 4.13-4.06" opacity={.4} />
        <path fill="currentColor" d="m12 11.5.16.01h.02a1 1 0 0 1 .47.23l.02.02.03.03.13.1a14 14 0 0 1 1.7 1.87c.91 1.17 1.97 2.9 1.97 4.74 0 1.55-.63 2.7-1.55 3.46a4.7 4.7 0 0 1-5.9 0A4.3 4.3 0 0 1 7.5 18.5c0-1.85 1.06-3.57 1.96-4.74a16 16 0 0 1 1.71-1.86l.13-.11.03-.03.01-.01h.01l.22-.15.25-.08h.02z" />
    </IconBase>
  ))
);

FlameFillDuotone.displayName = 'FlameFillDuotone';

// Triple export pattern (lucide-react style)
export { FlameFillDuotone, FlameFillDuotone as FlameFillDuotoneIcon, FlameFillDuotone as SiFlameFillDuotone };
export type { FlameFillDuotoneProps };
