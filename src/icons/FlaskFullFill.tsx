import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullFillProps = Omit<IconBaseProps, 'children'>;

const FlaskFullFill = memo(
  forwardRef<SVGSVGElement, FlaskFullFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full-fill" {...props}>
      <path fillRule="evenodd" d="M15 2a1 1 0 0 1 .1 2H15v4.98q0 .77.37 1.44l3.9 7.14A3 3 0 0 1 16.62 22H7.37l-.24-.01h-.06a3 3 0 0 1-1.52-.6 1 1 0 0 1-.41-.38 3 3 0 0 1-.36-.5l-.03-.05-.07-.12-.02-.06-.06-.13-.02-.06a3 3 0 0 1-.2-1.42v-.04q.02-.07.03-.16l.02-.07q0-.08.03-.14l.02-.07.01-.06.05-.13v-.02q.08-.21.2-.42l3.9-7.14A3 3 0 0 0 9 8.98V4a1 1 0 0 1 0-2zm-4 6.98a5 5 0 0 1-.61 2.4L8.85 14.2l.1.05c.9.38 1.94.29 2.75-.25a5 5 0 0 1 2.9-.83l-.99-1.8A5 5 0 0 1 13 8.98V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullFill.displayName = 'FlaskFullFill';

// Triple export pattern (lucide-react style)
export { FlaskFullFill, FlaskFullFill as FlaskFullFillIcon, FlaskFullFill as SiFlaskFullFill };
export default FlaskFullFill;
export type { FlaskFullFillProps };
