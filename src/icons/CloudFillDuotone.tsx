import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-fill-duotone" {...props}>
      <path d="M12 6a5 5 0 0 1 4.72 3.34 1 1 0 0 0 1 .67L18 10a4 4 0 0 1 0 8H5a3 3 0 1 1 .75-5.9 1 1 0 0 0 1.25-1V11a5 5 0 0 1 5-5" opacity={.4} />
        <path fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m0 2a5 5 0 0 0-5 5v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h13a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudFillDuotone.displayName = 'CloudFillDuotone';

// Triple export pattern (lucide-react style)
export { CloudFillDuotone, CloudFillDuotone as CloudFillDuotoneIcon, CloudFillDuotone as SiCloudFillDuotone };
export default CloudFillDuotone;
export type { CloudFillDuotoneProps };
