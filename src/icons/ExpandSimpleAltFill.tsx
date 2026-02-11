import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltFill = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-alt-fill" {...props}>
      <path d="M14.3 14.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3A1 1 0 0 1 22 15v6a1 1 0 0 1-.12.47 1 1 0 0 1-.59.49l-.06.01-.03.01h-.04L21 22h-6a1 1 0 0 1-.7-1.7l2.29-2.3-2.3-2.3a1 1 0 0 1 0-1.4M9 2a1 1 0 0 1 .7 1.7L7.42 6l2.3 2.3a1 1 0 1 1-1.42 1.4L6 7.42l-2.3 2.3A1 1 0 0 1 2 9V3l.03-.24.01-.05a1 1 0 0 1 .13-.26 1 1 0 0 1 .35-.33l.05-.02.14-.06.06-.01.03-.01.1-.02H9" />
    </IconBase>
  ))
);

ExpandSimpleAltFill.displayName = 'ExpandSimpleAltFill';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltFill, ExpandSimpleAltFill as ExpandSimpleAltFillIcon, ExpandSimpleAltFill as SiExpandSimpleAltFill };
export default ExpandSimpleAltFill;
export type { ExpandSimpleAltFillProps };
