import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskBoldProps = Omit<IconBaseProps, 'children'>;

const FlaskBold = memo(
  forwardRef<SVGSVGElement, FlaskBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 2a1 1 0 0 1 .1 2H15v4.98q0 .77.37 1.44l3.9 7.14A3 3 0 0 1 16.62 22H7.37a3 3 0 0 1-2.63-4.44l3.9-7.14A3 3 0 0 0 9 8.98V4a1 1 0 0 1 0-2zm-4 6.98a5 5 0 0 1-.61 2.4l-3.9 7.14A1 1 0 0 0 7.37 20h9.26a1 1 0 0 0 .88-1.48l-3.9-7.15A5 5 0 0 1 13 8.98V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskBold.displayName = 'FlaskBold';

// Triple export pattern (lucide-react style)
export { FlaskBold, FlaskBold as FlaskBoldIcon, FlaskBold as SiFlaskBold };
export default FlaskBold;
export type { FlaskBoldProps };
