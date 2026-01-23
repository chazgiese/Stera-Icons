import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-package-simple-duotone" {...props}>
      <path fill="currentColor" d="m16.5 8.64 2.82-1.56.07.07q.47.51.7 1.18v.03l-7.34 4.08v8.14l-.1.03q-.65.13-1.3 0-.06 0-.1-.03v-8.14L3.91 8.36v-.03q.23-.66.7-1.18l.07-.07L12 11.14l2.96-1.64L7.5 5.36l1.54-.86z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.04 1.92a5 5 0 0 1 1.92 0c.74.16 1.42.54 2.51 1.15l2.6 1.45c1.16.64 1.89 1.03 2.42 1.61q.69.77 1.02 1.73c.25.76.24 1.59.24 2.9v2.47c0 1.32 0 2.15-.24 2.9a5 5 0 0 1-1.02 1.74c-.53.58-1.26.97-2.42 1.61l-2.6 1.45c-1.09.6-1.77 1-2.51 1.15q-.96.2-1.92 0c-.74-.15-1.42-.54-2.51-1.15l-2.6-1.45c-1.16-.64-1.89-1.03-2.42-1.61q-.69-.77-1.02-1.73c-.25-.76-.24-1.59-.24-2.9v-2.47c0-1.32 0-2.15.24-2.9q.32-.98 1.02-1.74c.53-.58 1.26-.97 2.42-1.61l2.6-1.45c1.09-.6 1.77-1 2.51-1.15m1.61 1.47a3 3 0 0 0-1.3 0c-.47.1-.92.34-2.1 1l-2.6 1.44c-1.24.69-1.7.96-2.04 1.32q-.47.51-.7 1.18c-.15.47-.16 1.01-.16 2.44v2.46c0 1.43 0 1.97.16 2.44q.23.66.7 1.18c.34.36.8.63 2.05 1.32l2.6 1.45c1.17.65 1.62.9 2.09.99q.65.14 1.3 0c.47-.1.92-.34 2.1-1l2.6-1.44c1.24-.69 1.7-.96 2.04-1.32q.47-.52.7-1.18c.15-.47.16-1.01.16-2.44v-2.46c0-1.43 0-1.97-.16-2.44a3 3 0 0 0-.7-1.18c-.34-.36-.8-.63-2.05-1.32l-2.6-1.45a8 8 0 0 0-2.09-.99" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleRegularDuotone.displayName = 'CubePackageSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleRegularDuotone, CubePackageSimpleRegularDuotone as CubePackageSimpleRegularDuotoneIcon, CubePackageSimpleRegularDuotone as SiCubePackageSimpleRegularDuotone };
export default CubePackageSimpleRegularDuotone;
export type { CubePackageSimpleRegularDuotoneProps };
