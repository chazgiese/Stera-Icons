import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillProps = Omit<IconBaseProps, 'children'>;

const AtSignFill = memo(
  forwardRef<SVGSVGElement, AtSignFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-fill" {...props}>
      <path fillRule="evenodd" d="M12 1.5a10.5 10.5 0 0 1 10.45 11.55c-.28 2.78-2.07 4.72-4.35 4.7a3.7 3.7 0 0 1-3.08-1.64 5.1 5.1 0 1 1-.62-8.6 1.5 1.5 0 0 1 2.7.89v4.5c0 .84.23 1.32.43 1.55s.4.3.59.3c.29 0 1.17-.28 1.34-2q.04-.37.04-.75a7.5 7.5 0 1 0-5 7.07 1.5 1.5 0 0 1 1 2.83q-1.66.6-3.5.6a10.5 10.5 0 1 1 0-21m0 8.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFill.displayName = 'AtSignFill';

// Triple export pattern (lucide-react style)
export { AtSignFill, AtSignFill as AtSignFillIcon, AtSignFill as SiAtSignFill };
export default AtSignFill;
export type { AtSignFillProps };
