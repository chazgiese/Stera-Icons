import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BarricadeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BarricadeFillDuotone = memo(
  forwardRef<SVGSVGElement, BarricadeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="barricade-fill-duotone" {...props}>
      <path d="m7.09 7 7 7H9.9L3.25 7.34a1 1 0 0 1 .3-.23c.05-.03.15-.06.42-.09C4.25 7 4.62 7 5.2 7zM18.8 7c.58 0 .95 0 1.23.02.27.03.37.06.42.09a1 1 0 0 1 .44.44c.03.05.06.15.09.42.02.28.02.65.02 1.23v1.89L16.91 7z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.8 5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v2.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.51.04-1.2.03v4a1 1 0 1 1-2 0v-4H7v4a1 1 0 1 1-2 0v-4q-.69 0-1.2-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 12.6 1 11.8V9.2q0-.72.02-1.26L1 7.9V7.5A2.5 2.5 0 0 1 3.5 5zm-1.89 9h1.89c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .3-.23L14.09 7H9.9zM5.2 7c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.3.23L9.91 14h4.18l-7-7zM3 11.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h1.89L3 9.91zm18-.71V9.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C19.75 7 19.38 7 18.8 7h-1.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

BarricadeFillDuotone.displayName = 'BarricadeFillDuotone';

// Triple export pattern (lucide-react style)
export { BarricadeFillDuotone, BarricadeFillDuotone as BarricadeFillDuotoneIcon, BarricadeFillDuotone as SiBarricadeFillDuotone };
export default BarricadeFillDuotone;
export type { BarricadeFillDuotoneProps };
