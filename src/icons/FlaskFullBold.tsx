import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullBoldProps = Omit<IconBaseProps, 'children'>;

const FlaskFullBold = memo(
  forwardRef<SVGSVGElement, FlaskFullBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full-bold" {...props}>
      <path fillRule="evenodd" d="M15 2a1 1 0 1 1 0 2v4.98q0 .77.37 1.44l3.9 7.14A3 3 0 0 1 16.62 22H7.37a3 3 0 0 1-2.64-4.44l3.9-7.14A3 3 0 0 0 9 8.98V4a1 1 0 0 1 0-2zm-.17 13.2a3 3 0 0 0-2.02.46 4.9 4.9 0 0 1-4.65.43l-.28-.12-1.39 2.55A1 1 0 0 0 7.37 20h9.26a1 1 0 0 0 .88-1.48l-1.74-3.19zM11 8.98a5 5 0 0 1-.61 2.4L8.85 14.2l.1.05A2.9 2.9 0 0 0 11.7 14l.1-.07.07-.04q.24-.14.48-.26l.05-.02q.31-.15.66-.24l.04-.02.34-.08h.04q.16-.04.33-.06h.05q.35-.04.7-.04h.03l-.98-1.8A5 5 0 0 1 13 8.98V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullBold.displayName = 'FlaskFullBold';

// Triple export pattern (lucide-react style)
export { FlaskFullBold, FlaskFullBold as FlaskFullBoldIcon, FlaskFullBold as SiFlaskFullBold };
export default FlaskFullBold;
export type { FlaskFullBoldProps };
