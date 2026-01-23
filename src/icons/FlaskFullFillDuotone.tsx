import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullFillDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 8.85a3 3 0 0 0 .46 1.6l4.98 7.96A3 3 0 0 1 17.89 23H6.11a3 3 0 0 1-2.55-4.59l4.98-7.97A3 3 0 0 0 9 8.85V3h6zm.12 4.37a5 5 0 0 0-3.42.78 2.9 2.9 0 0 1-2.75.25l-.62-.27-3.21 5.52a1 1 0 0 0 .86 1.5h12.04a1 1 0 0 0 .86-1.5l-3.65-6.26z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.7 14a5 5 0 0 1 3.42-.78l.11.02 3.65 6.26a1 1 0 0 1-.86 1.5H5.98a1 1 0 0 1-.86-1.5l3.21-5.52.62.27c.9.38 1.94.29 2.75-.25M15.5 1a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FlaskFullFillDuotone.displayName = 'FlaskFullFillDuotone';

// Triple export pattern (lucide-react style)
export { FlaskFullFillDuotone, FlaskFullFillDuotone as FlaskFullFillDuotoneIcon, FlaskFullFillDuotone as SiFlaskFullFillDuotone };
export default FlaskFullFillDuotone;
export type { FlaskFullFillDuotoneProps };
