import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallFillProps = Omit<IconBaseProps, 'children'>;

const TennisBallFill = memo(
  forwardRef<SVGSVGElement, TennisBallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-fill" {...props}>
      <path d="M12 2c2.37 0 4.54.82 6.25 2.2a9.98 9.98 0 0 0 0 15.6 9.96 9.96 0 0 1-12.5 0 9.98 9.98 0 0 0 0-15.6A10 10 0 0 1 12 2" />
        <path d="M4.31 5.6a8 8 0 0 1 0 12.8 9.96 9.96 0 0 1 0-12.8M19.69 5.6a9.96 9.96 0 0 1 0 12.8 8 8 0 0 1 0-12.8" />
    </IconBase>
  ))
);

TennisBallFill.displayName = 'TennisBallFill';

// Triple export pattern (lucide-react style)
export { TennisBallFill, TennisBallFill as TennisBallFillIcon, TennisBallFill as SiTennisBallFill };
export default TennisBallFill;
export type { TennisBallFillProps };
