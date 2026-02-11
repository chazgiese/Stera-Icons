import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckFillProps = Omit<IconBaseProps, 'children'>;

const CheckFill = memo(
  forwardRef<SVGSVGElement, CheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-fill" {...props}>
      <path d="M18.9 4.98a1.5 1.5 0 0 1 2.2 2.04L10.57 18.3l-.37.38a2 2 0 0 1-2.88-.2q-.18-.23-.32-.43L2.77 12a1.5 1.5 0 1 1 2.46-1.72l3.74 5.34z" />
    </IconBase>
  ))
);

CheckFill.displayName = 'CheckFill';

// Triple export pattern (lucide-react style)
export { CheckFill, CheckFill as CheckFillIcon, CheckFill as SiCheckFill };
export default CheckFill;
export type { CheckFillProps };
