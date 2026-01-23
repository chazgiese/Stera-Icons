import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugFillProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugFill = memo(
  forwardRef<SVGSVGElement, CoffeeMugFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 2c2 0 3.85.23 5.22.62q1.05.3 1.79.77c.44.3.99.83.99 1.61v.07L18.93 7h.5a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.7l-.02.72a5 5 0 0 1-4.24 4.77l-.18.03a21 21 0 0 1-6.38 0l-.18-.03a5 5 0 0 1-4.24-4.77L3 5.07V5c0-.78.55-1.3.99-1.6q.74-.49 1.79-.78C7.15 2.23 9 2 11 2m7.7 12h.63a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.56zM11 4c-1.87 0-3.52.22-4.67.55q-.78.22-1.14.45.23.14.62.28l.55.18a12 12 0 0 0 2.06.4 21 21 0 0 0 3.62.11 21 21 0 0 0 2.52-.26 12 12 0 0 0 1.63-.43q.39-.15.61-.28-.34-.22-1.13-.45C14.52 4.22 12.87 4 11 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugFill.displayName = 'CoffeeMugFill';

// Triple export pattern (lucide-react style)
export { CoffeeMugFill, CoffeeMugFill as CoffeeMugFillIcon, CoffeeMugFill as SiCoffeeMugFill };
export default CoffeeMugFill;
export type { CoffeeMugFillProps };
