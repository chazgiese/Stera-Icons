import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreVRegular = memo(
  forwardRef<SVGSVGElement, MoreVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreVRegular.displayName = 'MoreVRegular';

// Triple export pattern (lucide-react style)
export { MoreVRegular, MoreVRegular as MoreVRegularIcon, MoreVRegular as SiMoreVRegular };
export type { MoreVRegularProps };
