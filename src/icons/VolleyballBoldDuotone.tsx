import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballBoldDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-bold-duotone" {...props}>
      <path d="M6.1 12.04q.5-.02 1.12.07c.55 3.79 2.3 6.15 4.46 7.88a8 8 0 0 1-3.94-1.22 14 14 0 0 1-2.54-6.62q.4-.1.9-.11M19 8.13c.58 1.05.94 2.24 1 3.52-.97 2.12-2.74 4.15-5.49 5.86a5 5 0 0 1-1-1.73c3.83-2.4 5.27-5.32 5.36-7.88zM7.88 5.14q1.52-.1 2.92.22c1.64.36 3.11 1.1 4.18 1.86a10 10 0 0 1-1.11 1.67 10 10 0 0 0-3.51-1.58 6.6 6.6 0 0 0-5.44.96 8 8 0 0 1 2.96-3.13" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 0 1 8.75 5.16A10 10 0 1 1 12 2M6.1 12.04c-.95.02-1.6.29-2.07.67a8 8 0 0 0 9.95 7.04 7 7 0 0 1-1.77-2.06c-.6-1.04-.94-2.18-1.13-3.13l-.05.04-.1-.9-.07-.5c-2.13-.88-3.66-1.19-4.75-1.16m11.38-5.87a8.5 8.5 0 0 1-1.42 3.13q-.36.5-.77 1-1.1 1.35-2.45 2.62c.1.92.36 2.47 1.1 3.78a4.3 4.3 0 0 0 2.35 2.05 8 8 0 0 0 1.19-12.58M12 4a8 8 0 0 0-7.83 6.37q.82-.3 1.9-.33c1.46-.03 3.26.37 5.52 1.3a22 22 0 0 0 2.82-3.18c.95-1.38 1.29-2.48 1.11-3.34A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBoldDuotone.displayName = 'VolleyballBoldDuotone';

// Triple export pattern (lucide-react style)
export { VolleyballBoldDuotone, VolleyballBoldDuotone as VolleyballBoldDuotoneIcon, VolleyballBoldDuotone as SiVolleyballBoldDuotone };
export default VolleyballBoldDuotone;
export type { VolleyballBoldDuotoneProps };
