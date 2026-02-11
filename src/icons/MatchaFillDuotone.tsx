import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MatchaFillDuotone = memo(
  forwardRef<SVGSVGElement, MatchaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="matcha-fill-duotone" {...props}>
      <path d="M21.07 11.55C22.21 12.45 23 13.6 23 15c0 1.96-1.57 3.47-3.48 4.43A17 17 0 0 1 12 21a17 17 0 0 1-7.52-1.57C2.57 18.47 1 16.96 1 15c0-1.4.79-2.55 1.93-3.45q.18.4.4.8A9 9 0 0 0 11.2 17h1.6a9 9 0 0 0 8.27-5.45" opacity={.4} />
        <path fillRule="evenodd" d="M12 3c2.55 0 4.9.29 6.63.77.86.24 1.63.54 2.21.92.54.35 1.16.94 1.16 1.81q0 .15-.03.31l-.22 2.13A9 9 0 0 1 12.8 17h-1.6a9 9 0 0 1-8.95-8.06l-.22-2.13Q2 6.66 2 6.5c0-.87.62-1.46 1.16-1.8a8 8 0 0 1 2.2-.93C7.12 3.29 9.47 3 12 3m0 2c-2.42 0-4.58.27-6.1.7a6 6 0 0 0-1.82.8q.07.08.29.2.54.34 1.64.63l.2.05C7.71 7.76 9.74 8 12 8s4.3-.24 5.79-.62l.2-.05q1.1-.3 1.64-.62.22-.14.3-.21l-.19-.14a6 6 0 0 0-1.64-.66A24 24 0 0 0 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaFillDuotone.displayName = 'MatchaFillDuotone';

// Triple export pattern (lucide-react style)
export { MatchaFillDuotone, MatchaFillDuotone as MatchaFillDuotoneIcon, MatchaFillDuotone as SiMatchaFillDuotone };
export default MatchaFillDuotone;
export type { MatchaFillDuotoneProps };
