import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagFillDuotone = memo(
  forwardRef<SVGSVGElement, HandbagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-fill-duotone" {...props}>
      <path d="M15.24 8.5c1 0 1.8-.02 2.48.27a3.5 3.5 0 0 1 1.44 1.1c.45.58.64 1.36.9 2.33l.54 2q.36 1.25.52 2.1c.1.57.14 1.13-.03 1.69a3.5 3.5 0 0 1-1.52 2c-.5.3-1.05.4-1.63.46q-.87.06-2.16.05H8.22q-1.3.01-2.16-.05a4 4 0 0 1-1.63-.47 3.5 3.5 0 0 1-1.52-2 4 4 0 0 1-.03-1.68q.16-.85.52-2.1l.54-2c.26-.97.45-1.75.9-2.34a3.5 3.5 0 0 1 1.44-1.1c.68-.28 1.48-.26 2.48-.26z" opacity={.4} />
        <path d="M12 3.5A4.5 4.5 0 0 1 16.5 8v.52q-.57-.02-1.26-.02h-.74V8a2.5 2.5 0 0 0-5 0v.5h-.74q-.69 0-1.26.02V8A4.5 4.5 0 0 1 12 3.5" />
    </IconBase>
  ))
);

HandbagFillDuotone.displayName = 'HandbagFillDuotone';

// Triple export pattern (lucide-react style)
export { HandbagFillDuotone, HandbagFillDuotone as HandbagFillDuotoneIcon, HandbagFillDuotone as SiHandbagFillDuotone };
export default HandbagFillDuotone;
export type { HandbagFillDuotoneProps };
