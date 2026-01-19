import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CylinderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CylinderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CylinderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cylinder-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 5c0 .8.44 1.45.96 1.92q.45.39 1.04.7V19c0 .03.01.17.3.42q.4.39 1.4.76c1.3.5 3.18.82 5.3.82s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42V7.61q.59-.3 1.04-.7c.52-.46.96-1.1.96-1.91v14c0 .8-.44 1.45-.96 1.92-.53.46-1.24.84-2.03 1.14-1.59.6-3.71.94-6.01.94s-4.42-.35-6-.94q-1.22-.44-2.04-1.14A2.6 2.6 0 0 1 3 19z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1c2.3 0 4.42.35 6 .94q1.21.45 2.04 1.14c.52.47.96 1.12.96 1.92s-.44 1.45-.96 1.92c-.53.46-1.24.84-2.03 1.14-1.59.6-3.71.94-6.01.94s-4.42-.35-6-.94Q4.77 7.6 3.95 6.92A2.6 2.6 0 0 1 3 5c0-.8.44-1.45.96-1.92A7 7 0 0 1 6 1.94 18 18 0 0 1 12 1m0 2c-2.12 0-4 .32-5.3.82q-1 .37-1.4.76C5 4.83 5 4.98 5 5c0 .03.01.17.3.42q.4.39 1.4.76C8 6.68 9.87 7 12 7s4-.32 5.3-.82a5 5 0 0 0 1.4-.76c.29-.25.3-.4.3-.42 0-.03-.01-.17-.3-.42a5 5 0 0 0-1.4-.76C16 3.32 14.13 3 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

CylinderBoldDuotone.displayName = 'CylinderBoldDuotone';

// Triple export pattern (lucide-react style)
export { CylinderBoldDuotone, CylinderBoldDuotone as CylinderBoldDuotoneIcon, CylinderBoldDuotone as SiCylinderBoldDuotone };
export default CylinderBoldDuotone;
export type { CylinderBoldDuotoneProps };
