import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SunriseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SunriseBoldDuotone = memo(
  forwardRef<SVGSVGElement, SunriseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM18 16.67a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2zM22 13.33a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a9 9 0 0 1 9 9 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 9 9 0 0 1 9-9m0 2a7 7 0 0 0-6.93 6h13.86A7 7 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

SunriseBoldDuotone.displayName = 'SunriseBoldDuotone';

// Triple export pattern (lucide-react style)
export { SunriseBoldDuotone, SunriseBoldDuotone as SunriseBoldDuotoneIcon, SunriseBoldDuotone as SiSunriseBoldDuotone };
export type { SunriseBoldDuotoneProps };
