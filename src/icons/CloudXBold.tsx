import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudXBoldProps = Omit<IconBaseProps, 'children'>;

const CloudXBold = memo(
  forwardRef<SVGSVGElement, CloudXBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-x-bold" {...props}>
      <path d="M13.3 10.3a1 1 0 1 1 1.4 1.4L13.42 13l1.3 1.3a1 1 0 1 1-1.42 1.4L12 14.42l-1.3 1.3a1 1 0 1 1-1.4-1.42L10.58 13l-1.3-1.3a1 1 0 1 1 1.42-1.4L12 11.58z" />
        <path fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m0 2a5 5 0 0 0-5 5v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h13a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudXBold.displayName = 'CloudXBold';

// Triple export pattern (lucide-react style)
export { CloudXBold, CloudXBold as CloudXBoldIcon, CloudXBold as SiCloudXBold };
export default CloudXBold;
export type { CloudXBoldProps };
