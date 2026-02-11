import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFillDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-fill-duotone" {...props}>
      <path d="M14.75 8.98q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37a2.75 2.75 0 0 1-2.41-4.07l3.9-7.14q.38-.74.39-1.56V4h5.5z" opacity={.4} />
        <path d="M15 2a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskFillDuotone.displayName = 'FlaskFillDuotone';

// Triple export pattern (lucide-react style)
export { FlaskFillDuotone, FlaskFillDuotone as FlaskFillDuotoneIcon, FlaskFillDuotone as SiFlaskFillDuotone };
export default FlaskFillDuotone;
export type { FlaskFillDuotoneProps };
