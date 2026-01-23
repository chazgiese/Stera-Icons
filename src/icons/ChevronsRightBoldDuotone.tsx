import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M4.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4" opacity={.4} />
        <path fill="currentColor" d="M12.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronsRightBoldDuotone.displayName = 'ChevronsRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronsRightBoldDuotone, ChevronsRightBoldDuotone as ChevronsRightBoldDuotoneIcon, ChevronsRightBoldDuotone as SiChevronsRightBoldDuotone };
export default ChevronsRightBoldDuotone;
export type { ChevronsRightBoldDuotoneProps };
