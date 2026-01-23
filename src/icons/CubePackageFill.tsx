import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageFillProps = Omit<IconBaseProps, 'children'>;

const CubePackageFill = memo(
  forwardRef<SVGSVGElement, CubePackageFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-package-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.2 1.51a4 4 0 0 1 1.6 0c.64.13 1.22.47 2.02.91l4.2 2.33c.83.47 1.46.8 1.92 1.3a4 4 0 0 1 .86 1.46c.21.65.2 1.36.2 2.31v4.36c0 .95.01 1.66-.2 2.3a4 4 0 0 1-.86 1.47c-.46.5-1.09.83-1.92 1.3l-4.2 2.33c-.8.44-1.38.78-2.01.9a4 4 0 0 1-1.62 0c-.63-.12-1.21-.46-2-.9l-4.2-2.33c-.85-.47-1.47-.8-1.93-1.3a4 4 0 0 1-.86-1.46C2 15.84 2 15.13 2 14.18V9.82c0-.95-.01-1.66.2-2.3a4 4 0 0 1 .86-1.47c.46-.5 1.08-.83 1.92-1.3l4.2-2.33c.8-.44 1.38-.78 2.01-.9m6.14 8.66c.17.6.16 1.27.16 2.15V13a1 1 0 0 1-2 0v-.68c0-.52 0-.86-.02-1.11L13 12.59v7.7l.85-.46 4.2-2.33a6 6 0 0 0 1.42-.91 2 2 0 0 0 .43-.73c.09-.27.1-.59.1-1.68V9.82c0-.52 0-.86-.02-1.11zM5.95 6.5l-.88.5L12 10.87l2.43-1.35q-.3-.19-.88-.5L7.5 5.63zm6.45-3.03a2 2 0 0 0-.8 0c-.27.06-.54.2-1.45.7l-.6.33 4.97 2.75c.77.44 1.36.75 1.81 1.2L18.93 7q-.3-.19-.88-.5l-4.2-2.34c-.91-.5-1.18-.64-1.45-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageFill.displayName = 'CubePackageFill';

// Triple export pattern (lucide-react style)
export { CubePackageFill, CubePackageFill as CubePackageFillIcon, CubePackageFill as SiCubePackageFill };
export default CubePackageFill;
export type { CubePackageFillProps };
