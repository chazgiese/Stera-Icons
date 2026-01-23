import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreBoldProps = Omit<IconBaseProps, 'children'>;

const MoreBold = memo(
  forwardRef<SVGSVGElement, MoreBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-bold" {...props}>
      <path fill="currentColor" d="M4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M20 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

MoreBold.displayName = 'MoreBold';

// Triple export pattern (lucide-react style)
export { MoreBold, MoreBold as MoreBoldIcon, MoreBold as SiMoreBold };
export default MoreBold;
export type { MoreBoldProps };
