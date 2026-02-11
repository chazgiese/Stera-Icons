import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M18.25 6.04 18.2 7h.47a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.69a4.9 4.9 0 0 1-4.2 4.58q-2.94.43-5.89 0a4.9 4.9 0 0 1-4.2-4.68l-.35-9.86v-.01c.01.73.5 1.25.92 1.56q.5.35 1.16.6l.27 7.64a2.9 2.9 0 0 0 2.49 2.77c1.76.26 3.56.26 5.32 0a2.9 2.9 0 0 0 2.5-2.77l.26-7.64q.66-.26 1.16-.6c.42-.31.9-.83.92-1.57zM17.97 14h.61a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.54z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M10.75 3c1.87 0 3.6.23 4.9.63.63.2 1.22.45 1.68.78.43.32.92.84.92 1.59s-.5 1.27-.92 1.59a6 6 0 0 1-1.69.78c-1.3.4-3.02.63-4.89.63s-3.6-.23-4.9-.63a6 6 0 0 1-1.68-.78c-.43-.32-.92-.84-.92-1.59s.5-1.27.92-1.59a6 6 0 0 1 1.69-.78c1.3-.4 3.02-.63 4.89-.63m0 2c-1.72 0-3.24.22-4.3.54Q5.7 5.78 5.4 6q.3.21 1.05.46c1.06.32 2.58.54 4.3.54s3.24-.22 4.3-.54q.74-.24 1.05-.46-.3-.21-1.05-.46a15 15 0 0 0-4.3-.54" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugBoldDuotone.displayName = 'CoffeeMugBoldDuotone';

// Triple export pattern (lucide-react style)
export { CoffeeMugBoldDuotone, CoffeeMugBoldDuotone as CoffeeMugBoldDuotoneIcon, CoffeeMugBoldDuotone as SiCoffeeMugBoldDuotone };
export default CoffeeMugBoldDuotone;
export type { CoffeeMugBoldDuotoneProps };
