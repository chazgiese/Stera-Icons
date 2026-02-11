import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleFill = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-package-simple-fill" {...props}>
      <path fillRule="evenodd" d="M11 1.68a5 5 0 0 1 2 0c.8.16 1.52.57 2.6 1.17l2.6 1.45c1.13.63 1.9 1.05 2.48 1.66a5 5 0 0 1 1.07 1.83c.26.8.25 1.67.25 2.98v2.46c0 1.3.01 2.18-.25 2.98a5 5 0 0 1-1.07 1.83c-.57.61-1.35 1.03-2.49 1.66l-2.6 1.45c-1.07.6-1.8 1.01-2.58 1.17a5 5 0 0 1-2.02 0c-.78-.16-1.5-.57-2.58-1.17L5.8 19.7c-1.14-.63-1.92-1.04-2.49-1.66a5 5 0 0 1-1.07-1.82C2 15.42 2 14.54 2 13.23v-2.46c0-1.3-.01-2.18.25-2.98a5 5 0 0 1 1.07-1.83c.57-.61 1.35-1.03 2.49-1.66l2.6-1.45c1.07-.6 1.8-1 2.58-1.17m2 10.9v7.66c.34-.14.79-.38 1.62-.84l2.6-1.44c1.26-.7 1.68-.95 1.99-1.28a3 3 0 0 0 .64-1.1c.14-.41.15-.9.15-2.35v-2.46c0-1.1 0-1.65-.07-2.03zM6.78 6.06c-.88.48-1.35.75-1.66.98L12 10.86l2.44-1.36L7.5 5.64zm5.82-2.41a3 3 0 0 0-1.2 0c-.4.08-.79.28-1.84.86l6.94 3.86 2.38-1.33c-.3-.23-.78-.5-1.66-.98l-2.6-1.45a8 8 0 0 0-2.02-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleFill.displayName = 'CubePackageSimpleFill';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleFill, CubePackageSimpleFill as CubePackageSimpleFillIcon, CubePackageSimpleFill as SiCubePackageSimpleFill };
export default CubePackageSimpleFill;
export type { CubePackageSimpleFillProps };
