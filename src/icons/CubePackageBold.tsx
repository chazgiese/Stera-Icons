import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubePackageBoldProps = Omit<IconBaseProps, 'children'>;

const CubePackageBold = memo(
  forwardRef<SVGSVGElement, CubePackageBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-package-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 1.68a5 5 0 0 1 2 0c.8.16 1.52.57 2.6 1.17l2.6 1.45c1.13.63 1.9 1.05 2.48 1.66a5 5 0 0 1 1.07 1.83c.26.8.25 1.67.25 2.98v2.46c0 1.3.01 2.18-.25 2.98a5 5 0 0 1-1.07 1.83c-.57.61-1.35 1.03-2.49 1.66l-2.6 1.45c-1.07.6-1.8 1.01-2.58 1.17a5 5 0 0 1-2.02 0c-.78-.16-1.5-.57-2.58-1.17L5.8 19.7c-1.14-.63-1.92-1.04-2.49-1.66a5 5 0 0 1-1.07-1.82C2 15.42 2 14.54 2 13.23v-2.46c0-1.3-.01-2.18.25-2.98a5 5 0 0 1 1.07-1.83c.57-.61 1.35-1.03 2.49-1.66l2.6-1.45c1.07-.6 1.8-1 2.58-1.17M4.06 8.74c-.06.38-.07.93-.07 2.03v2.46c0 1.44.01 1.94.15 2.36a3 3 0 0 0 .64 1.09c.3.33.73.58 1.99 1.28l2.6 1.44c.83.46 1.28.7 1.62.84v-7.65zm13.27 1.43c.17.6.16 1.28.16 2.15V13a1 1 0 1 1-2 0v-.68c0-.52 0-.86-.02-1.11L13 12.59v7.65c.34-.14.79-.38 1.62-.84l2.6-1.44c1.26-.7 1.68-.95 1.99-1.28a3 3 0 0 0 .64-1.1c.14-.41.15-.9.15-2.35v-2.46c0-1.1 0-1.65-.07-2.03zM6.78 6.05c-.88.48-1.35.75-1.66.98L12 10.86l2.43-1.35q-.3-.19-.88-.5L7.5 5.63zm5.82-2.41a3 3 0 0 0-1.2 0c-.4.08-.79.28-1.84.86l4.96 2.75c.77.44 1.36.75 1.81 1.2l2.55-1.42c-.3-.23-.78-.5-1.66-.98l-2.6-1.45a8 8 0 0 0-2.02-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageBold.displayName = 'CubePackageBold';

// Triple export pattern (lucide-react style)
export { CubePackageBold, CubePackageBold as CubePackageBoldIcon, CubePackageBold as SiCubePackageBold };
export default CubePackageBold;
export type { CubePackageBoldProps };
