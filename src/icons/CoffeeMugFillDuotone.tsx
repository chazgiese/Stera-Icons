import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugFillDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-fill-duotone" {...props}>
      <path fill="currentColor" d="M19 5.03v.04l-.39 11.65a5 5 0 0 1-4.24 4.77l-.18.03a21 21 0 0 1-6.38 0l-.18-.03a5 5 0 0 1-4.24-4.77L3 5.07v-.04c.02.77.55 1.28.99 1.58q.74.47 1.79.77C7.15 7.77 9 8 11 8s3.85-.23 5.22-.62q1.05-.3 1.79-.77c.44-.3.97-.81.99-1.58" opacity={.4} />
        <path fill="currentColor" d="M19.43 7a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.7l.07-2h.63a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.56l.06-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M11 2c2 0 3.85.23 5.22.62q1.05.3 1.79.77c.44.3.99.83.99 1.61s-.55 1.3-.99 1.6q-.74.49-1.79.78C14.85 7.77 13 8 11 8s-3.85-.23-5.22-.62q-1.05-.3-1.79-.77C3.55 6.3 3 5.78 3 5s.55-1.3.99-1.6q.74-.49 1.79-.78C7.15 2.23 9 2 11 2m0 2c-1.87 0-3.52.22-4.67.55q-.78.22-1.14.45.36.22 1.14.45C7.48 5.78 9.13 6 11 6s3.52-.22 4.67-.55q.78-.22 1.13-.45-.34-.22-1.13-.45C14.52 4.22 12.87 4 11 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugFillDuotone.displayName = 'CoffeeMugFillDuotone';

// Triple export pattern (lucide-react style)
export { CoffeeMugFillDuotone, CoffeeMugFillDuotone as CoffeeMugFillDuotoneIcon, CoffeeMugFillDuotone as SiCoffeeMugFillDuotone };
export default CoffeeMugFillDuotone;
export type { CoffeeMugFillDuotoneProps };
