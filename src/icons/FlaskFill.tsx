import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskFillProps = Omit<IconBaseProps, 'children'>;

const FlaskFill = memo(
  forwardRef<SVGSVGElement, FlaskFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-fill" {...props}>
      <path fill="currentColor" d="M15 1a1 1 0 0 1 .1 2H15v5.85a3 3 0 0 0 .46 1.6l4.98 7.96A3 3 0 0 1 17.89 23H6.11a3 3 0 0 1-2.55-4.59l4.98-7.97A3 3 0 0 0 9 8.85V3h-.1A1 1 0 0 1 9 1z" />
    </IconBase>
  ))
);

FlaskFill.displayName = 'FlaskFill';

// Triple export pattern (lucide-react style)
export { FlaskFill, FlaskFill as FlaskFillIcon, FlaskFill as SiFlaskFill };
export default FlaskFill;
export type { FlaskFillProps };
