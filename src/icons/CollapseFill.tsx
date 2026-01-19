import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseFillProps = Omit<IconBaseProps, 'children'>;

const CollapseFill = memo(
  forwardRef<SVGSVGElement, CollapseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-fill" {...props}>
      <path fill="currentColor" d="M9 14a1 1 0 0 1 .43.1l.04.02a1 1 0 0 1 .43.45l.03.05A1 1 0 0 1 10 15v4a1 1 0 0 1-1.7.7L7 18.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L5.58 17l-1.3-1.3A1 1 0 0 1 5 14zM19 14a1 1 0 0 1 .7 1.7L18.42 17l2.3 2.3a1 1 0 0 1-1.42 1.4L17 18.42l-1.3 1.3A1 1 0 0 1 14 19v-4l.03-.24.01-.05a1 1 0 0 1 .13-.26 1 1 0 0 1 .35-.33l.05-.02.14-.06.06-.01.03-.01.1-.02H19M3.3 3.3a1 1 0 0 1 1.4 0L7 5.58l1.3-1.3A1 1 0 0 1 10 5v4l-.03.24-.01.05a1 1 0 0 1-.53.61l-.14.06h-.05l-.05.02h-.02L9 10H5a1 1 0 0 1-.7-1.7L5.58 7l-2.3-2.3a1 1 0 0 1 0-1.4M19.3 3.3a1 1 0 1 1 1.4 1.4L18.42 7l1.3 1.3A1 1 0 0 1 19 10h-4l-.17-.02h-.06a1 1 0 0 1-.32-.14 1 1 0 0 1-.33-.37l-.02-.04-.06-.14-.01-.05L14 9V5a1 1 0 0 1 1.7-.7L17 5.58z" />
    </IconBase>
  ))
);

CollapseFill.displayName = 'CollapseFill';

// Triple export pattern (lucide-react style)
export { CollapseFill, CollapseFill as CollapseFillIcon, CollapseFill as SiCollapseFill };
export default CollapseFill;
export type { CollapseFillProps };
