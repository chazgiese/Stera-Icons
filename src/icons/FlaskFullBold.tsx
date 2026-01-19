import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskFullBoldProps = Omit<IconBaseProps, 'children'>;

const FlaskFullBold = memo(
  forwardRef<SVGSVGElement, FlaskFullBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1a1 1 0 0 1 .1 2h-.1v5.92a3 3 0 0 0 .4 1.51l4.7 8.06A3 3 0 0 1 18.03 23H5.98a3 3 0 0 1-2.59-4.51l4.7-8.06a3 3 0 0 0 .41-1.51V3a1 1 0 0 1 0-2zm-.67 14.2a3 3 0 0 0-2.02.46 4.9 4.9 0 0 1-4.65.43l-.84-.37-2.2 3.78a1 1 0 0 0 .86 1.5h12.04a1 1 0 0 0 .86-1.5l-2.36-4.06zM10.5 8.92a5 5 0 0 1-.68 2.52l-1.49 2.54.62.27c.9.38 1.94.29 2.75-.25a5 5 0 0 1 3.42-.78l.11.02-1.05-1.8a5 5 0 0 1-.68-2.52V3h-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullBold.displayName = 'FlaskFullBold';

// Triple export pattern (lucide-react style)
export { FlaskFullBold, FlaskFullBold as FlaskFullBoldIcon, FlaskFullBold as SiFlaskFullBold };
export default FlaskFullBold;
export type { FlaskFullBoldProps };
