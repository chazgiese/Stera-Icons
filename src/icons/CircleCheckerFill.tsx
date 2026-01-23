import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFill = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 11H3a9 9 0 0 0 9 9zh9a9 9 0 0 0-9-9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerFill.displayName = 'CircleCheckerFill';

// Triple export pattern (lucide-react style)
export { CircleCheckerFill, CircleCheckerFill as CircleCheckerFillIcon, CircleCheckerFill as SiCircleCheckerFill };
export default CircleCheckerFill;
export type { CircleCheckerFillProps };
