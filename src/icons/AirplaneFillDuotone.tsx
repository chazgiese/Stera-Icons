import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AirplaneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneFillDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-fill-duotone" {...props}>
      <path fill="currentColor" d="m20.88 13.12.77-.76a.5.5 0 0 0 0-.71l-.77-.77a3 3 0 0 0-2.12-.88H10l-4.5.15-1.14-2.02c-.22-.39-.64-.63-1.09-.63h-.71a.5.5 0 0 0-.5.55L2.5 12l-.44 3.94c-.03.3.2.56.5.56h.71c.45 0 .87-.24 1.09-.63l1.14-2.02L10 14h8.76a3 3 0 0 0 2.12-.88" opacity={.4} />
        <path fill="currentColor" d="M10.6 3.84 15 10h-5L7.3 3.7a.5.5 0 0 1 .46-.7h1.21a2 2 0 0 1 1.63.84M10.6 20.16 15 14h-5l-2.7 6.3c-.14.33.1.7.46.7h1.21a2 2 0 0 0 1.63-.84" />
    </IconBase>
  ))
);

AirplaneFillDuotone.displayName = 'AirplaneFillDuotone';

// Triple export pattern (lucide-react style)
export { AirplaneFillDuotone, AirplaneFillDuotone as AirplaneFillDuotoneIcon, AirplaneFillDuotone as SiAirplaneFillDuotone };
export type { AirplaneFillDuotoneProps };
