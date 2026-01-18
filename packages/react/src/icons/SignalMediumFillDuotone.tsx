import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalMediumFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignalMediumFillDuotone = memo(
  forwardRef<SVGSVGElement, SignalMediumFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3.5 16.75c.97 0 1.75.78 1.75 1.75v1c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-1c0-.97.78-1.75 1.75-1.75zM9.5 12.08c.97 0 1.75.78 1.75 1.75v5.67c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-5.67c0-.97.78-1.75 1.75-1.75zM15.5 7.41c.97 0 1.75.79 1.75 1.75V19.5c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75V9.16c0-.96.78-1.75 1.75-1.75z" />
        <path fill="currentColor" d="M21.5 2.75c.97 0 1.75.78 1.75 1.75v15c0 .97-.78 1.75-1.75 1.75h-1c-.97 0-1.75-.78-1.75-1.75v-15c0-.97.78-1.75 1.75-1.75z" opacity={.4} />
    </IconBase>
  ))
);

SignalMediumFillDuotone.displayName = 'SignalMediumFillDuotone';

// Triple export pattern (lucide-react style)
export { SignalMediumFillDuotone, SignalMediumFillDuotone as SignalMediumFillDuotoneIcon, SignalMediumFillDuotone as SiSignalMediumFillDuotone };
export type { SignalMediumFillDuotoneProps };
