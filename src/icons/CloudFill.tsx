import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudFillProps = Omit<IconBaseProps, 'children'>;

const CloudFill = memo(
  forwardRef<SVGSVGElement, CloudFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-fill" {...props}>
      <path fill="currentColor" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" />
    </IconBase>
  ))
);

CloudFill.displayName = 'CloudFill';

// Triple export pattern (lucide-react style)
export { CloudFill, CloudFill as CloudFillIcon, CloudFill as SiCloudFill };
export default CloudFill;
export type { CloudFillProps };
