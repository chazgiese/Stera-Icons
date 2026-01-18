import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlagRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlagRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlagRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.92 2.39a14 14 0 0 1 4.34 0c1.07.2 1.81.58 2.49.93.66.35 1.26.68 2.14.9s2.1.35 3.96.24c1-.06 1.9.71 1.9 1.76v7.92c0 .89-.68 1.66-1.6 1.73-2.02.15-3.44.04-4.54-.22-1.1-.27-1.86-.68-2.53-1.03a7 7 0 0 0-2.09-.83c-.75-.15-1.76-.21-3.24-.07v-1.5c1.51-.14 2.63-.08 3.54.1 1.08.22 1.82.61 2.5.97.66.36 1.27.69 2.17.9s2.16.33 4.08.18c.11 0 .21-.1.21-.23V6.22c0-.13-.13-.28-.31-.26-1.97.12-3.34-.02-4.42-.29S11.71 5 11.05 4.65a7 7 0 0 0-2.08-.8c-.75-.14-1.75-.2-3.22-.05v-.67a.75.75 0 0 0-.83-.74" opacity={.4} />
        <path fill="currentColor" d="M5 2.38c.41 0 .75.34.75.75V21a.75.75 0 0 1-1.5 0V3.13c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

FlagRegularDuotone.displayName = 'FlagRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlagRegularDuotone, FlagRegularDuotone as FlagRegularDuotoneIcon, FlagRegularDuotone as SiFlagRegularDuotone };
export type { FlagRegularDuotoneProps };
