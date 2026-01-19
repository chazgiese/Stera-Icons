import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeHeartBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeHeartBoldDuotone = memo(
  forwardRef<SVGSVGElement, HomeHeartBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-heart-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zm3.69 1.58a2 2 0 0 0-2.46 0l-6 4.67A2 2 0 0 0 4 10.47V18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-7.53a2 2 0 0 0-.77-1.58z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.9 9c1.7 0 3.1 1.37 3.1 3.08 0 1.24-.67 2.17-.88 2.46-1.05 1.47-2.54 2.48-3.5 3.24a1 1 0 0 1-1.24 0c-.96-.76-2.45-1.77-3.5-3.24A4.3 4.3 0 0 1 7 12.08a3.09 3.09 0 0 1 5-2.43A3 3 0 0 1 13.9 9m0 2c-.44 0-.82.26-1 .63a1 1 0 0 1-1.8 0 1.1 1.1 0 0 0-1-.63c-.62 0-1.1.49-1.1 1.08 0 .55.31 1.03.5 1.3.69.95 1.59 1.65 2.5 2.35.91-.7 1.81-1.4 2.5-2.36.19-.26.5-.74.5-1.3 0-.58-.48-1.07-1.1-1.07" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartBoldDuotone.displayName = 'HomeHeartBoldDuotone';

// Triple export pattern (lucide-react style)
export { HomeHeartBoldDuotone, HomeHeartBoldDuotone as HomeHeartBoldDuotoneIcon, HomeHeartBoldDuotone as SiHomeHeartBoldDuotone };
export default HomeHeartBoldDuotone;
export type { HomeHeartBoldDuotoneProps };
