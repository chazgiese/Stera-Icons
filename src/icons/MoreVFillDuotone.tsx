import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-v-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.8 1q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v13.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-1.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q10.4.99 11.2 1zM12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

MoreVFillDuotone.displayName = 'MoreVFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreVFillDuotone, MoreVFillDuotone as MoreVFillDuotoneIcon, MoreVFillDuotone as SiMoreVFillDuotone };
export type { MoreVFillDuotoneProps };
