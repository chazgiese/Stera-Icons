import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFill = memo(
  forwardRef<SVGSVGElement, CircleSlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-fill" {...props}>
      <path d="M18.33 19.74A10 10 0 0 1 4.26 5.67zM5.67 4.26a10 10 0 0 1 14.07 14.07z" />
    </IconBase>
  ))
);

CircleSlashFill.displayName = 'CircleSlashFill';

// Triple export pattern (lucide-react style)
export { CircleSlashFill, CircleSlashFill as CircleSlashFillIcon, CircleSlashFill as SiCircleSlashFill };
export default CircleSlashFill;
export type { CircleSlashFillProps };
