import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XFillProps = Omit<IconBaseProps, 'children'>;

const XFill = memo(
  forwardRef<SVGSVGElement, XFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-fill" {...props}>
      <path fill="currentColor" d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l5.94 5.94a1.5 1.5 0 1 1-2.12 2.12L12 14.12l-5.94 5.94a1.5 1.5 0 1 1-2.12-2.12L9.88 12 3.94 6.06a1.5 1.5 0 1 1 2.12-2.12L12 9.88z" />
    </IconBase>
  ))
);

XFill.displayName = 'XFill';

// Triple export pattern (lucide-react style)
export { XFill, XFill as XFillIcon, XFill as SiXFill };
export default XFill;
export type { XFillProps };
