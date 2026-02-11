import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugBoldProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugBold = memo(
  forwardRef<SVGSVGElement, CoffeeMugBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-bold" {...props}>
      <path fillRule="evenodd" d="M10.75 3c1.87 0 3.6.23 4.9.63.63.2 1.22.45 1.68.78.43.32.92.84.92 1.59v.03L18.2 7h.47a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.69a4.9 4.9 0 0 1-4.2 4.58q-2.94.43-5.89 0a4.9 4.9 0 0 1-4.2-4.68l-.35-9.86V6c0-.75.5-1.27.92-1.59a6 6 0 0 1 1.69-.78c1.3-.4 3.02-.63 4.89-.63m5.42 5.19-.53.18c-1.3.4-3.02.63-4.89.63s-3.6-.23-4.9-.63l-.52-.18.27 7.64a2.9 2.9 0 0 0 2.49 2.77q2.66.39 5.32 0a2.9 2.9 0 0 0 2.5-2.77zm1.8 5.81h.61a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.54zm-7.22-9c-1.72 0-3.24.22-4.3.54Q5.7 5.78 5.4 6q.3.21 1.05.46c1.06.32 2.58.54 4.3.54s3.24-.22 4.3-.54q.74-.24 1.05-.46-.3-.21-1.05-.46a15 15 0 0 0-4.3-.54" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugBold.displayName = 'CoffeeMugBold';

// Triple export pattern (lucide-react style)
export { CoffeeMugBold, CoffeeMugBold as CoffeeMugBoldIcon, CoffeeMugBold as SiCoffeeMugBold };
export default CoffeeMugBold;
export type { CoffeeMugBoldProps };
