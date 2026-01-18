import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudXFillProps = Omit<IconBaseProps, 'children'>;

const CloudXFill = memo(
  forwardRef<SVGSVGElement, CloudXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m2.7 6.3a1 1 0 0 0-1.4 0L12 11.58l-1.3-1.3a1 1 0 1 0-1.4 1.42L10.58 13l-1.3 1.3a1 1 0 1 0 1.42 1.4L12 14.42l1.3 1.3a1 1 0 1 0 1.4-1.42L13.42 13l1.3-1.3a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudXFill.displayName = 'CloudXFill';

// Triple export pattern (lucide-react style)
export { CloudXFill, CloudXFill as CloudXFillIcon, CloudXFill as SiCloudXFill };
export type { CloudXFillProps };
