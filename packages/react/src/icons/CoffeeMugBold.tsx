import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoffeeMugBoldProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugBold = memo(
  forwardRef<SVGSVGElement, CoffeeMugBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 2c2 0 3.85.23 5.22.62q1.05.3 1.79.77c.44.3.99.83.99 1.61v.03L18.93 7h.5a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.7l-.02.72a5 5 0 0 1-4.24 4.77l-.18.03a21 21 0 0 1-6.38 0l-.18-.03a5 5 0 0 1-4.24-4.77L3 5.03V5c0-.78.55-1.3.99-1.6q.74-.49 1.79-.78C7.15 2.23 9 2 11 2m5.93 5.14q-.34.13-.7.24C14.84 7.77 13 8 11 8s-3.85-.23-5.22-.62l-.7-.24.3 9.51a3 3 0 0 0 2.55 2.87l.18.02a19 19 0 0 0 5.78 0l.18-.02a3 3 0 0 0 2.54-2.87zM18.7 14h.63a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.56zM11 4c-1.87 0-3.52.22-4.67.55q-.78.22-1.14.45.36.22 1.14.45C7.48 5.78 9.13 6 11 6s3.52-.22 4.67-.55q.78-.22 1.13-.45-.34-.22-1.13-.45C14.52 4.22 12.87 4 11 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugBold.displayName = 'CoffeeMugBold';

export { CoffeeMugBold };
export type { CoffeeMugBoldProps };
