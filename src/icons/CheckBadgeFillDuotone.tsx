import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-badge-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.88 2.7a3 3 0 0 1 4.24 0l.93.94a1 1 0 0 0 .7.29h1.32a3 3 0 0 1 3 3v1.31q0 .42.3.71l.92.93a3 3 0 0 1 0 4.24l-.93.93a1 1 0 0 0-.29.7v1.32a3 3 0 0 1-3 3h-1.31a1 1 0 0 0-.71.3l-.93.92a3 3 0 0 1-4.24 0l-.93-.93a1 1 0 0 0-.7-.29H6.92a3 3 0 0 1-3-3v-1.31a1 1 0 0 0-.3-.71l-.92-.93a3 3 0 0 1 0-4.24l.93-.93a1 1 0 0 0 .29-.7V6.92a3 3 0 0 1 3-3h1.31a1 1 0 0 0 .71-.3zm6.32 6.34a1 1 0 0 0-1.41 0l-4.12 4.19-1.37-1.81a1 1 0 1 0-1.6 1.21l1.52 2 .3.35c.1.12.27.28.51.39q.5.2 1.01.06c.26-.07.45-.22.57-.32l.33-.32 4.27-4.34a1 1 0 0 0 0-1.41" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.79 9.05a1 1 0 0 1 1.42 1.4l-4.27 4.34q-.16.17-.33.32c-.12.1-.3.25-.57.32q-.52.14-1-.06c-.26-.11-.42-.27-.53-.39-.1-.1-.2-.25-.29-.36l-1.51-2a1 1 0 1 1 1.59-1.2l1.37 1.8z" />
    </IconBase>
  ))
);

CheckBadgeFillDuotone.displayName = 'CheckBadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckBadgeFillDuotone, CheckBadgeFillDuotone as CheckBadgeFillDuotoneIcon, CheckBadgeFillDuotone as SiCheckBadgeFillDuotone };
export default CheckBadgeFillDuotone;
export type { CheckBadgeFillDuotoneProps };
