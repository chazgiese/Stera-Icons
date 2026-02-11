import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagFillProps = Omit<IconBaseProps, 'children'>;

const HandbagFill = memo(
  forwardRef<SVGSVGElement, HandbagFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-fill" {...props}>
      <path fillRule="evenodd" d="M12 3.5A4.5 4.5 0 0 1 16.5 8v.52q.67.04 1.22.25a3.5 3.5 0 0 1 1.44 1.1c.45.58.64 1.36.9 2.33l.54 2q.36 1.25.52 2.1c.1.57.14 1.13-.03 1.69a3.5 3.5 0 0 1-1.52 2c-.5.3-1.05.4-1.63.46q-.87.06-2.16.05H8.22q-1.3.01-2.16-.05a4 4 0 0 1-1.63-.47 3.5 3.5 0 0 1-1.52-2 4 4 0 0 1-.03-1.68q.16-.85.52-2.1l.54-2c.26-.97.45-1.75.9-2.33a3.5 3.5 0 0 1 1.44-1.1q.55-.22 1.22-.25V8A4.5 4.5 0 0 1 12 3.5m0 2A2.5 2.5 0 0 0 9.5 8v.5h5V8A2.5 2.5 0 0 0 12 5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagFill.displayName = 'HandbagFill';

// Triple export pattern (lucide-react style)
export { HandbagFill, HandbagFill as HandbagFillIcon, HandbagFill as SiHandbagFill };
export default HandbagFill;
export type { HandbagFillProps };
