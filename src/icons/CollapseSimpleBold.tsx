import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleBold = memo(
  forwardRef<SVGSVGElement, CollapseSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-bold" {...props}>
      <path d="M9 14a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-2.59l-4.3 4.3a1 1 0 0 1-1.4-1.42L6.58 16H4a1 1 0 0 1 0-2zM20.3 2.3a1 1 0 1 1 1.4 1.4L17.42 8H20a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v2.59z" />
    </IconBase>
  ))
);

CollapseSimpleBold.displayName = 'CollapseSimpleBold';

// Triple export pattern (lucide-react style)
export { CollapseSimpleBold, CollapseSimpleBold as CollapseSimpleBoldIcon, CollapseSimpleBold as SiCollapseSimpleBold };
export default CollapseSimpleBold;
export type { CollapseSimpleBoldProps };
