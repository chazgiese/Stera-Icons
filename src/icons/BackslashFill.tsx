import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashFillProps = Omit<IconBaseProps, 'children'>;

const BackslashFill = memo(
  forwardRef<SVGSVGElement, BackslashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-fill" {...props}>
      <path fill="currentColor" d="M4.01 2.87a1.5 1.5 0 0 1 2.12.14l14 16A1.5 1.5 0 0 1 17.87 21l-14-16a1.5 1.5 0 0 1 .14-2.12" />
    </IconBase>
  ))
);

BackslashFill.displayName = 'BackslashFill';

// Triple export pattern (lucide-react style)
export { BackslashFill, BackslashFill as BackslashFillIcon, BackslashFill as SiBackslashFill };
export default BackslashFill;
export type { BackslashFillProps };
