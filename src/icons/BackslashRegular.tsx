import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashRegularProps = Omit<IconBaseProps, 'children'>;

const BackslashRegular = memo(
  forwardRef<SVGSVGElement, BackslashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash" {...props}>
      <path fill="currentColor" d="M4.5 3.44a.75.75 0 0 1 1.06.07l14 16a.75.75 0 0 1-1.12.98l-14-16a.75.75 0 0 1 .07-1.05" />
    </IconBase>
  ))
);

BackslashRegular.displayName = 'BackslashRegular';

// Triple export pattern (lucide-react style)
export { BackslashRegular, BackslashRegular as BackslashRegularIcon, BackslashRegular as SiBackslashRegular };
export default BackslashRegular;
export type { BackslashRegularProps };
