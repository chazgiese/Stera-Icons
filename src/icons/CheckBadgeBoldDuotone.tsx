import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-badge-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M9.88 2.7a3 3 0 0 1 4.24 0l.93.94a1 1 0 0 0 .7.29h1.32a3 3 0 0 1 3 3v1.31q0 .41.3.71l.92.93a3 3 0 0 1 0 4.24l-.93.93a1 1 0 0 0-.29.7v1.32a3 3 0 0 1-3 3h-1.31a1 1 0 0 0-.71.3l-.93.92a3 3 0 0 1-4.24 0l-.93-.93a1 1 0 0 0-.7-.29H6.92a3 3 0 0 1-3-3v-1.31a1 1 0 0 0-.3-.71l-.92-.93a3 3 0 0 1 0-4.24l.93-.93a1 1 0 0 0 .29-.7V6.92a3 3 0 0 1 3-3h1.31a1 1 0 0 0 .71-.3zm2.83 1.42a1 1 0 0 0-1.42 0l-.93.93a3 3 0 0 1-2.12.88H6.93a1 1 0 0 0-1 1v1.31a3 3 0 0 1-.88 2.12l-.93.93a1 1 0 0 0 0 1.42l.93.93a3 3 0 0 1 .88 2.12v1.31a1 1 0 0 0 1 1h1.31a3 3 0 0 1 2.12.88l.93.93a1 1 0 0 0 1.42 0l.93-.93a3 3 0 0 1 2.12-.88h1.31a1 1 0 0 0 1-1v-1.31a3 3 0 0 1 .88-2.12l.93-.93a1 1 0 0 0 0-1.42l-.93-.93a3 3 0 0 1-.88-2.12V6.93a1 1 0 0 0-1-1h-1.31a3 3 0 0 1-2.12-.88z" clipRule="evenodd" opacity={.4} />
        <path d="M14.79 9.05a1 1 0 0 1 1.42 1.4l-4.27 4.34q-.16.17-.33.32c-.12.1-.3.25-.57.32q-.52.14-1-.06c-.26-.11-.42-.27-.53-.39-.1-.1-.2-.25-.29-.36l-1.51-2a1 1 0 1 1 1.59-1.2l1.37 1.8z" />
    </IconBase>
  ))
);

CheckBadgeBoldDuotone.displayName = 'CheckBadgeBoldDuotone';

// Triple export pattern (lucide-react style)
export { CheckBadgeBoldDuotone, CheckBadgeBoldDuotone as CheckBadgeBoldDuotoneIcon, CheckBadgeBoldDuotone as SiCheckBadgeBoldDuotone };
export default CheckBadgeBoldDuotone;
export type { CheckBadgeBoldDuotoneProps };
