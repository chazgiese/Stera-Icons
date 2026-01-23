import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerBoldProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBold = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-checker-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 0 0-9 9h9v9a9 9 0 0 0 9-9h-9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBold.displayName = 'CircleCheckerBold';

// Triple export pattern (lucide-react style)
export { CircleCheckerBold, CircleCheckerBold as CircleCheckerBoldIcon, CircleCheckerBold as SiCircleCheckerBold };
export default CircleCheckerBold;
export type { CircleCheckerBoldProps };
