import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudXRegularProps = Omit<IconBaseProps, 'children'>;

const CloudXRegular = memo(
  forwardRef<SVGSVGElement, CloudXRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-x" {...props}>
      <path fill="currentColor" d="M13.47 10.47a.75.75 0 1 1 1.06 1.06L13.06 13l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 14.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 13l-1.47-1.47a.75.75 0 1 1 1.06-1.06L12 11.94z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.25a6.8 6.8 0 0 1 6.16 4 5.75 5.75 0 0 1-.16 11.5H5a4.75 4.75 0 1 1 .3-9.5c.36-3.37 3.22-6 6.7-6m0 1.5A5.25 5.25 0 0 0 6.75 11v.11a.75.75 0 0 1-.93.74A3.26 3.26 0 0 0 1.75 15c0 1.8 1.46 3.25 3.25 3.25h13a4.25 4.25 0 1 0-.29-8.49.75.75 0 0 1-.76-.5A5.25 5.25 0 0 0 12 5.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudXRegular.displayName = 'CloudXRegular';

// Triple export pattern (lucide-react style)
export { CloudXRegular, CloudXRegular as CloudXRegularIcon, CloudXRegular as SiCloudXRegular };
export default CloudXRegular;
export type { CloudXRegularProps };
