import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PoundSterlingCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-circle-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.93 5.8a4.4 4.4 0 0 1 4.35 2.16 1 1 0 0 1-1.7 1.06c-.65-1.04-1.62-1.36-2.37-1.25S11 8.37 11 9.04v1.75h2.14a1 1 0 0 1 0 2H11v1.76q-.02.68-.31 1.2H16a1 1 0 1 1 0 2H8a1 1 0 0 1-.46-1.89l.08-.03.23-.11q.24-.13.55-.35c.44-.34.6-.63.6-.82v-1.76H8a1 1 0 0 1 0-2h1V9.04c0-1.86 1.4-3.03 2.93-3.25" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m4.28 6.96a4.4 4.4 0 0 0-4.35-2.17C10.4 6.01 9 7.18 9 9.04v1.75H8a1 1 0 0 0 0 2h1v1.76c0 .19-.16.48-.6.82a4 4 0 0 1-.78.45l-.08.04A1 1 0 0 0 8 17.75h8a1 1 0 1 0 0-2h-5.31q.29-.52.31-1.2v-1.76h2.14a1 1 0 0 0 0-2H11V9.04c0-.67.46-1.16 1.21-1.27.75-.1 1.72.2 2.37 1.25a1 1 0 0 0 1.7-1.06" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

PoundSterlingCircleFillDuotone.displayName = 'PoundSterlingCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleFillDuotone, PoundSterlingCircleFillDuotone as PoundSterlingCircleFillDuotoneIcon, PoundSterlingCircleFillDuotone as SiPoundSterlingCircleFillDuotone };
export default PoundSterlingCircleFillDuotone;
export type { PoundSterlingCircleFillDuotoneProps };
