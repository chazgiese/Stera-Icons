import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseBoldProps = Omit<IconBaseProps, 'children'>;

const CollapseBold = memo(
  forwardRef<SVGSVGElement, CollapseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-bold" {...props}>
      <path fill="currentColor" d="M9 14a1 1 0 0 1 .94.67l.02.04.01.06.03.23v4a1 1 0 0 1-2 0v-1.59l-3.3 3.3a1 1 0 0 1-1.4-1.42L6.58 16H5a1 1 0 0 1 0-2zM19 14a1 1 0 0 1 0 2h-1.59l3.3 3.3a1 1 0 0 1-1.42 1.4L16 17.42V19a1 1 0 0 1-2 0v-4l.03-.23.01-.06a1 1 0 0 1 .13-.26 1 1 0 0 1 .35-.33l.05-.02.14-.06.06-.01.03-.01.1-.01.1-.01zM3.3 3.3a1 1 0 0 1 1.4 0L8 6.58V5a1 1 0 1 1 2 0v4l-.03.24-.01.05-.02.04a1 1 0 0 1-.53.58l-.03.01-.05.02-.04.02h-.05l-.05.02h-.02L9.1 10H5a1 1 0 0 1 0-2h1.59l-3.3-3.3a1 1 0 0 1 0-1.4M19.3 3.3a1 1 0 1 1 1.4 1.4L17.42 8H19a1 1 0 0 1 0 2h-4.1l-.07-.02h-.03l-.04-.01-.05-.01-.04-.02-.05-.02-.03-.01a1 1 0 0 1-.55-.62l-.01-.05L14 9V5a1 1 0 1 1 2 0v1.59z" />
    </IconBase>
  ))
);

CollapseBold.displayName = 'CollapseBold';

// Triple export pattern (lucide-react style)
export { CollapseBold, CollapseBold as CollapseBoldIcon, CollapseBold as SiCollapseBold };
export default CollapseBold;
export type { CollapseBoldProps };
