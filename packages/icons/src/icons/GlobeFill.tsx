import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillProps = Omit<IconBaseProps, 'children'>;

const GlobeFill = memo(
  forwardRef<SVGSVGElement, GlobeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m4.5 11c-.13 2.76-1.06 5.49-2.76 7.83 3.76-.76 6.64-3.93 6.98-7.83zm-7.5 0 .03.46q.16 1.81.84 3.55.74 1.94 2.13 3.6c1.85-2.2 2.85-4.89 3-7.61zm3-9.12q-.55.68-1.02 1.4-.16.26-.32.54-.45.81-.8 1.67-.66 1.73-.83 3.55Q9 11 9 11.25h6c-.15-2.72-1.15-5.4-3-7.62m1.74-.2c1.7 2.33 2.63 5.06 2.77 7.82h4.2c-.33-3.9-3.21-7.07-6.97-7.83" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFill.displayName = 'GlobeFill';

// Triple export pattern
export { GlobeFill, GlobeFill as GlobeFillIcon, GlobeFill as SiGlobeFill };
export default GlobeFill;
export type { GlobeFillProps };
