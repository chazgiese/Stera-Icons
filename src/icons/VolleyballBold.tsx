import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldProps = Omit<IconBaseProps, 'children'>;

const VolleyballBold = memo(
  forwardRef<SVGSVGElement, VolleyballBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 0 1 8.75 5.16A10 10 0 1 1 12 2M7.22 12.11c.55 3.79 2.3 6.15 4.46 7.88a8 8 0 0 0 2.3-.24 7 7 0 0 1-1.77-2.06c-.6-1.04-.94-2.18-1.13-3.13l-.05.04-.1-.9-.07-.5c-1.5-.62-2.69-.95-3.64-1.09m-2.02.03q-.72.19-1.17.57a8 8 0 0 0 3.7 6.06 14 14 0 0 1-2.53-6.63m14.8-.49c-.97 2.12-2.74 4.15-5.48 5.86q.68.84 1.77 1.24a8 8 0 0 0 3.7-7.1m-2.52-5.48a8.5 8.5 0 0 1-1.42 3.13q-.36.5-.77 1-1.1 1.35-2.45 2.62c.08.7.25 1.8.67 2.86 3.83-2.4 5.27-5.32 5.36-7.88a8 8 0 0 0-1.39-1.73m-7.12 1.14a6.6 6.6 0 0 0-5.44.96q-.52.98-.75 2.1.82-.3 1.9-.33c1.46-.03 3.26.37 5.52 1.3q1.3-1.24 2.28-2.46a10 10 0 0 0-3.51-1.57M12 4c-1.5 0-2.92.42-4.12 1.14 1-.08 2 .01 2.91.22 1.65.36 3.12 1.1 4.2 1.86q.75-1.43.53-2.4A8 8 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBold.displayName = 'VolleyballBold';

// Triple export pattern (lucide-react style)
export { VolleyballBold, VolleyballBold as VolleyballBoldIcon, VolleyballBold as SiVolleyballBold };
export default VolleyballBold;
export type { VolleyballBoldProps };
