import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UploadBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UploadBoldDuotone = memo(
  forwardRef<SVGSVGElement, UploadBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="upload-bold-duotone" {...props}>
      <path fill="currentColor" d="M11.37 2.22a1 1 0 0 1 1.34.07l6 6a1 1 0 0 1-1.42 1.42L13 5.4V16a1 1 0 0 1-2 0V5.41l-4.3 4.3a1 1 0 0 1-1.4-1.42l6-6z" />
        <path fill="currentColor" d="M21 14a1 1 0 0 1 1 1q.01 1.37-.04 2.26-.04.9-.34 1.65a5 5 0 0 1-2.7 2.7c-.52.22-1.05.3-1.66.35q-.89.05-2.26.04H9q-1.37.01-2.26-.04a5 5 0 0 1-1.65-.34 5 5 0 0 1-2.7-2.7 5 5 0 0 1-.35-1.66Q1.99 16.37 2 15a1 1 0 1 1 2 0c0 .95 0 1.6.04 2.12.03.5.1.8.19 1.03a3 3 0 0 0 1.62 1.62c.23.1.52.16 1.03.2C7.4 20 8.05 20 9 20h6c.95 0 1.6 0 2.12-.04.5-.03.8-.1 1.03-.19a3 3 0 0 0 1.62-1.62c.1-.23.16-.52.2-1.03.03-.52.03-1.17.03-2.12a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

UploadBoldDuotone.displayName = 'UploadBoldDuotone';

// Triple export pattern (lucide-react style)
export { UploadBoldDuotone, UploadBoldDuotone as UploadBoldDuotoneIcon, UploadBoldDuotone as SiUploadBoldDuotone };
export default UploadBoldDuotone;
export type { UploadBoldDuotoneProps };
