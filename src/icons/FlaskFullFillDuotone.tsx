import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullFillDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.75 8.98q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37a2.75 2.75 0 0 1-2.41-4.07l3.9-7.14q.38-.74.39-1.56V4h5.5zm-.26 3.94a3 3 0 0 0-1.81.53 4.7 4.7 0 0 1-3.61.67.54.54 0 0 0-.6.25l-2.2 4.03c-.45.83.15 1.85 1.1 1.85h9.26c.95 0 1.55-1.02 1.1-1.85l-2.85-5.23a.5.5 0 0 0-.4-.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.49 12.92q.25.01.39.25l2.85 5.23c.45.83-.15 1.85-1.1 1.85H7.37a1.25 1.25 0 0 1-1.1-1.85l2.2-4.03c.11-.21.36-.3.6-.25 1.23.27 2.53.04 3.6-.67a3 3 0 0 1 1.82-.53M15 2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskFullFillDuotone.displayName = 'FlaskFullFillDuotone';

// Triple export pattern (lucide-react style)
export { FlaskFullFillDuotone, FlaskFullFillDuotone as FlaskFullFillDuotoneIcon, FlaskFullFillDuotone as SiFlaskFullFillDuotone };
export default FlaskFullFillDuotone;
export type { FlaskFullFillDuotoneProps };
