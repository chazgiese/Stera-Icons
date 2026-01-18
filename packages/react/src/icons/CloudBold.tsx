import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudBoldProps = Omit<IconBaseProps, 'children'>;

const CloudBold = memo(
  forwardRef<SVGSVGElement, CloudBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m0 2a5 5 0 0 0-5 5v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h13a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudBold.displayName = 'CloudBold';

// Triple export pattern (lucide-react style)
export { CloudBold, CloudBold as CloudBoldIcon, CloudBold as SiCloudBold };
export type { CloudBoldProps };
