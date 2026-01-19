import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BackslashFillProps = Omit<IconBaseProps, 'children'>;

const BackslashFill = memo(
  forwardRef<SVGSVGElement, BackslashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-fill" {...props}>
      <path fill="currentColor" d="M5.12 2a1.5 1.5 0 0 0-2.24 2l16 18a1.5 1.5 0 0 0 2.24-2z" />
    </IconBase>
  ))
);

BackslashFill.displayName = 'BackslashFill';

// Triple export pattern (lucide-react style)
export { BackslashFill, BackslashFill as BackslashFillIcon, BackslashFill as SiBackslashFill };
export default BackslashFill;
export type { BackslashFillProps };
