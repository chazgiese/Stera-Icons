import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UploadRegularDuotone = memo(
  forwardRef<SVGSVGElement, UploadRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="upload-duotone" {...props}>
      <path fill="currentColor" d="M20.5 14.75c.41 0 .75.34.75.75v.2q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.3q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-.2a.75.75 0 0 1 1.5 0v.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h7.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-.2c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M12 2.75q.31 0 .53.22l5.5 5.5a.75.75 0 1 1-1.06 1.06l-4.22-4.22V15.5a.75.75 0 0 1-1.5 0V5.31L7.03 9.53a.75.75 0 1 1-1.06-1.06l5.5-5.5.11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

UploadRegularDuotone.displayName = 'UploadRegularDuotone';

// Triple export pattern (lucide-react style)
export { UploadRegularDuotone, UploadRegularDuotone as UploadRegularDuotoneIcon, UploadRegularDuotone as SiUploadRegularDuotone };
export default UploadRegularDuotone;
export type { UploadRegularDuotoneProps };
