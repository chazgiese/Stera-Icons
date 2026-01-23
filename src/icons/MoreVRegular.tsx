import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreVRegular = memo(
  forwardRef<SVGSVGElement, MoreVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-v" {...props}>
      <path fill="currentColor" d="M12 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreVRegular.displayName = 'MoreVRegular';

// Triple export pattern (lucide-react style)
export { MoreVRegular, MoreVRegular as MoreVRegularIcon, MoreVRegular as SiMoreVRegular };
export default MoreVRegular;
export type { MoreVRegularProps };
