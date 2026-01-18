import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreVBold = memo(
  forwardRef<SVGSVGElement, MoreVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </IconBase>
  ))
);

MoreVBold.displayName = 'MoreVBold';

// Triple export pattern (lucide-react style)
export { MoreVBold, MoreVBold as MoreVBoldIcon, MoreVBold as SiMoreVBold };
export type { MoreVBoldProps };
