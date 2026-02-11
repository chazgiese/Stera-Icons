import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeFillDuotone = memo(
  forwardRef<SVGSVGElement, GlobeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-fill-duotone" {...props}>
      <path d="M7.46 13c.16 2.33.9 4.62 2.22 6.66A8 8 0 0 1 4.06 13zM19.94 13a8 8 0 0 1-5.62 6.66A14 14 0 0 0 16.54 13zM14.54 13A12 12 0 0 1 12 19.47 12 12 0 0 1 9.46 13zM9.68 4.34A14 14 0 0 0 7.46 11h-3.4a8 8 0 0 1 5.62-6.66M12 4.53A12 12 0 0 1 14.54 11H9.46c.2-2.3 1.04-4.56 2.54-6.47M14.32 4.34A8 8 0 0 1 19.94 11h-3.4c-.16-2.33-.9-4.62-2.22-6.66" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M4.06 13a8 8 0 0 0 5.62 6.66A14 14 0 0 1 7.46 13zm12.48 0c-.16 2.33-.9 4.62-2.22 6.66A8 8 0 0 0 19.94 13zm-7.08 0c.2 2.3 1.04 4.56 2.54 6.47A12 12 0 0 0 14.54 13zm.22-8.66A8 8 0 0 0 4.06 11h3.4c.16-2.33.9-4.62 2.22-6.66m2.32.2A12 12 0 0 0 9.46 11h5.08A12 12 0 0 0 12 4.53m2.32-.2A14 14 0 0 1 16.54 11h3.4a8 8 0 0 0-5.62-6.66" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFillDuotone.displayName = 'GlobeFillDuotone';

// Triple export pattern (lucide-react style)
export { GlobeFillDuotone, GlobeFillDuotone as GlobeFillDuotoneIcon, GlobeFillDuotone as SiGlobeFillDuotone };
export default GlobeFillDuotone;
export type { GlobeFillDuotoneProps };
