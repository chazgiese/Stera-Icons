import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreVBold = memo(
  forwardRef<SVGSVGElement, MoreVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-v-bold" {...props}>
      <path d="M12 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 21.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </IconBase>
  ))
);

MoreVBold.displayName = 'MoreVBold';

// Triple export pattern (lucide-react style)
export { MoreVBold, MoreVBold as MoreVBoldIcon, MoreVBold as SiMoreVBold };
export default MoreVBold;
export type { MoreVBoldProps };
