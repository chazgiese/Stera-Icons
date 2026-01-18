import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubePackageBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 10.86 2.43-1.35c.29.17.43.28.54.4q.3.32.43.73c.05.14.07.3.08.57L13 12.59v7.65q-.22.09-.4.12a3 3 0 0 1-1.6-.12v-7.65L4.07 8.74l.08-.33a3 3 0 0 1 .97-1.38zM18.88 7.03q.2.15.33.29a3 3 0 0 1 .72 1.42l-2.59 1.43-.04-.16a4 4 0 0 0-.86-1.46l-.1-.1z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 1.68a5 5 0 0 1 2 0c.8.16 1.52.57 2.6 1.17l2.6 1.45c1.13.63 1.9 1.05 2.48 1.66a5 5 0 0 1 1.07 1.83c.26.8.25 1.67.25 2.98v2.46c0 1.3.01 2.18-.25 2.98a5 5 0 0 1-1.07 1.83c-.57.61-1.35 1.03-2.49 1.66l-2.6 1.45c-1.07.6-1.8 1.01-2.58 1.17a5 5 0 0 1-2.02 0c-.78-.16-1.5-.57-2.58-1.17L5.8 19.7c-1.14-.63-1.92-1.04-2.49-1.66a5 5 0 0 1-1.07-1.82C2 15.42 2 14.54 2 13.23v-2.46c0-1.3-.01-2.18.25-2.98a5 5 0 0 1 1.07-1.83c.57-.61 1.35-1.03 2.49-1.66l2.6-1.45c1.07-.6 1.8-1 2.58-1.17m1.6 1.96a3 3 0 0 0-1.2 0c-.4.08-.79.28-1.84.86l4.96 2.75c.83.47 1.46.8 1.92 1.3a4 4 0 0 1 .86 1.46c.21.65.2 1.36.2 2.31V13a1 1 0 1 1-2 0v-.68c0-1.1-.01-1.41-.1-1.68a2 2 0 0 0-.43-.73 6 6 0 0 0-1.42-.9L7.5 5.63l-.72.4c-1.26.7-1.68.95-1.99 1.28a3 3 0 0 0-.64 1.1c-.14.41-.15.9-.15 2.35v2.46c0 1.44.01 1.94.15 2.36a3 3 0 0 0 .64 1.09c.3.33.73.58 1.99 1.28l2.6 1.44a8 8 0 0 0 2.02.96 3 3 0 0 0 1.2 0c.42-.08.83-.3 2.02-.96l2.6-1.44c1.26-.7 1.68-.95 1.99-1.28a3 3 0 0 0 .64-1.1c.14-.41.15-.9.15-2.35v-2.46c0-1.44-.01-1.94-.15-2.36a3 3 0 0 0-.64-1.09c-.3-.33-.73-.58-1.99-1.27l-2.6-1.45a8 8 0 0 0-2.02-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageBoldDuotone.displayName = 'CubePackageBoldDuotone';

// Triple export pattern (lucide-react style)
export { CubePackageBoldDuotone, CubePackageBoldDuotone as CubePackageBoldDuotoneIcon, CubePackageBoldDuotone as SiCubePackageBoldDuotone };
export type { CubePackageBoldDuotoneProps };
