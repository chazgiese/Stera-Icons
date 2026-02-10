import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneFillDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-fill-duotone" {...props}>
      <path d="M10.2 14.05h4.63l-3.89 5.35c-.38.54-1 .85-1.66.85h-1.1a.7.7 0 0 1-.64-.98l2.28-5.23zM9.28 3.75c.66 0 1.28.31 1.66.85l3.89 5.35h-4.64l-.37.01-2.28-5.23a.7.7 0 0 1 .65-.98z" opacity={0.4} />
        <path fill="currentColor" d="M4.14 7.7c.5 0 .96.27 1.2.7l.95 1.68 3.9-.13h7.89c.78 0 1.53.31 2.09.86l1 1.01a.25.25 0 0 1 0 .36l-1 1c-.56.56-1.3.87-2.09.87H10.2l-3.9-.13-.95 1.68c-.24.43-.7.7-1.2.7H3.5a.7.7 0 0 1-.7-.78L3.2 12l-.4-3.52a.7.7 0 0 1 .7-.78z" />
    </IconBase>
  ))
);

AirplaneFillDuotone.displayName = 'AirplaneFillDuotone';

// Triple export pattern (lucide-react style)
export { AirplaneFillDuotone, AirplaneFillDuotone as AirplaneFillDuotoneIcon, AirplaneFillDuotone as SiAirplaneFillDuotone };
export default AirplaneFillDuotone;
export type { AirplaneFillDuotoneProps };
