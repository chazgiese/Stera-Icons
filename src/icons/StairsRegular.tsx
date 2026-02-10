import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsRegularProps = Omit<IconBaseProps, 'children'>;

const StairsRegular = memo(
  forwardRef<SVGSVGElement, StairsRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs" {...props}>
      <path fill="currentColor" d="M21.5 3.75a.75.75 0 0 1 0 1.5h-4.25v5.25c0 .41-.34.75-.75.75h-5.25v5.25c0 .41-.34.75-.75.75H5.25v4.25a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75h5.25V10.5c0-.41.34-.75.75-.75h5.25V4.5c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

StairsRegular.displayName = 'StairsRegular';

// Triple export pattern (lucide-react style)
export { StairsRegular, StairsRegular as StairsRegularIcon, StairsRegular as SiStairsRegular };
export default StairsRegular;
export type { StairsRegularProps };
