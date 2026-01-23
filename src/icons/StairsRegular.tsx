import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsRegularProps = Omit<IconBaseProps, 'children'>;

const StairsRegular = memo(
  forwardRef<SVGSVGElement, StairsRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs" {...props}>
      <path fill="currentColor" d="M22.5 2.75a.75.75 0 0 1 0 1.5h-4.92v5.92c0 .41-.33.75-.75.75h-5.91v5.91c0 .42-.34.75-.75.75H4.25v4.92a.75.75 0 0 1-1.5 0v-5.67c0-.41.34-.75.75-.75h5.92v-5.91c0-.42.33-.75.75-.75h5.91V3.5c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

StairsRegular.displayName = 'StairsRegular';

// Triple export pattern (lucide-react style)
export { StairsRegular, StairsRegular as StairsRegularIcon, StairsRegular as SiStairsRegular };
export default StairsRegular;
export type { StairsRegularProps };
