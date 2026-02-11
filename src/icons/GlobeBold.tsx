import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeBoldProps = Omit<IconBaseProps, 'children'>;

const GlobeBold = memo(
  forwardRef<SVGSVGElement, GlobeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M4.06 13a8 8 0 0 0 5.62 6.66A14 14 0 0 1 7.46 13zm12.48 0c-.16 2.33-.9 4.62-2.22 6.66A8 8 0 0 0 19.94 13zm-7.08 0c.2 2.3 1.04 4.56 2.54 6.47A12 12 0 0 0 14.54 13zm.22-8.66A8 8 0 0 0 4.06 11h3.4c.16-2.33.9-4.63 2.22-6.66m2.32.2A12 12 0 0 0 9.46 11h5.08A12 12 0 0 0 12 4.53m2.32-.2A14 14 0 0 1 16.54 11h3.4a8 8 0 0 0-5.62-6.66" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBold.displayName = 'GlobeBold';

// Triple export pattern (lucide-react style)
export { GlobeBold, GlobeBold as GlobeBoldIcon, GlobeBold as SiGlobeBold };
export default GlobeBold;
export type { GlobeBoldProps };
