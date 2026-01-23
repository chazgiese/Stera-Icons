import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFillDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-fill-duotone" {...props}>
      <path fill="currentColor" d="M15 8.85a3 3 0 0 0 .46 1.6l4.98 7.96A3 3 0 0 1 17.89 23H6.11a3 3 0 0 1-2.55-4.59l4.98-7.97A3 3 0 0 0 9 8.85V3h6z" opacity={.4} />
        <path fill="currentColor" d="M15 1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskFillDuotone.displayName = 'FlaskFillDuotone';

// Triple export pattern (lucide-react style)
export { FlaskFillDuotone, FlaskFillDuotone as FlaskFillDuotoneIcon, FlaskFillDuotone as SiFlaskFillDuotone };
export default FlaskFillDuotone;
export type { FlaskFillDuotoneProps };
