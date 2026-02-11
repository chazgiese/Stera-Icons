import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugFillProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugFill = memo(
  forwardRef<SVGSVGElement, CoffeeMugFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-fill" {...props}>
      <path fillRule="evenodd" d="M10.75 3c1.87 0 3.6.23 4.9.63.63.2 1.22.45 1.68.78.43.32.92.84.92 1.59v.08l-.03.92h.46a3 3 0 0 1 3 3.1l-.1 3a3 3 0 0 1-3 2.9h-.69a4.9 4.9 0 0 1-4.2 4.58q-2.94.43-5.89 0a4.9 4.9 0 0 1-4.2-4.68l-.35-9.82V6c0-.75.5-1.27.92-1.59a6 6 0 0 1 1.69-.78c1.3-.4 3.02-.63 4.89-.63m7.22 11h.61a1 1 0 0 0 1-.97l.1-3a1 1 0 0 0-1-1.03h-.54zm-7.22-9c-1.72 0-3.24.22-4.3.54Q5.7 5.78 5.4 6q.3.22 1.01.45h.04c.84.27 1.96.45 3.25.52a20 20 0 0 0 2.1 0c1.28-.07 2.41-.25 3.25-.51l.03-.01q.72-.23 1.02-.45-.3-.21-1.05-.46a15 15 0 0 0-4.3-.54" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugFill.displayName = 'CoffeeMugFill';

// Triple export pattern (lucide-react style)
export { CoffeeMugFill, CoffeeMugFill as CoffeeMugFillIcon, CoffeeMugFill as SiCoffeeMugFill };
export default CoffeeMugFill;
export type { CoffeeMugFillProps };
