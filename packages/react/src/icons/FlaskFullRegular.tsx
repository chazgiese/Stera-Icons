import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskFullRegularProps = Omit<IconBaseProps, 'children'>;

const FlaskFullRegular = memo(
  forwardRef<SVGSVGElement, FlaskFullRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1.25a.75.75 0 0 1 0 1.5h-.25v6.17q0 .87.44 1.64l4.7 8.05a2.75 2.75 0 0 1-2.37 4.14H5.98a2.75 2.75 0 0 1-2.37-4.14l4.7-8.05q.44-.77.44-1.64V2.75H8.5a.75.75 0 1 1 0-1.5zm-.63 13.7a3.2 3.2 0 0 0-2.2.5 4.7 4.7 0 0 1-4.4.4l-1.06-.44-2.3 3.96c-.5.83.1 1.88 1.07 1.88h12.04c.96 0 1.56-1.05 1.08-1.88l-2.43-4.16zm-4.62-6.03c0 .84-.22 1.67-.65 2.4L7.97 14.1l.88.38c.98.42 2.1.31 3-.28.95-.63 2.1-.9 3.23-.73l.63.09-1.31-2.25a5 5 0 0 1-.65-2.4V2.76h-3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullRegular.displayName = 'FlaskFullRegular';

// Triple export pattern (lucide-react style)
export { FlaskFullRegular, FlaskFullRegular as FlaskFullRegularIcon, FlaskFullRegular as SiFlaskFullRegular };
export type { FlaskFullRegularProps };
