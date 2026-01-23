import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagFillProps = Omit<IconBaseProps, 'children'>;

const HandbagFill = memo(
  forwardRef<SVGSVGElement, HandbagFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v1.04q.66.05 1.2.27a4 4 0 0 1 1.66 1.3c.51.68.72 1.57 1.02 2.78l.6 2.4q.39 1.49.56 2.48c.1.67.13 1.3-.06 1.91a4 4 0 0 1-1.75 2.24c-.55.33-1.17.46-1.84.52q-1 .07-2.54.06h-7.7q-1.54.02-2.54-.06a4 4 0 0 1-1.84-.52 4 4 0 0 1-1.75-2.24 4 4 0 0 1-.06-1.91q.17-1 .56-2.48l.6-2.4c.3-1.2.5-2.1 1.02-2.79a4 4 0 0 1 1.65-1.29Q6.34 8.1 7 8.04V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagFill.displayName = 'HandbagFill';

// Triple export pattern (lucide-react style)
export { HandbagFill, HandbagFill as HandbagFillIcon, HandbagFill as SiHandbagFill };
export default HandbagFill;
export type { HandbagFillProps };
