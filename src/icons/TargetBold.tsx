import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetBoldProps = Omit<IconBaseProps, 'children'>;

const TargetBold = memo(
  forwardRef<SVGSVGElement, TargetBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-bold" {...props}>
      <path fill="currentColor" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetBold.displayName = 'TargetBold';

// Triple export pattern (lucide-react style)
export { TargetBold, TargetBold as TargetBoldIcon, TargetBold as SiTargetBold };
export default TargetBold;
export type { TargetBoldProps };
