import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudBoldDuotone = memo(
  forwardRef<SVGSVGElement, CloudBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-bold-duotone" {...props}>
      <path d="M18 20H5v-2h13z" opacity={.4} />
        <path d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20v-2a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 7 11v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18v2a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" />
    </IconBase>
  ))
);

CloudBoldDuotone.displayName = 'CloudBoldDuotone';

// Triple export pattern (lucide-react style)
export { CloudBoldDuotone, CloudBoldDuotone as CloudBoldDuotoneIcon, CloudBoldDuotone as SiCloudBoldDuotone };
export default CloudBoldDuotone;
export type { CloudBoldDuotoneProps };
