import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsBoldProps = Omit<IconBaseProps, 'children'>;

const StairsBold = memo(
  forwardRef<SVGSVGElement, StairsBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-bold" {...props}>
      <path d="M21.5 3.5a1 1 0 1 1 0 2h-4v5a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1h-5v4a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

StairsBold.displayName = 'StairsBold';

// Triple export pattern (lucide-react style)
export { StairsBold, StairsBold as StairsBoldIcon, StairsBold as SiStairsBold };
export default StairsBold;
export type { StairsBoldProps };
