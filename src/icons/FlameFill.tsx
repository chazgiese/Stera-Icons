import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameFillProps = Omit<IconBaseProps, 'children'>;

const FlameFill = memo(
  forwardRef<SVGSVGElement, FlameFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.37 1.22a1 1 0 0 1 1.26 0 37.47 37.47 0 0 1 4.13 4.06 24 24 0 0 1 2.87 4.05C20.42 10.79 21 12.39 21 14a9 9 0 0 1-18 0c0-1.6.58-3.21 1.37-4.67.8-1.47 1.85-2.86 2.87-4.05a38 38 0 0 1 4.13-4.06M12 11.5s-3.5 3-3.5 6c0 2.5 2 3.5 3.5 3.5s3.5-1 3.5-3.5c0-3-3.5-6-3.5-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameFill.displayName = 'FlameFill';

// Triple export pattern (lucide-react style)
export { FlameFill, FlameFill as FlameFillIcon, FlameFill as SiFlameFill };
export default FlameFill;
export type { FlameFillProps };
