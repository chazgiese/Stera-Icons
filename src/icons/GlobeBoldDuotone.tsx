import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GlobeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 0 1 0 20 1 1 0 0 0 .73-1.69q-.39-.4-.73-.84a12.1 12.1 0 0 0 0-14.94q.34-.44.73-.84A1 1 0 0 0 12 2m4.54 11c-.16 2.33-.9 4.62-2.22 6.66A8 8 0 0 0 19.94 13zm-2.22-8.66A14 14 0 0 1 16.54 11h3.4a8 8 0 0 0-5.62-6.66" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a1 1 0 0 1 .73 1.69A12 12 0 0 0 9.46 11h5.08q.08 1 0 2H9.46c.22 2.65 1.3 5.24 3.27 7.31A1 1 0 0 1 12 22a10 10 0 0 1 0-20M4.06 13a8 8 0 0 0 5.62 6.66A14 14 0 0 1 7.46 13zm5.62-8.66A8 8 0 0 0 4.06 11h3.4c.16-2.33.9-4.63 2.22-6.66" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBoldDuotone.displayName = 'GlobeBoldDuotone';

// Triple export pattern (lucide-react style)
export { GlobeBoldDuotone, GlobeBoldDuotone as GlobeBoldDuotoneIcon, GlobeBoldDuotone as SiGlobeBoldDuotone };
export default GlobeBoldDuotone;
export type { GlobeBoldDuotoneProps };
