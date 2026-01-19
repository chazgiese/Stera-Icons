import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CheckBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-badge-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.25 1.2a2.5 2.5 0 0 1 3.5 0l1.28 1.28c.42.41.98.64 1.56.64h1.81c1.37 0 2.48 1.11 2.48 2.48V7.4c0 .58.23 1.14.64 1.56l1.29 1.28c.96.97.96 2.53 0 3.5l-1.29 1.28a2.2 2.2 0 0 0-.64 1.56v1.81c0 1.37-1.11 2.48-2.48 2.48H16.6a2.2 2.2 0 0 0-1.56.64l-1.28 1.29c-.97.96-2.53.96-3.5 0l-1.28-1.29a2.2 2.2 0 0 0-1.56-.64H5.6a2.5 2.5 0 0 1-2.48-2.48V16.6a2.2 2.2 0 0 0-.64-1.56l-1.29-1.28a2.5 2.5 0 0 1 0-3.5l1.29-1.28c.41-.42.64-.98.64-1.56V5.6c0-1.37 1.11-2.48 2.48-2.48H7.4a2.2 2.2 0 0 0 1.56-.64zm6.33 7.6a1 1 0 0 0-1.41 0l-4.69 4.68-1.56-2.08a1 1 0 0 0-1.6 1.2l1.7 2.26.29.36c.1.12.27.28.52.4q.48.2 1 .06.39-.12.57-.31l.33-.32 4.85-4.84a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.17 8.8a1 1 0 0 1 1.41 1.4l-4.85 4.85q-.15.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.24-.1-.4-.27-.51-.39q-.15-.17-.29-.36l-1.7-2.26a1 1 0 1 1 1.6-1.2l1.56 2.08z" />
    </IconBase>
  ))
);

CheckBadgeFillDuotone.displayName = 'CheckBadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckBadgeFillDuotone, CheckBadgeFillDuotone as CheckBadgeFillDuotoneIcon, CheckBadgeFillDuotone as SiCheckBadgeFillDuotone };
export type { CheckBadgeFillDuotoneProps };
