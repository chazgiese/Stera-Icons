import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubePackageSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-package-simple-bold-duotone" {...props}>
      <path fill="currentColor" d="m16.5 8.36 2.38-1.33q.2.15.33.29a3 3 0 0 1 .72 1.42L13 12.59v7.65q-.22.09-.4.12a3 3 0 0 1-1.6-.12v-7.65L4.07 8.74l.08-.33a3 3 0 0 1 .97-1.38L12 10.86l2.44-1.36L7.5 5.64 9.38 4.6l.18-.1z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 1.68a5 5 0 0 1 2 0c.8.16 1.52.57 2.6 1.17l2.6 1.45c1.13.63 1.9 1.05 2.48 1.66a5 5 0 0 1 1.07 1.83c.26.8.25 1.67.25 2.98v2.46c0 1.3.01 2.18-.25 2.98a5 5 0 0 1-1.07 1.83c-.57.61-1.35 1.03-2.49 1.66l-2.6 1.45c-1.07.6-1.8 1.01-2.58 1.17a5 5 0 0 1-2.02 0c-.78-.16-1.5-.57-2.58-1.17L5.8 19.7c-1.14-.63-1.92-1.04-2.49-1.66a5 5 0 0 1-1.07-1.82C2 15.42 2 14.54 2 13.23v-2.46c0-1.3-.01-2.18.25-2.98a5 5 0 0 1 1.07-1.83c.57-.61 1.35-1.03 2.49-1.66l2.6-1.45c1.07-.6 1.8-1 2.58-1.17m1.6 1.96a3 3 0 0 0-1.2 0c-.42.08-.83.3-2.02.96l-2.6 1.45c-1.26.7-1.68.94-1.99 1.27a3 3 0 0 0-.64 1.1c-.14.41-.15.9-.15 2.35v2.46c0 1.44.01 1.94.15 2.36a3 3 0 0 0 .64 1.09c.3.33.73.58 1.99 1.28l2.6 1.44a8 8 0 0 0 2.02.96 3 3 0 0 0 1.2 0c.42-.08.83-.3 2.02-.96l2.6-1.44c1.26-.7 1.68-.95 1.99-1.28a3 3 0 0 0 .64-1.1c.14-.41.15-.9.15-2.35v-2.46c0-1.44-.01-1.94-.15-2.36a3 3 0 0 0-.64-1.09c-.3-.33-.73-.58-1.99-1.27l-2.6-1.45a8 8 0 0 0-2.02-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageSimpleBoldDuotone.displayName = 'CubePackageSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CubePackageSimpleBoldDuotone, CubePackageSimpleBoldDuotone as CubePackageSimpleBoldDuotoneIcon, CubePackageSimpleBoldDuotone as SiCubePackageSimpleBoldDuotone };
export type { CubePackageSimpleBoldDuotoneProps };
