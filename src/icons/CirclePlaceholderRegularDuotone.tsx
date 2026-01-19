import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-duotone" {...props}>
      <path d="M13.67 21.1q-.81.15-1.67.15h-.3L2.76 12.3l-.01-.3q0-.86.15-1.67zM17.6 19.36q-.61.47-1.3.83L3.81 7.69q.36-.68.83-1.29zM20.19 16.3q-.36.69-.83 1.3L6.4 4.63q.61-.47 1.3-.83zM12.3 2.76l8.94 8.94.01.3a9 9 0 0 1-.15 1.67L10.33 2.9A9 9 0 0 1 12 2.75z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegularDuotone.displayName = 'CirclePlaceholderRegularDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderRegularDuotone, CirclePlaceholderRegularDuotone as CirclePlaceholderRegularDuotoneIcon, CirclePlaceholderRegularDuotone as SiCirclePlaceholderRegularDuotone };
export type { CirclePlaceholderRegularDuotoneProps };
