import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskRegularProps = Omit<IconBaseProps, 'children'>;

const FlaskRegular = memo(
  forwardRef<SVGSVGElement, FlaskRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1.25a.75.75 0 0 1 0 1.5h-.25v6.17q0 .87.44 1.64l4.7 8.05a2.75 2.75 0 0 1-2.37 4.14H5.98a2.75 2.75 0 0 1-2.37-4.14l4.7-8.05q.44-.77.44-1.64V2.75H8.5a.75.75 0 0 1 0-1.5zm-5.25 7.67c0 .84-.22 1.67-.65 2.4l-4.7 8.05c-.48.83.12 1.88 1.08 1.88h12.04c.96 0 1.56-1.05 1.08-1.88l-4.7-8.06a5 5 0 0 1-.65-2.4V2.76h-3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskRegular.displayName = 'FlaskRegular';

// Triple export pattern (lucide-react style)
export { FlaskRegular, FlaskRegular as FlaskRegularIcon, FlaskRegular as SiFlaskRegular };
export default FlaskRegular;
export type { FlaskRegularProps };
