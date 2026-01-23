import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-bold-duotone" {...props}>
      <path fill="currentColor" d="m19 5.03-.39 11.69a5 5 0 0 1-4.24 4.77l-.18.03a21 21 0 0 1-6.38 0l-.18-.03a5 5 0 0 1-4.24-4.77L3 5.03c.02.77.55 1.28.99 1.58q.47.3 1.08.53l.32 9.51a3 3 0 0 0 2.54 2.87l.18.02a19 19 0 0 0 5.78 0l.18-.02a3 3 0 0 0 2.54-2.87l.32-9.5q.6-.23 1.08-.54c.44-.3.97-.81.99-1.58" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 2c2 0 3.85.23 5.22.62q1.05.3 1.79.77c.44.3.99.83.99 1.61s-.55 1.3-.99 1.6q-.74.49-1.79.78C14.85 7.77 13 8 11 8s-3.85-.23-5.22-.62q-1.05-.3-1.79-.77C3.55 6.3 3 5.78 3 5s.55-1.3.99-1.6q.74-.49 1.79-.78C7.15 2.23 9 2 11 2m0 2c-1.87 0-3.52.22-4.67.55q-.78.22-1.14.45.36.22 1.14.45C7.48 5.78 9.13 6 11 6s3.52-.22 4.67-.55q.78-.22 1.13-.45-.34-.22-1.13-.45C14.52 4.22 12.87 4 11 4" clipRule="evenodd" />
        <path fill="currentColor" d="M19.43 7a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.7l.07-2h.63a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.56l.06-2z" />
    </IconBase>
  ))
);

CoffeeMugBoldDuotone.displayName = 'CoffeeMugBoldDuotone';

// Triple export pattern (lucide-react style)
export { CoffeeMugBoldDuotone, CoffeeMugBoldDuotone as CoffeeMugBoldDuotoneIcon, CoffeeMugBoldDuotone as SiCoffeeMugBoldDuotone };
export default CoffeeMugBoldDuotone;
export type { CoffeeMugBoldDuotoneProps };
