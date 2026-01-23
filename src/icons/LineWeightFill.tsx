import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightFillProps = Omit<IconBaseProps, 'children'>;

const LineWeightFill = memo(
  forwardRef<SVGSVGElement, LineWeightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-weight-fill" {...props}>
      <path fill="currentColor" d="M18.75 14c1.24 0 2.25 1 2.25 2.25v2.5c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75v-2.5C3 15.01 4 14 5.25 14zM19 7a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2zM20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

LineWeightFill.displayName = 'LineWeightFill';

// Triple export pattern (lucide-react style)
export { LineWeightFill, LineWeightFill as LineWeightFillIcon, LineWeightFill as SiLineWeightFill };
export default LineWeightFill;
export type { LineWeightFillProps };
