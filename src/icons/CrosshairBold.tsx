import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CrosshairBoldProps = Omit<IconBaseProps, 'children'>;

const CrosshairBold = memo(
  forwardRef<SVGSVGElement, CrosshairBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="crosshair-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1v2.06A8 8 0 0 1 19.94 11H22a1 1 0 1 1 0 2h-2.06A8 8 0 0 1 13 19.94V22a1 1 0 1 1-2 0v-2.06A8 8 0 0 1 4.06 13H2a1 1 0 1 1 0-2h2.06A8 8 0 0 1 11 4.06V2a1 1 0 0 1 1-1M6.08 13A6 6 0 0 0 11 17.91V13zM13 13v4.91A6 6 0 0 0 17.91 13zm0-2h4.91A6 6 0 0 0 13 6.08zm-2-4.92A6 6 0 0 0 6.08 11H11z" clipRule="evenodd" />
    </IconBase>
  ))
);

CrosshairBold.displayName = 'CrosshairBold';

// Triple export pattern (lucide-react style)
export { CrosshairBold, CrosshairBold as CrosshairBoldIcon, CrosshairBold as SiCrosshairBold };
export default CrosshairBold;
export type { CrosshairBoldProps };
