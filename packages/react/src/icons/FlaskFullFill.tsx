import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskFullFillProps = Omit<IconBaseProps, 'children'>;

const FlaskFullFill = memo(
  forwardRef<SVGSVGElement, FlaskFullFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1a1 1 0 0 1 .1 2h-.1v5.92a3 3 0 0 0 .4 1.51l4.7 8.06A3 3 0 0 1 18.03 23H5.98a3 3 0 0 1-2.59-4.51l4.7-8.06a3 3 0 0 0 .41-1.51V3a1 1 0 0 1 0-2zm-5 7.92a5 5 0 0 1-.68 2.52l-1.49 2.54.62.27c.9.38 1.94.29 2.75-.25a5 5 0 0 1 3.42-.78l.11.02-1.05-1.8a5 5 0 0 1-.68-2.52V3h-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullFill.displayName = 'FlaskFullFill';

// Triple export pattern (lucide-react style)
export { FlaskFullFill, FlaskFullFill as FlaskFullFillIcon, FlaskFullFill as SiFlaskFullFill };
export type { FlaskFullFillProps };
