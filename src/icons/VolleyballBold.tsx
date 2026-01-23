import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldProps = Omit<IconBaseProps, 'children'>;

const VolleyballBold = memo(
  forwardRef<SVGSVGElement, VolleyballBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 0 1 9.63 5.67A11 11 0 1 1 12 1M6.55 12c.6 4.33 2.59 7.03 5.05 8.99a9 9 0 0 0 2.85-.33 7 7 0 0 1-1.95-2.1l-.17-.29a11 11 0 0 1-1.08-2.72 15 15 0 0 1-.41-2.29A17 17 0 0 0 6.55 12m-2.01.03q-.94.2-1.51.7a9 9 0 0 0 4.66 7.17c-1.57-2-2.73-4.53-3.15-7.87m16.42-.89c-1.02 2.5-3.05 4.94-6.33 6.96a4.6 4.6 0 0 0 2.15 1.52 9 9 0 0 0 4.18-8.48M18 5.31a9 9 0 0 1-1.6 3.62 27 27 0 0 1-3.6 4.04c.06.46.14 1.07.3 1.74q.18.8.52 1.66c4.37-2.71 6.02-6.03 6.12-8.95A9 9 0 0 0 18 5.3M10.2 6.68c-2-.45-4.2-.3-6.15 1.1q-.64 1.2-.9 2.59a6.3 6.3 0 0 1 2.94-.43c1.5.09 3.29.55 5.48 1.46a27 27 0 0 0 2.66-2.88 11 11 0 0 0-4.03-1.84M12 3c-1.86 0-3.6.57-5.03 1.54 1.26-.17 2.51-.07 3.67.19 1.86.41 3.53 1.26 4.71 2.13q.95-1.72.66-2.92A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBold.displayName = 'VolleyballBold';

// Triple export pattern (lucide-react style)
export { VolleyballBold, VolleyballBold as VolleyballBoldIcon, VolleyballBold as SiVolleyballBold };
export default VolleyballBold;
export type { VolleyballBoldProps };
