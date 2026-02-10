import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillProps = Omit<IconBaseProps, 'children'>;

const GlobeFill = memo(
  forwardRef<SVGSVGElement, GlobeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.54 11c-.16 2.33-.9 4.62-2.22 6.66A8 8 0 0 0 19.94 13zm-7.08 0a12 12 0 0 0 2.5 6.4q0 .04.04.07A12 12 0 0 0 14.54 13zm2.5-8.4a12 12 0 0 0-2.5 6.4h5.08A12 12 0 0 0 12 4.53zm2.36-.26A14 14 0 0 1 16.54 11h3.4a8 8 0 0 0-5.62-6.66" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFill.displayName = 'GlobeFill';

// Triple export pattern (lucide-react style)
export { GlobeFill, GlobeFill as GlobeFillIcon, GlobeFill as SiGlobeFill };
export default GlobeFill;
export type { GlobeFillProps };
