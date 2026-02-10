import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetBoldProps = Omit<IconBaseProps, 'children'>;

const TargetBold = memo(
  forwardRef<SVGSVGElement, TargetBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-bold" {...props}>
      <path fill="currentColor" d="M12 9.38a2.63 2.63 0 1 1 0 5.25 2.63 2.63 0 0 1 0-5.26" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetBold.displayName = 'TargetBold';

// Triple export pattern (lucide-react style)
export { TargetBold, TargetBold as TargetBoldIcon, TargetBold as SiTargetBold };
export default TargetBold;
export type { TargetBoldProps };
