import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneFillProps = Omit<IconBaseProps, 'children'>;

const AirplaneFill = memo(
  forwardRef<SVGSVGElement, AirplaneFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-fill" {...props}>
      <path fill="currentColor" d="M8.97 3a2 2 0 0 1 1.63.84L15 10h3.76a3 3 0 0 1 2.12.88l.77.77c.2.2.2.51 0 .7l-.77.77a3 3 0 0 1-2.12.88H15l-4.4 6.16a2 2 0 0 1-1.63.84H7.76a.5.5 0 0 1-.46-.7L10 14l-4.5-.15-1.14 2.02c-.22.39-.64.63-1.09.63h-.71a.5.5 0 0 1-.5-.56L2.5 12l-.44-3.95a.5.5 0 0 1 .5-.55h.71c.45 0 .87.24 1.09.63l1.14 2.02L10 10 7.3 3.7a.5.5 0 0 1 .46-.7z" />
    </IconBase>
  ))
);

AirplaneFill.displayName = 'AirplaneFill';

// Triple export pattern (lucide-react style)
export { AirplaneFill, AirplaneFill as AirplaneFillIcon, AirplaneFill as SiAirplaneFill };
export default AirplaneFill;
export type { AirplaneFillProps };
