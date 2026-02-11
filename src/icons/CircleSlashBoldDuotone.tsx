import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-bold-duotone" {...props}>
      <path d="M18.32 16.9a8 8 0 0 1-1.42 1.42L5.68 7.1A8 8 0 0 1 7.1 5.68z" opacity={.4} />
        <path fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBoldDuotone.displayName = 'CircleSlashBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashBoldDuotone, CircleSlashBoldDuotone as CircleSlashBoldDuotoneIcon, CircleSlashBoldDuotone as SiCircleSlashBoldDuotone };
export default CircleSlashBoldDuotone;
export type { CircleSlashBoldDuotoneProps };
