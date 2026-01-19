import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleBold = memo(
  forwardRef<SVGSVGElement, ExpandSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-bold" {...props}>
      <path fill="currentColor" d="M8.3 14.3a1 1 0 1 1 1.4 1.4L5.42 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59zM21 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L18.58 4H15a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ExpandSimpleBold.displayName = 'ExpandSimpleBold';

// Triple export pattern (lucide-react style)
export { ExpandSimpleBold, ExpandSimpleBold as ExpandSimpleBoldIcon, ExpandSimpleBold as SiExpandSimpleBold };
export default ExpandSimpleBold;
export type { ExpandSimpleBoldProps };
