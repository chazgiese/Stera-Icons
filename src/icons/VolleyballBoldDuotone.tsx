import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballBoldDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-bold-duotone" {...props}>
      <path d="M4.54 12.03a15.5 15.5 0 0 0 3.15 7.88 9 9 0 0 0 3.91 1.08 13.2 13.2 0 0 1-5.05-9q-.6-.08-1.1-.06-.5 0-.91.1M13.63 16.37c4.37-2.7 6.02-6.03 6.12-8.95a9 9 0 0 1 1.21 3.73c-1.02 2.5-3.05 4.93-6.33 6.95a6 6 0 0 1-1-1.73M10.2 6.68c-2-.45-4.2-.3-6.15 1.1a9 9 0 0 1 2.92-3.24c1.27-.17 2.52-.07 3.67.19 1.86.41 3.53 1.26 4.71 2.13a11 11 0 0 1-1.11 1.66c-.95-.71-2.4-1.47-4.04-1.84" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 0 1 9.63 5.67A11 11 0 1 1 12 1M5.45 11.93a3.7 3.7 0 0 0-2.42.8 9 9 0 0 0 11.42 7.93 7 7 0 0 1-1.95-2.1l-.17-.29a9 9 0 0 1-.6-1.26 12 12 0 0 1-.67-2.3q-.16-.85-.22-1.45c-2.41-1-4.14-1.36-5.39-1.33m12.56-6.62a9 9 0 0 1-1.6 3.62 27 27 0 0 1-3.6 4.04c.06.46.14 1.07.3 1.74a10 10 0 0 0 .96 2.57 5 5 0 0 0 2.71 2.34 9 9 0 0 0 1.23-14.31M12 3a9 9 0 0 0-8.85 7.37 6.3 6.3 0 0 1 2.94-.43c1.5.09 3.29.55 5.48 1.46a24 24 0 0 0 3.2-3.6q1.6-2.35 1.24-3.86A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBoldDuotone.displayName = 'VolleyballBoldDuotone';

// Triple export pattern (lucide-react style)
export { VolleyballBoldDuotone, VolleyballBoldDuotone as VolleyballBoldDuotoneIcon, VolleyballBoldDuotone as SiVolleyballBoldDuotone };
export default VolleyballBoldDuotone;
export type { VolleyballBoldDuotoneProps };
