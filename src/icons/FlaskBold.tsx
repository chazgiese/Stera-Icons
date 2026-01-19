import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskBoldProps = Omit<IconBaseProps, 'children'>;

const FlaskBold = memo(
  forwardRef<SVGSVGElement, FlaskBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1a1 1 0 0 1 .1 2h-.1v5.92a3 3 0 0 0 .4 1.51l4.7 8.06A3 3 0 0 1 18.03 23H5.98a3 3 0 0 1-2.59-4.51l4.7-8.06a3 3 0 0 0 .41-1.51V3a1 1 0 0 1 0-2zm-5 7.92a5 5 0 0 1-.68 2.52l-4.7 8.06a1 1 0 0 0 .86 1.5h12.04a1 1 0 0 0 .86-1.5l-4.7-8.06a5 5 0 0 1-.68-2.52V3h-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskBold.displayName = 'FlaskBold';

// Triple export pattern (lucide-react style)
export { FlaskBold, FlaskBold as FlaskBoldIcon, FlaskBold as SiFlaskBold };
export type { FlaskBoldProps };
