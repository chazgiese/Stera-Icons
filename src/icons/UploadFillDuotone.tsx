import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UploadFillDuotone = memo(
  forwardRef<SVGSVGElement, UploadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="upload-fill-duotone" {...props}>
      <path d="M20.5 14.5a1 1 0 0 1 1 1v.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05v-.2a1 1 0 1 1 2 0v.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-.2a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M12 2.5a1 1 0 0 1 .7.3l5.5 5.5a1 1 0 0 1-.7 1.7H13v5.5a1 1 0 0 1-2 0V10H6.5a1 1 0 0 1-.7-1.7l5.5-5.5.07-.07A1 1 0 0 1 12 2.5" />
    </IconBase>
  ))
);

UploadFillDuotone.displayName = 'UploadFillDuotone';

// Triple export pattern (lucide-react style)
export { UploadFillDuotone, UploadFillDuotone as UploadFillDuotoneIcon, UploadFillDuotone as SiUploadFillDuotone };
export default UploadFillDuotone;
export type { UploadFillDuotoneProps };
