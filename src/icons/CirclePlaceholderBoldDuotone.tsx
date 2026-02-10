import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-bold-duotone" {...props}>
      <path d="M13.61 19.83q-1.36.29-2.74.09l-6.8-6.79q-.19-1.38.1-2.74zM17.06 18.2q-.82.66-1.74 1.08L4.72 8.68q.42-.92 1.08-1.74zM19.28 15.32q-.42.92-1.09 1.74L6.94 5.8q.81-.66 1.74-1.08zM10.39 4.16q1.36-.27 2.74-.08l6.79 6.79q.2 1.38-.09 2.74z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m12.73 1.41A8 8 0 1 0 6.34 17.66 8 8 0 0 0 17.66 6.34" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBoldDuotone.displayName = 'CirclePlaceholderBoldDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderBoldDuotone, CirclePlaceholderBoldDuotone as CirclePlaceholderBoldDuotoneIcon, CirclePlaceholderBoldDuotone as SiCirclePlaceholderBoldDuotone };
export default CirclePlaceholderBoldDuotone;
export type { CirclePlaceholderBoldDuotoneProps };
